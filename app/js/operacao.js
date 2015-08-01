var initOperacoes = function() {
  var isFirefox = typeof InstallTrigger !== 'undefined',
    hasDatePicker = false;

  if (!Modernizr.touch || isFirefox) {
    $("#opDate").attr('type', 'text').datepicker({
      dateFormat: 'dd/mm/yy',
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      nextText: 'Próximo',
      prevText: 'Anterior',
      beforeShowDay: customRange,
      minDate: 0,
      afterShow: function(input, inst, td) {
        inst.dpDiv.css('width', '400px');
        $(".ui-datepicker").css('width', $("#opDate").width());
      }
    });
    hasDatePicker = true;
  }

  function customRange(date) {
    var dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    if ($.inArray(dmy, reservedDates) == -1) {
      return [true, ""];
    } else {
      return [false, "", "Unavailable"];
    }
  }

  $.getJSON("http://surerussolutions.com/divegold-webservice/operation", function(data) {

    $('#opTable').dynatable({
      writers: {
        'date': function(record) {
          record.parsedDate = record.date;
          return moment(record.date).format('DD/MM/YYYY');
        },
        'status': function(record) {
          record.parsedStatus = record.status;
          return (record.status) ? "Confirmada" : "Em aberto";
        },
        'delete': function(record) {
          return "<button data-id='" + record.id + "' class='btn btn-danger btn-xs btn-raised btnRemoveOp'><span class='mdi-content-clear'></span></button>";
        }
      },
      inputs: {
        recordCountPageBoundTemplate: '{pageLowerBound} a {pageUpperBound} de',
        recordCountPageUnboundedTemplate: '{recordsShown} de',
        recordCountTotalTemplate: '{recordsQueryCount} {collectionName}',
        recordCountFilteredTemplate: ' (filtrado {recordsTotal} operações)',
        recordCountTextTemplate: '{text} {pageTemplate} {totalTemplate} {filteredTemplate}',
        perPageText: 'Mostrar: ',
        processingText: 'Processando...',
        paginationPrev: 'Anterior',
        paginationNext: 'Próximo',
        recordCountText: 'Exibindo '
      },
      features: {
        paginate: true
      },
      dataset: {
        records: data.operations
      }
    });
  }).fail(function() {

  });

  $(".tableContainer").on("click", "button", function(e) {
    deleteOp(e.currentTarget, e);
  });

  $("#btnAdicionarOp").click(function() {
    var operation = {},
      dateValue,
      dateArray;

    dateValue = $("#opDate").val();

    if (hasDatePicker) {
      dateArray = dateValue.split("/");
      operation.date = new Date(dateArray[2], dateArray[1] - 1, dateArray[0]).getTime();
    } else {
      dateArray = dateValue.split("-");
      operation.date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]).getTime();
    }
    operation.desc = $("#opName").val();
    addOperation(operation);
    $("#opDate").val("");
    $("#opName").val("");
  });

};

var getReservedDates = function() { //teste
  $.getJSON("http://surerussolutions.com/divegold-webservice/operation/status/0", function(data) {
    var dateArray = [];
    $.each(data.operations, function() {
      var datePattern = new Date(this.date);
      dateArray.push(datePattern.getDate() + "-" + (datePattern.getMonth() + 1) + "-" + datePattern.getFullYear());
    });
    reservedDates = dateArray;
    $("#opDate").datepicker("refresh");
  }).fail(function() {
    configTimeout("Ocorreu um erro ao buscar as datas das operações.");
  });
};

var deleteOp = function(buttonTag, e) {

  swal({
    title: "Tem certeza que deseja remover esta operação?",
    text: "Ao remover uma operação, todas as reservas feitas por clientes serão removidas.",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "rgb(44, 161, 44)",
    confirmButtonText: "Sim"
  }, function() {
    e.preventDefault();
    var operation = {},
      dynatable = $('#opTable').data('dynatable');

    operation.id = $(buttonTag).data("id");
    $.ajax({
      cache: false,
      url: "http://surerussolutions.com/divegold-webservice/operation/delete/" + operation.id,
      type: "POST",
      dataType: "json",
      data: JSON.stringify(operation),
      success: function(callback) {
        sweetAlert('Operação removida com sucesso!', '', 'success');
        dynatable.settings.dataset.originalRecords = $.grep(dynatable.settings.dataset.originalRecords,
          function(op, index) {
            if (op.id === operation.id) {
              return false;
            }
            return true;
          });
        dynatable.process();
        getReservedDates();
      },
      error: function(xhr, textStatus, error) {
        configTimeout("Ocorreu um erro ao tentar excluir esta operação.");
      }
    });
  });
};

var addOperation = function(operation) {
  if (!operation || !operation.desc || !operation.date) {
    configTimeout("Os campos de data e nome da operação são obrigatórios.");
    return;
  }

  saveOperations(operation);
};

var saveOperations = function(data) {
  var dynatable = $('#opTable').data('dynatable'),
    tableOperations,
    operation = {};

  if (!dynatable.settings) {
    return;
  }

  tableOperations = dynatable.settings.dataset.originalRecords;

  operation.id = 0;
  operation.type = {};
  operation.type.id = 1;
  operation.type.desc = "Livre - Mina da Passagem";
  operation.desc = data.desc;
  operation.date = data.date;
  operation.status = 0;

  console.log(JSON.stringify(operation));

  $.ajax({
    cache: false,
    url: "http://surerussolutions.com/divegold-webservice/operation/add",
    type: "POST",
    dataType: "json",
    data: JSON.stringify(operation),
    success: function(callback) {
      console.log(callback);
      dynatable.settings.dataset.originalRecords.push(callback);
      dynatable.process();
      sweetAlert('Operações salvas com sucesso!', '', 'success');
      getReservedDates();
    },
    error: function() {
      $.unblockUI();
      configTimeout("Ocorreu um erro ao enviar ao salvar as operações.");
    }
  });

};

$(document).ready(function() {
  if (window.location.href.indexOf("/operacoes") !== -1) {
    var reservedDates = [];
    getReservedDates();
    initOperacoes();
  }
});
