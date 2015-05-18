var applyPhoneMask = function(element){
  var estados = ["SP", "RJ", "ES", "AM", "PA", "MA", "RR", "AP"];
  if (element.val() && estados.indexOf(element.val()) > -1){
    $(".cel").mask("(99) 99999-9999");
  }else {
    $(".cel").mask("(99) 9999-9999");
  }
};

var initEvents = function() {
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
      comboDatas = $("#comboDatas"),
      btnDatas = $("#btnDatas"),
      divEquipamentos = $("#equipamentos"),
      divPousada = $("#pousada"),
      cep = $("#cep"),
      btnAddTanque = $(".btnAddTanque"),
      btnCilindro = $("btnCilindro"),
      btnGases = $("btnGases"),
      btnRemoveDate = $(".btnRemoveDate"),
      self = this;

  $("#cpf").mask("999.999.999-99");
  cep.mask("99.999-999");
  $("#uf").mask("aa");
  $(".cel").mask("(99) 9999-9999");

  $("#uf").blur(function(){
    applyPhoneMask($(this));
  });

  var enabledAddBtn = function() {
    if ( $('#btnCilindro').text() !== "Selecione" &&
         $("#btnGases").text() !== "Selecione" &&
         $("#btnDatas").text() !== "Selecione" ){
      btnAddTanque.removeAttr('disabled', '');
    } else {
      btnAddTanque.attr('disabled', '');
    } 
  };

  dataMergulhoDP.datepicker({
    dateFormat: 'dd/mm/yy',
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    nextText: 'Próximo',
    prevText: 'Anterior'
  });

  comboNivelMergulho.find('li').on('click', function(e) {
    e.preventDefault();
    btnNivelMergulho.text($(this).text());
  });

  comboTipoAp.find('li').on('click', function(e) {
    e.preventDefault();
    btnTipoAp.text($(this).text());
  });

  btnAddDate.click(function(e) {
    var template1 = "<div class='form-group row'><label class='col-md-1 col-xs-2 control-label'></label><div class='col-md-2 col-xs-5'><input id='dataMergulho' type='text' name='regular' class='form-control' value='{{date}}' disabled></div><div class='col-md-1 col-xs-1 btnRemoveDate'><button type='button' class='btn btn-danger btn-xs'><span class='glyphicon glyphicon-remove-sign'></span> Remover</button></div></div>";
    var template2 = "<li><a href='#' value={{date}}>{{date}}</a></li>";
    

    var dataMergulhoTemplate = Handlebars.compile(template1);
    var gasTanqueRowTemplate = Handlebars.compile(template2);
    

    var diveDate,
      dateHtml,
      dpDate = dataMergulhoDP.val();

    if (dpDate && "" !== dpDate) {
      dataMergulhoDP.val("");
      diveDate = {
        "date": dpDate
      };
      dateHtml = dataMergulhoTemplate(diveDate);
      var gasTanqueHtml = gasTanqueRowTemplate(diveDate);
      if (gasTanqueHtml) {
        comboDatas.append(gasTanqueHtml);
        comboDatas.find('a').on('click', function(e) {
            e.preventDefault();
            btnDatas.text($(this).text());
            enabledAddBtn();
        });
      }
      if (dateHtml) {
        $(".datasReserva").append(dateHtml);
        $(".btnRemoveDate").last().click(function(e) {
          e.preventDefault();
          $(this).parent().slideUp(300, function() {
            $(this).remove();
          });
          comboDatas.find("[value='" + dpDate + "']").parent().remove();
          btnDatas.text("Selecione");

        });
      }

    }
  });

  btnAddTanque.click(function(e){
    var template = "<div class='form-group row gasTypesRowSet'><label class='col-md-1 col-xs-12 control-label'>Data</label><div class='col-md-2 col-xs-12'><input type='text' name='regular' class='form-control' value='{{date}}' disabled></div><label class='col-md-1  col-xs-12 control-label'>Cilindro</label><div class='col-md-3 col-xs-12'><input type='text' name='regular' class='form-control' value='{{cilindro}}' disabled></div><label class='col-md-1 col-xs-12 control-label'>Gases</label><div class='col-md-3  col-xs-12'><input type='text' name='regular' class='form-control' value='{{gas}}' disabled></div><div class='col-md-1 col-xs-12'><button type='button' class='btn btn-danger btn-sm btnRemoveTanque' disabled><span class='glyphicon glyphicon-remove-sign'></span></button></div></div>";
    var gasTanqueSet = Handlebars.compile(template);
    var setHtml,
        setDate = $('#btnDatas').text(),
        setCilindro = $('#btnCilindro').text(),
        setGas = $('#btnGases').text();

    setHtml = gasTanqueSet({ 
                "date" : setDate,
                "cilindro" : setCilindro,
                "gas" : setGas
              });

    $(".gasTypesRowDates").append(setHtml);
  });

  dataEntradaDP.datepicker({
    dateFormat: 'dd/mm/yy',
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    nextText: 'Próximo',
    prevText: 'Anterior'
  });

  dataSaidaDP.datepicker({
    dateFormat: 'dd/mm/yy',
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    nextText: 'Próximo',
    prevText: 'Anterior'
  });

  divEquipamentos.hide();
  divPousada.hide();

  checkEquipamentos.change(function(e) {
    e.preventDefault();
    if ($(this).prop("checked")) {
      divEquipamentos.slideDown("slow");
      //$("#equipamentos").removeClass('hidden');
    } else {
      divEquipamentos.slideUp("slow");
    }
  });

  checkPousada.change(function(e) {
    e.preventDefault();
    if ($(this).prop("checked")) {
      divPousada.slideDown("slow");
    } else {
      divPousada.slideUp("slow");
    }
  });

  $("#comboCilindro").find('li').on('click', function(e) {
    e.preventDefault();
    $(this).parent().parent().find('#btnCilindro').text($(this).text());
    enabledAddBtn();
  });

  $("#comboGases").find('li').on('click', function(e) {
    e.preventDefault();
    $(this).parent().parent().find('#btnGases').text($(this).text());
    enabledAddBtn();
  });

  

  cep.blur(function(){
    var cepValue = $(this).val().replace('.', '').replace('-',''); 

    if( cepValue ){
         var url = 'http://cep.correiocontrol.com.br/'+cepValue+'.json';

         $.getJSON(url, function(data){
                $("#rua").val(data.logradouro);
                $("#bairro").val(data.bairro);
                $("#cidade").val(data.localidade);
                $("#uf").val(data.uf);
                self.applyPhoneMask($("#uf"));
            }).fail(function(){
                console.log('CEP inexistente');
        });
    }
  });
};



$(document).ready(function() {

  initEvents();

});
