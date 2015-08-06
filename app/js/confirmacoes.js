var CONFIRMATION = CONFIRMATION || {};

CONFIRMATION.dom = {};

CONFIRMATION.dom.removeCheckboxPadding = function() {
  $(".checkbox").parent().css('padding', '0');
};

CONFIRMATION.dom.subscribeComboEvent = function() {
  $(".comboOpenOperations").change(function() {
    CONFIRMATION.loadReservationsOnTable();
  });
};

CONFIRMATION.dom.subscribeSortEvent = function() {
  $("#cfTable").on("click", "a", function(e) {
    CONFIRMATION.dom.removeCheckboxPadding();
  });
};

CONFIRMATION.showReservationDetails = function(currentTarget, event) {
  if (!currentTarget) {
    return;
  }

  var reservationId = $(currentTarget).data("id");

  $.getJSON("http://surerussolutions.com/divegold-webservice/reservation/" + reservationId, function(reservation) {
    console.log(reservation);
    $("#cfModal").modal('show');
  }).fail(function() {

  });

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
            return moment(record.date).format('DD/MM/YYYY');
          },
          'tanks': function(record) {
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
    }
  }).fail(function() {

  });
};

CONFIRMATION.initConfirmacoes = function() {
  var self = this;
  CONFIRMATION.getOpenOperations();
  CONFIRMATION.dom.subscribeComboEvent();
  CONFIRMATION.dom.subscribeDetailsEvent();
  CONFIRMATION.dom.subscribeSortEvent();
};

$(document).ready(function() {
  if (window.location.href.indexOf("/confirmacoes") !== -1) {
    CONFIRMATION.initConfirmacoes();
    var dynatable, dynatableData;
  }
});
