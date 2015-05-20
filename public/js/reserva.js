var getAvailableDates = function() {
    $.getJSON("http://0.0.0.0:8081/operation.json", function(data){
      var dateArray = [];
      $.each(data.operations, function() {
        var datePattern = new Date(this.date);
        dateArray.push( datePattern.getDate() + "-" + 
                        + (datePattern.getMonth()+1) + "-" + datePattern.getFullYear() );
      });
      datelist = dateArray;
      $("#datepicker").datepicker("refresh");
      $.unblockUI();
  }).fail(function(){
      configTimeout("Ocorreu um erro ao buscar as datas de mergulho.");
  });
};

var getDiveDates = function() {
  $("#dataMergulho").datepicker({
    
        dateFormat : 'dd/mm/yy',
        dayNames : [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
        dayNamesMin : [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D' ],
        dayNamesShort : [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom' ],
        monthNames : [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
        monthNamesShort : [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
        nextText : 'Próximo',
        prevText : 'Anterior',
        beforeShowDay : function(date) {

          var datePattern = "";
          datePattern += date.getDate() + "-";
          datePattern += (date.getMonth() + 1)
              + "-";
          datePattern += date.getFullYear();
          if ($.inArray(datePattern, datelist) >= 0) {
            return [ true, "" ];
          } else {
            return [ false, "" ];
          }
        }
  });

  $("#dataMergulho").click(function() {
    getAvailableDates(); 
  });

};

var applyPhoneMask = function(element){
  var estados = ["SP", "RJ", "ES", "AM", "PA", "MA", "RR", "AP"];
  if (element.val() && estados.indexOf(element.val()) > -1){
    $(".cel").mask("(99) 99999-9999");
  }else {
    $(".cel").mask("(99) 9999-9999");
  }
};

var applyMasks = function() {
  $("#cpf").mask("999.999.999-99");
  $("#cnpj").mask("99.999.999/9999-99");
  $("#cep").mask("99.999-999");
  $("#uf").mask("aa");
  $(".cel").mask("(99) 9999-9999");
  $(".equipment").mask("9?9");
};

var configTimeout = function( msg ){
  console.log(msg);
  $.unblockUI();
  alert(msg);
};

var populateAparts = function() {
  var url = 'http:54.207.110.27:8080/divegold-webservice/rest/',
       templateItem = "<li><a href='#' value={{type}}>{{type}}</a></li>";
       apItemTemplate = Handlebars.compile(templateItem);

  $.getJSON("http://0.0.0.0:8081/apartype.json", function(data){
      $.each(data.innApartTypes, function() {
        var itemHtml = apItemTemplate(this);
        $("#comboTipoAp").append(itemHtml);
      });

      getDiveDates();
  }).fail(function(){
      getDiveDates();
      configTimeout('Não foi possível localizar os tipos de acomodacoes.');
  });
};

var populateGases = function() {
  var url = 'http:54.207.110.27:8080/divegold-webservice/rest/',
       templateItem = "<li><a href='#' value={{type}}>{{type}}</a></li>";
       gasItemTemplate = Handlebars.compile(templateItem);

  $.getJSON("http://0.0.0.0:8081/gastype.json", function(data){
      $.each(data.gasTypes, function() {
        var itemHtml = gasItemTemplate(this);
        $("#comboGases").append(itemHtml);
      });
      populateAparts();
  }).fail(function(){
      configTimeout('Não foi possível localizar os tipos de gases.');
      populateAparts();
  });
};

var populateTanks = function() {
  var url = 'http:54.207.110.27:8080/divegold-webservice/rest/',
       templateItem = "<li><a href='#' value={{type}}>{{type}}</a></li>";
       tankItemTemplate = Handlebars.compile(templateItem);

  $.getJSON("http://0.0.0.0:8081/tanktype.json", function(data){
      $.each(data.tankTypes, function() {
        var itemHtml = tankItemTemplate(this);
        $("#comboCilindro").append(itemHtml);
      });
      populateGases();
  }).fail(function(){
      configTimeout('Não foi possível localizar os tipos de cilindros.');
      populateGases();
  });
};

var populateCombos = function() {
  // $.blockUI({ message: 'Carregando informações' });
  $.blockUI({
    message: 'Carregando informações de cadastro',
    css: { 
            border: 'none', 
            padding: '15px', 
            backgroundColor: '#000', 
            '-webkit-border-radius': '10px', 
            '-moz-border-radius': '10px', 
            opacity: 0.5, 
            color: '#fff' 
        } });

   var url = 'http:54.207.110.27:8080/divegold-webservice/rest/',
       templateItem = "<li><a href='#' value={{type}}>{{type}}</a></li>";
       dataMergulhoTemplate = Handlebars.compile(templateItem);

   $.getJSON("http://0.0.0.0:8081/divertype.json", function(data){
      $.each(data.diverTypes, function() {
        var itemHtml = dataMergulhoTemplate(this);
        $("#comboNivelMergulho").append(itemHtml);
      });      
      populateTanks();
    }).fail(function(){
        configTimeout('Não foi possível localizar os niveis de mergulhador.');
        populateTanks();
    });
};

var sendPostRequest = function() {
  $("#formReserva").submit(function(e){


   if ( $('.datasReserva input').length === 0 ){
      //erro
   }

    e.preventDefault();

    var data = {};
    var Form = this;

    //Gathering the Data
    //and removing undefined keys(buttons)
    // $.each(this.elements, function(i, v){
    //         var input = $(v);
    //     data[input.attr("name")] = input.val();
    //     delete data["undefined"];
    // });

    data.name = $("#userName").val();
    data.cpf = $("#cpf").val().replace('.', '').replace('-','');
    data.cnpj = $("#cnpj").val().replace('.', '').replace('-','').replace('/', '');
    data.cep = $("#cep").val().replace('.', '').replace('-','').replace(' ', '');
    data.address = $("#rua").val();
    data.city = $("#cidade").val();
    data.uf = $("#uf").val();
    data.number = $("#numero").val();
    data.comp = $("#comp").val();
    data.region = $("#bairro").val();
    data.tel = $("#tel").val();
    data.cel = $("#cel").val();
    data.email = $("#email").val();
    data.diverLevel = ( $("#btnNivelMergulho").text() !== "Selecione" ) ? $("#btnNivelMergulho").text() : "";


    //Form Validation goes here....

    //Save Form Data........
    $.ajax({
        cache: false,
        url : "/teste",
        type: "POST",
        dataType : "json",
        data : JSON.stringify(data),
        context : Form,
        success : function(callback){
            //Where $(this) => context == FORM
            console.log(JSON.parse(callback));
            $(this).html("Success!");
        },
        error : function(){
            $(this).html("Error!");
        }
    });
  });
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

  applyMasks();

  $("#uf").blur(function(){
    applyPhoneMask($(this));
  });

  $("#cpfRadio").click(function(){
    $("#cpf").removeAttr('disabled', '');
    $("#cnpj").attr('disabled', '');
  });

  $("#cnpjRadio").click(function(){
    $("#cnpj").removeAttr('disabled', '');
    $("#cpf").attr('disabled', '');
  });

  $("#cpfRadio").click();

  var enabledAddBtn = function() {
    if ( $('#btnCilindro').text() !== "Selecione" &&
         $("#btnGases").text() !== "Selecione" &&
         $("#btnDatas").text() !== "Selecione" ){
      btnAddTanque.removeAttr('disabled', '');
    } else {
      btnAddTanque.attr('disabled', '');
    } 
  };

  comboNivelMergulho.find('li').on('click', function(e) {
    e.preventDefault();
    btnNivelMergulho.text($(this).text());
  });

  comboTipoAp.find('li').on('click', function(e) {
    e.preventDefault();
    btnTipoAp.text($(this).text());
  });

  btnAddDate.click(function(e) {
    var template1 = "<div class='form-group row'><label class='col-md-1 col-xs-2 control-label'></label><div class='col-md-3 col-xs-5'><input id='dataMergulho' type='text' name='regular' class='form-control' value='{{date}}' disabled></div><div class='col-md-1 col-xs-1 btnRemoveDate'><button type='button' class='btn btn-danger btn-xs'><span class='glyphicon glyphicon-remove-sign'></span> Remover</button></div></div>";
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
        if ( !comboDatas.find("[value='" + dpDate + "']").length ) {
          $(".datasReserva").append(dateHtml);
          comboDatas.append(gasTanqueHtml);
          comboDatas.find('a').on('click', function(e) {
              e.preventDefault();
              btnDatas.text($(this).text());
              enabledAddBtn();
          });
        }
      }
      if (dateHtml) {
        $(".btnRemoveDate").last().click(function(e) {
          e.preventDefault();
          $(this).parent().slideUp(300, function() {
            $(this).remove();
          });

          $(".dateSet[value='" + dpDate + "']").parents(".gasTypesRowSet").slideUp(300, function() {
            $(this).remove();
          });

          comboDatas.find("[value='" + dpDate + "']").parent().remove();

          btnDatas.text("Selecione");
          $('#btnCilindro').text("Selecione");
          $("#btnGases").text("Selecione");

          if ( !comboDatas.find("[value='" + dpDate + "']").length ) {
            btnAddTanque.attr('disabled', '');
          }

        });
      }

    }
  });

  btnAddTanque.click(function(e){
    var template = "<div class='form-group row gasTypesRowSet well'><label class='col-md-1 col-xs-12 control-label tankLabel'>Data</label><div class='col-md-2 col-xs-12 dateDropdown'><input type='text' name='regular' class='form-control dateSet' value='{{date}}' disabled></div><label class='col-md-1  col-xs-12 control-label tankLabel'>Cilindro</label><div class='col-md-3 col-xs-12 tankDropdown'><input type='text' name='regular' class='form-control' value='{{cilindro}}' disabled></div><label class='col-md-1 col-xs-12 control-label tankLabel'>Gases</label><div class='col-md-3  col-xs-12 gasDropdown'><input type='text' name='regular' class='form-control' value='{{gas}}' disabled></div><div class='col-md-1 col-xs-12 divRemoveTank'><button type='button' class='btn btn-danger btn-sm btnRemoveTanque btn-xs'><span class='glyphicon glyphicon-remove-sign'></span></button></div></div>";
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
    $(".btnRemoveTanque").last().click(function(e) {
      e.preventDefault();
        $(this).parents('.gasTypesRowSet').slideUp(300, function() {
          $(this).remove();
        });
    });
    btnDatas.text("Selecione");
    $('#btnCilindro').text("Selecione");
    $("#btnGases").text("Selecione");
    btnAddTanque.attr('disabled', '');
  });
//{ beforeShowDay: available }

  getAvailableDates();

  dataEntradaDP.datepicker({
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

  dataSaidaDP.datepicker({
    dateFormat: 'dd/mm/yy',
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    nextText: 'Próximo',
    prevText: 'Anterior',
    minDate: 0,
    beforeShow: customRange
  });

  function customRange(input) {

    if (input.id == 'dataSaida' && "" !== $("#dataEntrada").val()) {
        var enterDate = $("#dataEntrada").val();
        var dateArray = enterDate.split("/");
        enterDate = dateArray[1] + '-' + dateArray[0] + '-' + dateArray[2];
        var minDate = new Date(enterDate);
        minDate.setDate(minDate.getDate() + 1)

        return {
          minDate: minDate
        };
    } else {
      return {
        minDate: 0
      };
    }
}

  divEquipamentos.hide();
  divPousada.hide();

  checkEquipamentos.change(function(e) {
    e.preventDefault();
    if ($(this).prop("checked")) {
      divEquipamentos.slideDown("slow");
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
  var datelist = [];

  initEvents();

  populateCombos();

  sendPostRequest();

});
