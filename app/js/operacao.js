var initOperacoes = function() {
  $("#opDate").datepicker({
    dateFormat: 'dd/mm/yy',
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    nextText: 'Próximo',
    prevText: 'Anterior',
    minDate: 0
  });

  $("#btnAdicionarOp").click(function() {
    var operation = {};
    operation.date = $("#opDate").val();
    operation.name = $("#opName").val();
    addOperation(operation);

    $("#opDate").val("");
    $("#opName").val("");
  });

  $("#btnSaveOperations").click(function() {
    saveOperations();
  });

};

var bindDeleteButton = function() {
  $(".btnRemoveOp").click(function() {
    var r = confirm("Tem certeza que deseja remover esta operação?");
    if (r === true) {
      $(this).parents(".lineOpItem").slideUp(300, function() {
        $(this).remove();
      });
    } else {
      e.preventDefault();
    }
  });
};

var addOperation = function(operation) {
  $.get('js/templates/lineItemOp.hbs', function(data) {
    var lineItemOp = Handlebars.compile(data);
    $('.opPanel').append(lineItemOp(operation));
    bindDeleteButton();
  }, 'html');
};

var saveOperations = function() {
  sweetAlert('Operações salvas com sucesso!', '', 'success');
};

$(document).ready(function() {
  if (window.location.href.indexOf("/operacoes") !== -1) {
    initOperacoes();
  }
});
