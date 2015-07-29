var initOperacoes = function() {

  if (!Modernizr.touch) {
    $("#opDate").attr('type', 'text').datepicker({
      dateFormat: 'dd/mm/yy',
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      nextText: 'Próximo',
      prevText: 'Anterior',
      minDate: 0,
      afterShow: function(input, inst, td) {
        inst.dpDiv.css('width', '400px');
        $(".ui-datepicker").css('width', $("#opDate").width());
      }
    });
    //$(".ui-datepicker").css('width', $("#opDate").width());
  }

  $.getJSON("https://surerussolutions.com/divegold-webservice/operation", function(data) {

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
    deleteOp(e.currentTarget);
  });

  $("#btnAdicionarOp").click(function() {
    var operation = {},
      dateValue,
      dateArray;

    dateValue = $("#opDate").val();
    dateArray = dateValue.split("/");
    dateValue = dateArray[1] + '-' + dateArray[0] + '-' + dateArray[2];
    operation.date = new Date(dateValue).getTime();

    operation.desc = $("#opName").val();

    addOperation(operation);

    $("#opDate").val("");
    $("#opName").val("");
  });

};

var deleteOp = function(buttonTag) {
  var r = confirm("Tem certeza que deseja remover esta operação?");
  if (r === true) {
    var operation = {},
      dynatable = $('#opTable').data('dynatable');

    operation.id = $(buttonTag).data("id");
    operation.type = {};
    operation.type.id = 1;
    operation.type.desc = "Livre - Mina da Passagem";
    operation.desc = "TESTE-DELETE";
    operation.date = new Date().getTime();
    operation.status = 0;

    $.ajax({
      cache: false,
      url: "//surerussolutions.com/divegold-webservice/operation/delete",
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
      },
      error: function(xhr, textStatus, error) {
        configTimeout("Ocorreu um erro ao tentar excluir esta operação.");
      }
    });
  } else {
    e.preventDefault();
  }
};

var addOperation = function(operation) {
  if (!operation) {
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
    url: "//surerussolutions.com/divegold-webservice/operation/add",
    type: "POST",
    dataType: "json",
    data: JSON.stringify(operation),
    success: function(callback) {
      console.log(callback);
      dynatable.settings.dataset.originalRecords.push(callback);
      dynatable.process();
      sweetAlert('Operações salvas com sucesso!', '', 'success');
    },
    error: function() {
      $.unblockUI();
      configTimeout("Ocorreu um erro ao enviar ao salvar as operações.");
    }
  });

};

$(document).ready(function() {
  if (window.location.href.indexOf("/operacoes") !== -1) {
    initOperacoes();
  }
});
