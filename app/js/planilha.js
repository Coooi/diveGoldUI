var getOperations = function() {
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
  $.getJSON("http://surerussolutions.com/divegold-webservice/operation/status/1", function(data) {
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
      $(".comboOperacoes").append(itemHtml);
    });
    $.unblockUI();
  }).fail(function() {
    configTimeout("Ocorreu um erro ao buscar a lista de operações.");
  });
};

var generate = function() {
  var operationId = $(".comboOperacoes").val();
  if (operationId) {
    $.getJSON("http://surerussolutions.com/divegold-webservice/operation/artifacts/" + operationId, function(data) {
      sweetAlert(data.msg, '', 'success');
    }).fail(function(data) {
      var error = JSON.parse(data.responseText);
      configTimeout(error.msg);
    });
  } else {
    configTimeout("Favor escolha uma operação.");
  }
};

var initPlanilha = function() {
  var self = this;
  $("#btnGenerate").click(function() {
    self.generate();
  });
};

$(document).ready(function() {
  if (window.location.href.indexOf("/planilha") !== -1) {
    initPlanilha();
    getOperations();
  }
});
