var CONFIRMATION = CONFIRMATION || {};

var ENV = {
  prodURL: "https://reservasdivegold.com/divegold-webservice",
  devURL: "https://reservasdivegold.com/divegold-dev"
};

var BASE_URL = ENV.devURL;

CONFIRMATION.dom = {
  removeCheckboxPadding: function() {
    $(".checkbox").parent().css('padding', '0');
  },
  centralizeTableCells: function() {
    $("#cfTable td").css('vertical-align', 'middle');
  },
  subscribeSortEvent: function() {
    $("#cfTable").on("click", "a", function(e) {
      removeCheckboxPadding();
      centralizeTableCells();
    });
  },
  subscribeComboEvent: function() {
    $(".comboOpenOperations").change(function(e) {
      CONFIRMATION.loadReservationsOnTable();
    });
  },
  subscribeCheckApproveEvent: function() {
    $("#cfTable").on("click", ".checkApprove", function(e) {
      CONFIRMATION.changeReservationStatus(e);
    });
  },
  subscribeSerachBoxEvent: function() {
    $('#dynatable-query-search-cfTable').keyup(function() {
      setTimeout(function() {
        $('.btnDeleteReservation').attr('disabled', '');
        CONFIRMATION.dom.subscribeCheckDeleteReservation();
        CONFIRMATION.dom.subscribeCheckboxes();
      }, 200);
    });
  },
  subscribeBtnConfirmOperation: function() {
    $("#btnConfirmOperation").click(function() {
      swal({
        title: "Deseja confirmar e fechar a operação " + $(".comboOpenOperations option:selected").text().split("-")[1] + "?",
        text: "Ao confirmar uma operação, todos os clientes com reservas aprovadas serão notificados da aprovação via email. Clientes com reservas pendentes serão notificados sobre o cancelamento de suas reservas.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(44, 161, 44)",
        confirmButtonText: "Sim",
        cancelButtonText: 'Cancelar'
      }, function(yes, callback) {
        if (yes) {
          setTimeout(function() {
            CONFIRMATION.confirmOperation();
          }, 500);
        }
      });
    });
  },
  subscribeCheckboxes: function() {
    $("#dynatable-pagination-links-cfTable").click(function() {
      setTimeout(function() {
        $('.btnDeleteReservation').attr('disabled', '');
        CONFIRMATION.dom.subscribeCheckDeleteReservation();
        CONFIRMATION.dom.subscribeCheckboxes();
      }, 200);
    });
  },
  subscribeCheckDeleteReservation: function() {
    $(".checkDelete").on("click").each(function() {
      $(this).change(function() {
        if ($('.checkDelete:checked').length) {
          $('.btnDeleteReservation').removeAttr('disabled');
        } else {
          $('.btnDeleteReservation').attr('disabled', '');
        }
      });
    });

  },
  subscribeDeleteReservationBtn: function() {
    $('.btnDeleteReservation').click(function() {
      CONFIRMATION.deleteReservations();
    });
  },
  subscribeRefreshSummaryBtn: function() {
    $('#btnRefreshSummary').click(function() {
      CONFIRMATION.showSummary();
    });
  },
  addDeleteButton: function() {
    if (!$(".btnDeleteReservation").length) {
      $(".dynatable-per-page").append("<button class='btn btn-danger btn-xs btn-raised btnDeleteReservation' disabled><span class='mdi-action-delete'></span></button>");
      this.subscribeDeleteReservationBtn();
    }
  },
  init: function() {
    this.subscribeComboEvent();
    this.subscribeDetailsEvent();
    this.subscribeBtnConfirmOperation();
    this.centralizeTableCells();
    this.subscribeRefreshSummaryBtn();
    this.subscribeCheckboxes();
    this.subscribeSerachBoxEvent();
  }
};

CONFIRMATION.hbs = {
  registerHelpers: function() {
    Handlebars.registerHelper('formatDate', function(longDate) {
      return moment(longDate).format('DD/MM/YYYY');
    });

    Handlebars.registerHelper('formatDiver', function(isDiver) {
      return (isDiver) ? "Sim" : "Não";
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

CONFIRMATION.deleteReservations = function() {
  swal({
    title: "Tem certeza que deseja remover esta(s) reserva(s)?",
    text: "Ao remover uma reserva, ela será excluída permanentemente. O responsável pela reserva será notificado sobre a reprovação da mesma.",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "rgb(44, 161, 44)",
    confirmButtonText: "Sim",
    cancelButtonText: 'Cancelar'
  }, function(yes) {
    if (yes) {
      var reservations = [];

      $('.checkDelete:checked').each(function() {
        var id = $(this).data('id');
        reservations.push(id);
      });

      CONFIRMATION.fireAjaxDeleteReservations(reservations);
    }
  });
};

CONFIRMATION.fireAjaxDeleteReservations = function(reservations) {
  $.blockUI({
    message: "Excluindo reservas...",
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

  $.ajax({
    cache: false,
    url: BASE_URL + "/reservation/delete",
    type: "POST",
    dataType: "text",
    contentType: "text/plain",
    data: "[" + reservations.toString() + "]",
    success: function(callback) {
      $.unblockUI();
      setTimeout(function() {
        swal({
          title: "Pronto!",
          text: "Reserva(s) deletada(s) com sucesso!",
          type: "success",
          timer: 3000
        }, function() {
          CONFIRMATION.loadReservationsOnTable();
          CONFIRMATION.tableAfterLoad();
        });
      }, 300);
    },
    error: function(error) {
      $.unblockUI();
      if (error.responseJSON && error.responseJSON.msg) {
        configTimeout(error.responseJSON.msg);
      } else {
        configTimeout("Ocorreu um erro ao tentar remover uma reserva.");
      }
    }
  });

};

CONFIRMATION.changeReservationStatus = function(e) {
  swal({
    title: "Tem certeza que deseja alterar o status desta reserva?",
    text: "Modificações no status da reserva acarretam em envio de e-mails para o responsável da reserva informando a sua alteração.",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "rgb(44, 161, 44)",
    confirmButtonText: "Sim"
  }, function() {
    if (!e || !e.currentTarget) {
      return;
    }

    if ($(e.currentTarget).prop('checked')) {
      CONFIRMATION.fireAjaxChangeStatus(false, $(e.currentTarget).data('id'), e);
    } else {
      CONFIRMATION.fireAjaxChangeStatus(true, $(e.currentTarget).data('id'), e);
    }
    return false;
  });
  e.preventDefault();
};

CONFIRMATION.fireAjaxChangeStatus = function(status, reservationId, e) {
  var blockMsg = "Aprovando reserva...",
    approve = "approve",
    toggleText = "Aprovada";

  if (!status) {
    blockMsg = "Cancelando reserva...";
    approve = "deny";
    toggleText = "Pendente";
  }

  $.blockUI({
    message: blockMsg,
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

  $.ajax({
    cache: false,
    url: BASE_URL + "/reservation/" + reservationId + "/" + approve,
    type: "POST",
    dataType: "json",
    data: "",
    success: function(callback) {
      $.unblockUI();
      $(e.currentTarget).siblings(".statusText").text(toggleText);
      if (toggleText === "Aprovada") {
        $(e.currentTarget).prop('checked', 'true');
      } else {
        $(e.currentTarget).removeAttr('checked');
      }
      e.preventDefault();
    },
    error: function() {
      $.unblockUI();
      e.preventDefault();
      configTimeout("Ocorreu um erro ao modificar o status de uma reserva");
    }
  });
};

CONFIRMATION.confirmOperation = function() {
  var operationId = $(".comboOpenOperations").val();

  if (!operationId) {
    return;
  }

  $.ajax({
    cache: false,
    url: BASE_URL + "/operation/close/" + operationId,
    type: "POST",
    dataType: "json",
    data: "",
    success: function(callback) {
      console.log(callback);
      swal({
        title: "Confirmada!",
        text: "Operação confirmada com sucesso!",
        type: "success",
        timer: 3000
      }, function() {
        setTimeout(function() {
          CONFIRMATION.getOpenOperations();
        }, 300);
      });

      // sweetAlert('Operação confirmada com sucesso!', '', 'success');

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

    $.getJSON(BASE_URL + "/reservation/" + reservationId, function(reservation) {
      var detailsTemplate = Handlebars.compile(hbsTemplate);

      $(".modal-body").html(detailsTemplate(reservation));
      $("#cfModal").modal('show');
      $(".dgTitle").focus();
    }).fail(function() {

    });
  }, 'html');
};

CONFIRMATION.clearSummary = function() {
  $.get('js/templates/sumarioReservas.hbs', function(hbsTemplate) {
    var summaryDiv = document.getElementById('summary');
    var summaryTemplate = Handlebars.compile(hbsTemplate);
    $(summaryDiv).html(summaryTemplate({}));
  }, 'html');
};

CONFIRMATION.showSummary = function() {
  // if (!currentTarget) {
  //   return;
  // }

  $.get('js/templates/sumarioReservas.hbs', function(hbsTemplate) {
    var summaryDiv = document.getElementById('summary'),
      reservationId = $(".comboOpenOperations").val();
    // var reservationId = $(currentTarget).data("id");

    $.getJSON(BASE_URL + "/operation/" + reservationId + "/summary", function(summary) {
      var summaryTemplate = Handlebars.compile(hbsTemplate);
      $(summaryDiv).html(summaryTemplate(summary));
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
  $.getJSON(BASE_URL + "/operation/status/0", function(data) {
    if (!data.operations || !data.operations.length) {
      dynatableData = $('#cfTable').data('dynatable');
      if (dynatableData && dynatableData.settings && dynatableData.settings.dataset) {
        dynatableData.settings.dataset.originalRecords = "";
        dynatableData.process();
        CONFIRMATION.clearSummary();
      }
      configTimeout("Não existem operações a serem aprovadas.");
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
  $('.btnDeleteReservation').attr('disabled', '');
  $.getJSON(BASE_URL + "/reservation/operation/" + reservationId, function(data) {
    //serachbox fix
    data.reservations.forEach(function(reserva, index) {
      console.log(reserva.name = reserva.client.name)
    });
    dynatableData = $('#cfTable').data('dynatable');
    if (dynatableData && (!data.reservations || !data.reservations.length)) {
      dynatableData.settings.dataset.originalRecords = "";
      dynatableData.process();
      CONFIRMATION.tableAfterLoad();
    } else {
      dynatableData = $('#cfTable').dynatable({
        writers: {
          'check': function(record) {
            return "<div class='checkbox'><label><input data-id='" + record.id + "' class='checkDelete' type='checkbox'><span class='checkbox-material'><span class='check'></span></span></label></div>";
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
          'status': function(record) {
            var approvedText = record.reservationStatus ? "Aprovada" : "Pendente",
              checked = record.reservationStatus ? "checked" : "";

            return "<div class='togglebutton'><label><input type='checkbox' data-id='" + record.id + "' " + checked + " class='checkApprove'><span class='toggle approveToggle'></span><span class='statusText'>" + approvedText + "</span></label></div>";
          },
          'details': function(record) {
            return "<button data-id='" + record.id + "' class='btn btn-info btn-xs btn-raised btn-fab btnViewDetails'><span class='mdi-action-info-outline'></span></button>";
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
          paginate: true,
          search: true
        },
        dataset: {
          records: data.reservations
        }
      }).data('dynatable');
      dynatableData.settings.dataset.originalRecords = data.reservations;
      dynatableData.paginationPage.set(1);
      dynatableData.process();
      CONFIRMATION.tableAfterLoad();
    }
  }).fail(function() {

  });
};

CONFIRMATION.tableAfterLoad = function() {
  CONFIRMATION.dom.removeCheckboxPadding();
  CONFIRMATION.dom.centralizeTableCells();
  CONFIRMATION.dom.subscribeCheckApproveEvent();
  CONFIRMATION.dom.subscribeCheckDeleteReservation();
  CONFIRMATION.dom.addDeleteButton();
  CONFIRMATION.showSummary();
  CONFIRMATION.dom.subscribeCheckboxes();
  CONFIRMATION.dom.subscribeSerachBoxEvent();
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
