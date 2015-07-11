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
  $.getJSON("http://ec2-54-232-198-208.sa-east-1.compute.amazonaws.com:8080/divegold-webservice/rest/operation/", function(data) {
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
  // $.ajax({
  //   cache: false,
  //   url: "http://ec2-54-232-198-208.sa-east-1.compute.amazonaws.com:8080/divegold-webservice/rest/reservation/btnGenerate/",
  //   type: "POST",
  //   dataType: "json",
  //   data: JSON.stringify(reservation),
  //   context: Form,
  //   success: function(callback) {
  //     //console.log(JSON.parse(callback));
  //     $.unblockUI();
  //     sweetAlert('Solicitação de reserva realizada com sucesso!', 'Você receberá um email com o resumo da sua solicitação. Lembramos que sua reserva ainda não está confirmada e está sujeita à disponibilidade. Você receberá outro email quando sua reserva forma confirmada pela DIVEGOLD', 'success');
  //     $('.center').html("<div class='text-center'><img src='https://s3-sa-east-1.amazonaws.com/felipemedia/divegold_logo.png' width='35' height='35' alt='DiveGold Logo'>Reserva efetuada com sucesso!</div>");
  //   },
  //   error: function() {
  //     configTimeout("Ocorreu um erro ao enviar a reserva.");
  //   }
  // });
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
