$(document).ready(function(){
  var datelist = [];

  $("#cpf").mask("999.999.999-99");
  $("#cep").mask("99.999-999");
  $("#uf").mask("aa");
  $(".cel").mask("(99) 99999-9999");

  $("#dataMergulho").datepicker({
              dateFormat : 'dd/mm/yy',
              dayNames : [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
              dayNamesMin : [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D' ],
              dayNamesShort : [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom' ],
              monthNames : [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
              monthNamesShort : [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
              nextText : 'Próximo',
              prevText : 'Anterior',
        });
});