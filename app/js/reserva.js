var execTemplateEvents = function(){
  $(".comboCilindro").find('li').on('click', function(e){
    e.preventDefault();
    $(this).parent().parent().find('.btnCilindro').text($(this).text());
  });

  $(".comboGases").find('li').on('click', function(e){
    e.preventDefault();
    $(this).parent().parent().find('.btnGases').text($(this).text());
  });
};

var initEvents = function(){
  var checkEquipamentos = $("#checkEquipamentos"),
      checkPousada = $("#checkPousada"),
      btnAddDate = $(".btnAddDate"),
      dataMergulhoDP = $("#dataMergulho"),
      dataEntradaDP = $("#dataEntrada"),
      dataSaidaDP = $("#dataSaida"),
      comboNivelMergulho = $("#comboNivelMergulho"),
      btnNivelMergulho = $("#btnNivelMergulho"),
      comboTipoAp = $("#comboTipoAp"),
      btnTipoAp = $("#btnTipoAp"),
      divEquipamentos = $("#equipamentos"),
      divPousada = $("#pousada"),
      self = this;

  $("#cpf").mask("999.999.999-99");
  $("#cep").mask("99.999-999");
  $("#uf").mask("aa");
  $(".cel").mask("(99) 99999-9999");

  dataMergulhoDP.datepicker({
      dateFormat : 'dd/mm/yy',
      dayNames : [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
      dayNamesMin : [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D' ],
      dayNamesShort : [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom' ],
      monthNames : [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
      monthNamesShort : [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
      nextText : 'Próximo',
      prevText : 'Anterior'
  });

  comboNivelMergulho.find('li').on('click', function(e){
    e.preventDefault();
    btnNivelMergulho.text($(this).text());
  });

  comboTipoAp.find('li').on('click', function(e){
    e.preventDefault();
    btnTipoAp.text($(this).text());
  });

  btnAddDate.click(function(){
    var template1 = "<div class='form-group row'><label class='col-md-1 col-xs-2 control-label'></label><div class='col-md-2 col-xs-5'><input id='dataMergulho' type='text' name='regular' class='form-control' value='{{date}}' disabled></div><div class='col-md-1 col-xs-1 btnRemoveDate'><button type='button' class='btn btn-danger btn-xs'><span class='glyphicon glyphicon-remove-sign'></span> Remover</button></div></div>";
    var template2 = "<div class='form-group row col-md-20 col-xs-12 gasTypesRow'><label class='col-md-1 col-xs-12 control-label'>Data</label><div class=''><div class='col-md-2 col-xs-5'><input type='text' class='form-control' placeholder='' value='{{date}}' disabled><div class='help-block with-errors'></div></div></div><label class='col-md-1 col-xs-12 control-label'>Cilindro</label><div class='col-md-3 col-sm-3 col-xs-12'><!-- Split button --><div class='btn-group'><button id='btnCilindro' type='button' class='btn btn-primary btnCilindro'>Selecione</button><button type='button' class='btn btn-primary dropdown-toggle' data-toggle='dropdown' aria-expanded='false'><span class='caret'></span><span class='sr-only'>Toggle Dropdown</span></button><ul id='comboCilindro' class='dropdown-menu comboCilindro' role='menu'><li><a href='#'>Cilindro 1</a></li><li><a href='#'>Cilindro 2</a></li><li><a href='#'>Cilindro 3</a></li><li><a href='#'>Cilindro 4</a></li></ul></div></div><label class='col-md-1 col-xs-12 control-label'>Gases</label><div class='col-md-3 col-xs-12'><!-- Split button --><div class='btn-group'><button id='btnGases' type='button' class='btn btn-primary btnGases'>Selecione</button><button type='button' class='btn btn-primary dropdown-toggle' data-toggle='dropdown' aria-expanded='false'><span class='caret'></span><span class='sr-only'>Toggle Dropdown</span></button><ul id='comboGases' class='dropdown-menu comboGases' role='menu'><li><a href='#'>Gas 1</a></li><li><a href='#'>Gas 2</a></li><li><a href='#'>Gas 3</a></li><li><a href='#'>Gas 4</a></li></ul></div></div></div>";
    var dataMergulhoTemplate = Handlebars.compile(template1);
    var gasTanqueRowTemplate = Handlebars.compile(template2);

    var diveDate,
        dateHtml,
        dpDate = dataMergulhoDP.val();

    if (dpDate && "" !== dpDate) {
      dataMergulhoDP.val("");
      diveDate = { "date": dpDate};
      dateHtml = dataMergulhoTemplate(diveDate);
      gasTanqueHtml = gasTanqueRowTemplate(diveDate);
      if (gasTanqueHtml) {
        $(".gasTypesRowDates").append(gasTanqueHtml);
        self.execTemplateEvents();
      }
      if (dateHtml) {
        $(".datasReserva").append(dateHtml);
        $(".btnRemoveDate").last().click(function(e){
          e.preventDefault();
          $(this).parent().slideUp(300, function() {
            $(this).remove();
          });
          $('.gasTypesRowDates').find("input[value='" + dpDate + "']").parents(".gasTypesRow").slideUp(300, function() {
            $(this).remove();
          });
          e.stopPropagation();
        });
      }
      
    }
  });

  dataEntradaDP.datepicker({
      dateFormat : 'dd/mm/yy',
      dayNames : [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
      dayNamesMin : [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D' ],
      dayNamesShort : [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom' ],
      monthNames : [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
      monthNamesShort : [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
      nextText : 'Próximo',
      prevText : 'Anterior'
  });

  dataSaidaDP.datepicker({
      dateFormat : 'dd/mm/yy',
      dayNames : [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
      dayNamesMin : [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D' ],
      dayNamesShort : [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom' ],
      monthNames : [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
      monthNamesShort : [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
      nextText : 'Próximo',
      prevText : 'Anterior'
  });

  divEquipamentos.hide();
  divPousada.hide();

  checkEquipamentos.change(function(e){
    e.preventDefault();
    if ( $(this).prop( "checked" ) ) {
      divEquipamentos.slideDown("slow");
      //$("#equipamentos").removeClass('hidden');
    } else {
      divEquipamentos.slideUp("slow");
    }
  });

  checkPousada.change(function(e){
    e.preventDefault();
    if ( $(this).prop( "checked" ) ) {
      divPousada.slideDown("slow");
    } else {
      divPousada.slideUp("slow");
    }
  });

};

$(document).ready(function(){

  initEvents();

});