var CONFIRMATION = CONFIRMATION || {};

CONFIRMATION.dom = {
  removeCheckboxPadding: function() {
    $(".checkbox").parent().css('padding', '0');
  },
  centralizeDetailsBtn: function() {
    $(".btnViewDetails").parent().addClass('paddingRight');
  },
  subscribeSortEvent: function() {
    $("#cfTable").on("click", "a", function(e) {
      removeCheckboxPadding();
      centralizeDetailsBtn();
    });
  },
  subscribeComboEvent: function() {
    $(".comboOpenOperations").change(function() {
      CONFIRMATION.loadReservationsOnTable();
    });
  },
  subscribeBtnConfirmOperation: function() {
    $("#btnConfirmOperation").click(function() {
      CONFIRMATION.confirmOperation();
    });
  },
  init: function() {
    this.subscribeComboEvent();
    this.subscribeDetailsEvent();
    this.subscribeSortEvent();
    this.subscribeBtnConfirmOperation();
  }
};

CONFIRMATION.hbs = {
  registerHelpers: function() {
    Handlebars.registerHelper('formatDate', function(longDate) {
      return moment(longDate).format('DD/MM/YYYY');
    });

    Handlebars.registerHelper('formatCpfCnpj', function(cpfCnpj) {
      var formatedString = "";

      if (cpfCnpj.length == 11) {
        formatedString = cpfCnpj.substr('0', '3') + '.' + cpfCnpj.substr('3', '3') + '.' + cpfCnpj.substr('6', '3') + '-' + cpfCnpj.substr('9', '2');
      } else {
        formatedString = cpfCnpj.substr('0', '2') + '.' + cpfCnpj.substr('2', '3') + '.' + cpfCnpj.substr('5', '3') + '/' + cpfCnpj.substr('8', '4') + '-' + cpfCnpj.substr('12', '2');
      }

      return formatedString;
    });

    Handlebars.registerHelper('formatCelTel', function(telCel) {
      var formatedString = "";

      if (telCel.length == 10) {
        formatedString = '(' + telCel.substr('0', '2') + ') ' + telCel.substr('2', '4') + '-' + telCel.substr('6', '4');
      } else {
        formatedString = '(' + telCel.substr('0', '2') + ') ' + telCel.substr('2', '5') + '-' + telCel.substr('7', '4');
      }

      return formatedString;
    });
  }
};

CONFIRMATION.confirmOperation = function() {
  var operationId = $(".comboOpenOperations").val();

  if (!operationId) {
    return;
  }

  $.ajax({
    cache: false,
    url: "http://surerussolutions.com/divegold-webservice/operation/close/" + operationId,
    type: "POST",
    dataType: "json",
    data: "",
    success: function(callback) {
      console.log(callback);
      sweetAlert('Operação confirmada com sucesso!', '', 'success');
      CONFIRMATION.getOpenOperations();
    },
    error: function() {
      $.unblockUI();
      configTimeout("Ocorreu um erro ao enviar ao salvar as operações.");
    }
  });
};

CONFIRMATION.showReservationDetails = function(currentTarget, event) {
  if (!currentTarget) {
    return;
  }

  $.get('js/templates/detalhesReserva.hbs', function(hbsTemplate) {
    var reservationId = $(currentTarget).data("id");

    $.getJSON("http://surerussolutions.com/divegold-webservice/reservation/" + reservationId, function(reservation) {
      var detailsTemplate = Handlebars.compile(hbsTemplate);

      $(".modal-body").html(detailsTemplate(reservation));
      $("#cfModal").modal('show');
      $(".dgTitle").focus();
    }).fail(function() {

    });
  }, 'html');
};

CONFIRMATION.dom.subscribeDetailsEvent = function() {
  $("#cfTable").on("click", "button", function(e) {
    CONFIRMATION.showReservationDetails(e.currentTarget, e);
  });
};

CONFIRMATION.getOpenOperations = function() {
  $.blockUI({
    message: 'Carregando lista de operações...',
    css: {
      border: 'none',
      padding: '15px',
      backgroundColor: '#000',
      '-webkit-border-radius': '10px',
      '-moz-border-radius': '10px',
      opacity: 0.5,
      color: '#fff'
    }
  });
  $.getJSON("http://surerussolutions.com/divegold-webservice/operation/status/0", function(data) {
    if (!data.operations) {
      configTimeout("Não existem operações para geração de planilhas.");
      return;
    }

    var dateArray = [],
      templateItem = "<option value='{{id}}'>{{date}} - {{desc}}</option>",
      opTemplate = Handlebars.compile(templateItem);

    $(".comboOpenOperations").html("");
    $.each(data.operations, function() {
      var comboString = "",
        opItem = {};
      var datePattern = new Date(this.date);
      opItem.id = this.id;
      opItem.desc = this.desc;
      opItem.date = datePattern.getDate() + "/" + (datePattern.getMonth() + 1) + "/" + datePattern.getFullYear();
      var itemHtml = opTemplate(opItem);
      $(".comboOpenOperations").append(itemHtml);
    });
    $.unblockUI();
    CONFIRMATION.loadReservationsOnTable();
  }).fail(function() {
    configTimeout("Ocorreu um erro ao buscar a lista de operações.");
  });
};

CONFIRMATION.loadReservationsOnTable = function() {
  var reservationId = $(".comboOpenOperations").val();

  if (!reservationId) {
    //configTimeout("Não há operações cadastradas.");
  }

  $.getJSON("http://surerussolutions.com/divegold-webservice/reservation/operation/" + reservationId, function(data) {
    dynatableData = $('#cfTable').data('dynatable');
    if (!data.reservations || !data.reservations.length) {
      dynatableData.settings.dataset.originalRecords = "";
      dynatableData.process();
      CONFIRMATION.dom.removeCheckboxPadding();
      CONFIRMATION.dom.centralizeDetailsBtn();
    } else {
      dynatableData = $('#cfTable').dynatable({
        writers: {
          'details': function(record) {
            return "<button data-id='" + record.id + "' class='btn btn-info btn-xs btn-raised btnViewDetails'><span class='mdi-action-info-outline'></span></button>";
          },
          'name': function(record) {
            return record.client.name;
          },
          'date': function(record) {
            record.parsedDate = record.reservationDate;
            return moment(record.reservationDate).format('DD/MM/YYYY    HH:mm');
          },
          'tanks': function(record) {
            record.tanks = record.tankInfo.length;
            return record.tankInfo ? record.tankInfo.length : "";
          },
          'gears': function(record) {
            return record.gearInfo ? "Sim" : "Não";
          },
          'innNeeded': function(record) {
            return record.innNeeded ? "Sim" : "Não";
          },
          'approve': function(record) {
            return "<div class='checkbox'><label><input data-id='" + record.id + "' type='checkbox'><span class='checkbox-material'><span class='check'></span></span></label></div>";
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
          records: data.reservations
        }
      }).data('dynatable');
      dynatableData.settings.dataset.originalRecords = data.reservations;
      dynatableData.process();
      CONFIRMATION.dom.removeCheckboxPadding();
      CONFIRMATION.dom.centralizeDetailsBtn();
    }
  }).fail(function() {

  });
};

CONFIRMATION.initConfirmacoes = function() {
  CONFIRMATION.getOpenOperations();
  CONFIRMATION.dom.init();
  CONFIRMATION.hbs.registerHelpers();
};

$(document).ready(function() {
  if (window.location.href.indexOf("/confirmacoes") !== -1) {
    CONFIRMATION.initConfirmacoes();
    var dynatableData;
  }
});
