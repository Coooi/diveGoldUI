var getAvailableDates = function() { //teste
  $.getJSON("//surerussolutions.com:8080/divegold-webservice/rest/operation/", function(data) {
    var dateArray = [];
    $.each(data.operations, function() {
      var datePattern = new Date(this.date);
      dateArray.push(datePattern.getDate() + "-" + (datePattern.getMonth() + 1) + "-" + datePattern.getFullYear());
    });
    datelist = dateArray;
    $("#datepicker").datepicker("refresh");
    $.unblockUI();
  }).fail(function() {
    configTimeout("Ocorreu um erro ao buscar as datas de mergulho.");
  });
};

var clearUserInfo = function() {
  $("#userName").val("");
  $("#cep").val("");
  $("#rua").val("");
  $("#numero").val("");
  $("#comp").val("");
  $("#bairro").val();
  $("#cidade").val("");
  $("#uf").val("");
  $("#tel").val("");
  $("#cel").val("");
  $("#email").val("");
  $("#btnNivelMergulho").text("Selecione");
};

var enabledAddBtn = function() {
  if ($('#btnCilindro').text() !== "Selecione" &&
    $("#btnGases").text() !== "Selecione" &&
    $("#btnDatas").text() !== "Selecione") {
    $(".btnAddTanque").removeAttr('disabled', '');
  } else {
    $(".btnAddTanque").attr('disabled', '');
  }
};

var getLongDate = function(stringDate) {
  var longDate;
  if (stringDate) {
    var dateArray = stringDate.split("/"),
      dateFormat;

    dateFormat = dateArray[1] + "-" + dateArray[0] + "-" + dateArray[2];
    longDate = new Date(dateFormat).getTime();
  }
  return longDate;
};

var getDiveDates = function() {
  $("#dataMergulho").datepicker({

    dateFormat: 'dd/mm/yy',
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    nextText: 'Próximo',
    prevText: 'Anterior',
    beforeShowDay: function(date) {

      var datePattern = "";
      datePattern += date.getDate() + "-";
      datePattern += (date.getMonth() + 1) + "-";
      datePattern += date.getFullYear();
      if ($.inArray(datePattern, datelist) >= 0) {
        return [true, ""];
      } else {
        return [false, ""];
      }
    }
  });

  $("#dataMergulho").click(function() {
    getAvailableDates();
  });

};

var applyPhoneMask = function(element) {
  var estados = ["SP", "RJ", "ES", "AM", "PA", "MA", "RR", "AP"];
  if (element.val() && estados.indexOf(element.val()) > -1) {
    $(".cel").mask("(99) 99999-9999");
  } else {
    $(".cel").mask("(99) 9999-9999");
  }
};

var applyMasks = function() {
  $("#cpf").mask("999.999.999-99", {
    placeholder: " ",
    clearOnLostFocus: false
  });
  $("#cnpj").mask("99.999.999/9999-99", {
    placeholder: " ",
    clearOnLostFocus: false
  });
  $("#cep").mask("99.999-999", {
    placeholder: " ",
    clearOnLostFocus: false
  });
  $("#uf").mask("aa", {
    placeholder: " ",
    clearOnLostFocus: false
  });
  $(".cel").mask("(99) 9999-9999", {
    placeholder: " ",
    clearOnLostFocus: false
  });
  $(".equipment").mask("9?9", {
    placeholder: " ",
    clearOnLostFocus: false
  });
};

var configTimeout = function(msg) {
  console.log(msg);
  $.unblockUI();
  sweetAlert("Ops...", msg, "error");
};

var populateAparts = function() {
  var url = '//surerussolutions.com:8080/divegold-webservice/rest/serrinha/apartype/',
    templateItem = "<li><a href='#' value={{type}}>{{type}}</a></li>";
  apItemTemplate = Handlebars.compile(templateItem);

  $.getJSON(url, function(data) {
    $.each(data.innApartTypes, function() {
      var itemHtml = apItemTemplate(this);
      $("#comboTipoAp").append(itemHtml);
    });
    $("#comboTipoAp").find('li').on('click', function(e) {
      $("#btnTipoAp").text($(this).text());
      if ($(this).text() === "Duplo Casal" || $(this).text() === "Duplo Solteiro") {
        $(".acomp1").slideDown("slow");
        $(".acomp2").slideUp("slow");
        $(".acomp3").slideUp("slow");
      }
      if ($(this).text() === "Triplo Casal" || $(this).text() === "Triplo Solteiro") {
        $(".acomp1").slideDown("slow");
        $(".acomp2").slideDown("slow");
        $(".acomp3").slideUp("slow");
      }
      if ($(this).text() === "Quádruplo Casal" || $(this).text() === "Quádruplo Solteiro") {
        $(".acomp1").slideDown("slow");
        $(".acomp2").slideDown("slow");
        $(".acomp3").slideDown("slow");
      }
      if ($(this).text() === "Solteiro") {
        $(".acomp1").slideUp("slow");
        $(".acomp2").slideUp("slow");
        $(".acomp3").slideUp("slow");
      }
      $("#btnTipoAp").attr('typeId', $(this).find('a').attr('value'));
      e.preventDefault();
    });

    getDiveDates();
  }).fail(function() {
    getDiveDates();
    configTimeout('Não foi possível localizar os tipos de acomodacoes.');
  });
};

var populateGases = function() {
  var url = '//surerussolutions.com:8080/divegold-webservice/rest/gastype/',
    templateItem = "<li><a href='#' value={{id}}>{{type}}</a></li>";
  gasItemTemplate = Handlebars.compile(templateItem);

  $.getJSON(url, function(data) {
    $.each(data.gasTypes, function() {
      var itemHtml = gasItemTemplate(this);
      $("#comboGases").append(itemHtml);
    });
    $("#comboGases").find('li').on('click', function(e) {
      e.preventDefault();
      $("#btnGases").text($(this).text());
      $("#btnGases").attr('typeId', $(this).find('a').attr('value'));
      enabledAddBtn();
    });
    populateAparts();
  }).fail(function() {
    configTimeout('Não foi possível localizar os tipos de gases.');
    populateAparts();
  });
};

var populateTanks = function() {
  var url = '//surerussolutions.com:8080/divegold-webservice/rest/tanktype/',
    templateItem = "<li><a href='#' value={{id}}>{{type}}</a></li>";
  tankItemTemplate = Handlebars.compile(templateItem);

  $.getJSON(url, function(data) {
    $.each(data.tankTypes, function() {
      var itemHtml = tankItemTemplate(this);
      $("#comboCilindro").append(itemHtml);
    });
    $("#comboCilindro").find('li').on('click', function(e) {
      e.preventDefault();
      $('#btnCilindro').text($(this).text());
      $("#btnCilindro").attr('typeId', $(this).find('a').attr('value'));
      enabledAddBtn();
    });
    populateGases();
  }).fail(function() {
    configTimeout('Não foi possível localizar os tipos de cilindros.');
    populateGases();
  });
};

var populateCombos = function() {
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
    }
  });

  var url = '//surerussolutions.com:8080/divegold-webservice/rest/divertype/',
    templateItem = "<li><a href='#' value={{id}}>{{desc}}</a></li>";
  dataMergulhoTemplate = Handlebars.compile(templateItem);

  $.getJSON(url, function(data) {
    $.each(data.diverTypes, function() {
      var itemHtml = dataMergulhoTemplate(this);
      $("#comboNivelMergulho").append(itemHtml);
    });
    $("#comboNivelMergulho").find('li').on('click', function(e) {
      e.preventDefault();
      $("#btnNivelMergulho").text($(this).text());
    });
    populateTanks();
  }).fail(function() {
    configTimeout('Não foi possível localizar os niveis de mergulhador.');
    populateTanks();
  });
};

var beforePost = function() {
  $("#formReserva").submit(function(e) {

    e.preventDefault();

    if (!$('#cpf').val().replace('.', '').replace('-', '').replace('.', '').trim() && !$('#cnpj').val().replace('.', '').replace('-', '').replace('/', '').replace('_', '').replace('.', '').trim()) {
      configTimeout("Favor informar pelo menos o CPF ou CNPJ");
      return;
    }

    if (!$("#userName").val()) {
      configTimeout("O nome é obrigatório");
      return;
    }
    if (!$("#cep").val() || $("#cep").val().length !== 10) {
      configTimeout("O CEP é obrigatório");
      return;
    }
    if (!$("#cel").val()) {
      configTimeout("Favor fornecer o número do telefone celular para contato");
      return;
    }
    if (!$("#email").val()) {
      configTimeout("O campo de email é obrigatório");
      return;
    }
    if ($("#email").val().indexOf("@") === -1) {
      configTimeout("O email fornecido é inválido");
      return;
    }
    if ($("#btnNivelMergulho").text() === "Selecione") {
      configTimeout("Favor escolher o nível do mergulhador");
      return;
    }
    if ($('.datasReserva input').length === 0) {
      configTimeout("Favor escolher pelo menos uma data de mergulho");
      return;
    }
    if ($('.gasTypesRowSet').length === 0) {
      configTimeout("Favor escolher pelo menos um tanque e um gas por data");
      return;
    }

    if ($("#checkPousada").is(':checked')) {
      if (!$("#dataEntrada").val() || !$("#dataSaida").val()) {
        configTimeout("As datas de entrada e saída da pousada são obrigatórias");
        return;
      }
      if ($("#btnTipoAp").text() === "Selecione") {
        configTimeout("O tipo da acomodação é obrigatório");
        return;
      }
      if (!$("#nomeReserva").val()) {
        configTimeout("O nome do responsável pela reserva é obrigatório");
        return;
      }
      if (($("#acomp1").is(":visible") && !$("#acomp1").val()) ||
        ($("#acomp2").is(":visible") && !$("#acomp2").val()) ||
        ($("#acomp3").is(":visible") && !$("#acomp3").val())) {
        configTimeout("Os nomes de todos os acompanhantes são obrigatórios");
        return;
      }
    }

    swal({
      title: "Confirmar reserva?",
      text: "Ao clicar em sim, sua reserva será processada.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(44, 161, 44)",
      confirmButtonText: "Sim!"
    }, function() {
      sendPostRequest(e);
    });
  });
};

var sendPostRequest = function(e) {

  var reservation = {};
  var Form = this;

  $.blockUI({
    message: 'Processando sua reserva...',
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

  reservation.userInfo = {};
  reservation.userInfo.name = $("#userName").val();
  reservation.userInfo.cpf = $("#cpf").val().replace('.', '').replace('-', '').replace('.', '');
  reservation.userInfo.cnpj = $("#cnpj").val().replace('.', '').replace('-', '').replace('/', '').replace('_', '').replace('.', '');
  reservation.userInfo.cep = $("#cep").val().replace('.', '').replace('-', '').replace(' ', '');
  reservation.userInfo.address = $("#rua").val();
  reservation.userInfo.city = $("#cidade").val();
  reservation.userInfo.uf = $("#uf").val();
  reservation.userInfo.number = $("#numero").val();
  reservation.userInfo.comp = $("#comp").val();
  reservation.userInfo.region = $("#bairro").val();
  reservation.userInfo.tel = $("#tel").val().replace('-', '').replace(' ', '').replace('(', '').replace(')', '');
  reservation.userInfo.cel = $("#cel").val().replace('-', '').replace(' ', '').replace('(', '').replace(')', '');
  reservation.userInfo.email = $("#email").val();
  reservation.userInfo.diverType = ($("#btnNivelMergulho").text() !== "Selecione") ? $("#btnNivelMergulho").text() : "";
  reservation.diveDates = [];
  reservation.tankInfo = [];
  reservation.reservationComments = $("#obsReserva").val();
  reservation.gearInfo = {};
  reservation.innInfo = {};

  $.each($('.datasReserva input'), function(i, v) {
    var item = {};

    item.date = getLongDate($(this).val());
    reservation.diveDates.push(item);
  });

  $.each($('.gasTypesRowSet'), function(i, v) {
    var item = {};
    item.opId = "1";
    $.each($(this).find('input'), function(i, v) {
      if ($(this).hasClass('dateSet')) {
        item[$(this).attr("name")] = getLongDate($(this).val());
      } else {
        item[$(this).attr("name")] = $(this).attr("typeId");
      }
    });
    reservation.tankInfo.push(item);
  });

  reservation.gearInfo.needed = $("#checkEquipamentos").is(':checked');

  if (reservation.gearInfo.needed) {
    $.each($('.equipment'), function(i, v) {
      if ($(this).val())
        reservation.gearInfo[$(this).attr("name")] = $(this).val();
    });
  }

  reservation.innInfo.needed = $("#checkPousada").is(':checked');
  if (reservation.innInfo.needed) {
    reservation.innInfo.dateIn = getLongDate($("#dataEntrada").val());
    reservation.innInfo.dateOut = getLongDate($("#dataSaida").val());
    reservation.innInfo.apType = ($("#btnTipoAp").text() !== "Selecione") ? $("#btnTipoAp").text() : "";
    reservation.innInfo.reservationName = $("#nomeReserva").val();
    reservation.innInfo.guests = [];
    if ($("#acomp1").val() && $("#acomp1").is(":visible")) {
      var acomp = {};

      acomp.name = $("#acomp1").val();
      acomp.diver = $("#firstDiverYes").is(":checked");
      reservation.innInfo.guests.push(acomp);
      if ($("#acomp2").val() && $("#acomp2").is(":visible")) {
        acomp.name = $("#acomp2").val();
        acomp.diver = $("#secondDiverYes").is(":checked");
        reservation.innInfo.guests.push(acomp);
        if ($("#acomp3").val() && $("#acomp3").is(":visible")) {
          acomp.name = $("#acomp3").val();
          acomp.diver = $("#thirdDiverYes").is(":checked");
          reservation.innInfo.guests.push(acomp);
        }
      }
    }
    reservation.innInfo.comments = $("#observacoes").val();

  }
  console.log(JSON.stringify(reservation));
  $.ajax({
    cache: false,
    url: "//surerussolutions.com:8080/divegold-webservice/rest/reservation/add/",
    type: "POST",
    dataType: "json",
    data: JSON.stringify(reservation),
    context: Form,
    success: function(callback) {
      //console.log(JSON.parse(callback));
      $.unblockUI();
      sweetAlert('Solicitação de reserva realizada com sucesso!', 'Você receberá um email com o resumo da sua solicitação. Lembramos que sua reserva ainda não está confirmada e está sujeita à disponibilidade. Você receberá outro email quando sua reserva forma confirmada pela DIVEGOLD', 'success');
      $('.center').html("<div class='text-center'><img src='https://s3-sa-east-1.amazonaws.com/felipemedia/divegold_logo.png' width='35' height='35' alt='DiveGold Logo'>Reserva efetuada com sucesso!</div>");
    },
    error: function() {
      configTimeout("Ocorreu um erro ao enviar a reserva.");
    }
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
    comboDatasFim = $("#comboDatasFim"),
    btnDatas = $("#btnDatas"),
    btnDatasFim = $("#btnDatasFim"),
    divEquipamentos = $("#equipamentos"),
    divPousada = $("#pousada"),
    cep = $("#cep"),
    btnAddTanque = $(".btnAddTanque"),
    btnCilindro = $("btnCilindro"),
    btnGases = $("btnGases"),
    btnRemoveDate = $(".btnRemoveDate"),
    self = this;

  applyMasks();

  $("#uf").blur(function() {
    applyPhoneMask($(this));
  });

  $("#cpfRadio").click(function(e) {
    if ($("#firstAccess").text() === "true") {
      $("#cpf").removeAttr('disabled', '');
      $("#cnpj").attr('disabled', '');
      $("#cnpj").val('');
      $("#cpf").focus();
      $("#firstAccess").text("false");
    } else {
      var r = confirm("Tem certeza que deseja alterar o tipo do cadastro?");
      if (r === true) {
        clearUserInfo();
        $("#cpf").removeAttr('disabled', '');
        $("#cnpj").attr('disabled', '');
        $("#cnpj").val('');
        $("#cpf").focus();
      } else {
        e.preventDefault();
      }
    }

  });

  $("#cnpjRadio").click(function(e) {
    var r = confirm("Tem certeza que deseja alterar o tipo do cadastro?");
    if (r === true) {
      clearUserInfo();
      $("#cnpj").removeAttr('disabled', '');
      $("#cpf").attr('disabled', '');
      $("#cpf").val('');
      $("#cnpj").focus();
    } else {
      e.preventDefault();
    }
  });

  $("#cpfRadio").click();

  btnAddDate.click(function(e) {

    if ($('#dataMergulho').val().indexOf('/') === -1) {
      configTimeout("Data de mergulho inválida");
      return;
    }

    var template1 = "<div class='form-group row'><label class='col-md-1 col-xs-2 control-label'></label><div class='col-md-3 col-xs-6'><input id='dataMergulho' type='text' name='regular' class='form-control' value='{{date}}' disabled></div><div class='col-md-1 col-xs-1 btnRemoveDate'><button type='button' class='btn btn-danger btn-raised btn-xs'><span class='glyphicon glyphicon-remove-sign'></span> Remover</button></div></div>";
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
        if (!comboDatas.find("[value='" + dpDate + "']").length) {
          $(".datasReserva").append(dateHtml);
          comboDatas.append(gasTanqueHtml);
          comboDatasFim.append(gasTanqueHtml);
          comboDatas.find('a').on('click', function(e) {
            e.preventDefault();
            btnDatas.text($(this).text());
            enabledAddBtn();
          });
          comboDatasFim.find('a').on('click', function(e) {
            e.preventDefault();
            btnDatasFim.text($(this).text());
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
          comboDatasFim.find("[value='" + dpDate + "']").parent().remove();

          btnDatas.text("Selecione");
          btnDatasFim.text("Selecione");
          $('#btnCilindro').text("Selecione");
          $("#btnGases").text("Selecione");

          if (!comboDatas.find("[value='" + dpDate + "']").length) {
            btnAddTanque.attr('disabled', '');
          }

        });
      }

    }
  });

  btnAddTanque.click(function(e) {
    var template = "<div class='form-group row gasTypesRowSet well'><div class='row bottom'><label class='col-md-2 col-xs-12 control-label'>Data inicial de uso</label><div class='col-md-2 col-xs-11'><input type='text' name='diveDateIn' class='form-control dateSet' value='{{date}}' disabled></div><label class='col-md-2  col-xs-12 control-label'>Cilindro</label><div class='col-md-2 col-xs-11'><input type='text' name='tankType' typeId='{{cilindroId}}' class='form-control' value='{{cilindro}}' disabled></div></div><div class='row bottom'><label class='col-md-2 col-xs-12 control-label'>Data final de uso</label><div class='col-md-2 col-xs-11'><input type='text' name='diveDateOut' class='form-control dateSet' value='{{dateFim}}' disabled></div><label class='col-md-2 col-xs-12 control-label'>Gases</label><div class='col-md-2  col-xs-11'><input type='text' name='gasType' class='form-control' typeId='{{gasId}}' value='{{gas}}' disabled></div><div class='col-md-1 col-xs-12 divRemoveTank'><button type='button' class='btn btn-danger btn-raised btnRemoveTanque btn-xs btn-fab mdi-navigation-close'></button></div></div></div>";
    var gasTanqueSet = Handlebars.compile(template);
    var setHtml,
      setDate = $('#btnDatas').text(),
      setDateFim = $('#btnDatasFim').text(),
      setCilindro = $('#btnCilindro').text(),
      cilindroId = $('#btnCilindro').attr('typeId'),
      setGas = $('#btnGases').text(),
      gasId = $('#btnGases').attr('typeId');

    if (setDateFim === "Selecione") {
      setDateFim = "";
    }

    setHtml = gasTanqueSet({
      "date": setDate,
      "dateFim": setDateFim,
      "cilindro": setCilindro,
      "gas": setGas,
      "cilindroId": cilindroId,
      "gasId": gasId
    });

    $(".gasTypesRowDates").append(setHtml);
    $(".btnRemoveTanque").last().click(function(e) {
      e.preventDefault();
      $(this).parents('.gasTypesRowSet').slideUp(300, function() {
        $(this).remove();
      });
    });
    btnDatas.text("Selecione");
    btnDatasFim.text("Selecione");
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
      minDate.setDate(minDate.getDate() + 1);

      return {
        minDate: minDate
      };
    } else {
      return {
        minDate: 0
      };
    }
  }

  $.each($('.datasReserva input'), function(i, v) {
    diveDates.push($(this).val());
  });

  divEquipamentos.hide();
  divPousada.hide();

  checkEquipamentos.change(function(e) {
    e.preventDefault();
    if ($(this).prop("checked")) {
      divEquipamentos.slideDown("slow");
    } else {
      $.each($('.equipment'), function(i, v) {
        $(this).val("");
      });
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

  cep.blur(function() {
    var cepValue = $(this).val().replace('.', '').replace('-', '');

    if (cepValue) {
      var url = 'http://cep.correiocontrol.com.br/' + cepValue + '.json';

      $.getJSON(url, function(data) {
        $("#rua").val(data.logradouro);
        $("#bairro").val(data.bairro);
        $("#cidade").val(data.localidade);
        $("#uf").val(data.uf);
        self.applyPhoneMask($("#uf"));
      }).fail(function() {
        console.log('CEP inexistente');
      });
    }
  });

  function populateUserInfo(data) {
    //{"client":{"name":"Felipe Roris Surerus","cpf":"07000915641","cnpj":"","cep":"30240080","address":"Rua Cabralia","city":"BH","uf":"MG","num":"156","comp":"102","tel":"99999999","cel":"999988889","email":"fsurerus2@gmail.com","diverType":{"desc":"Intro-to-Cave"}}}
    if (!data.userInfo) {
      return;
    }

    $("#userName").val(data.userInfo.name);
    $("#cep").val(data.userInfo.cep);
    $("#rua").val(data.userInfo.address);
    $("#numero").val(data.userInfo.number);
    $("#comp").val(data.userInfo.comp);
    $("#bairro").val(data.userInfo.region);
    $("#cidade").val(data.userInfo.city);
    $("#uf").val(data.userInfo.uf);
    $("#tel").val(data.userInfo.tel);
    $("#cel").val(data.userInfo.cel);
    $("#email").val(data.userInfo.email);
    $("#btnNivelMergulho").text(data.userInfo.diverType.desc);

    $("#cep").mask("99.999-999", {
      placeholder: " ",
      clearOnLostFocus: false
    });
    $("#uf").mask("aa", {
      placeholder: " ",
      clearOnLostFocus: false
    });
    var estados = ["SP", "RJ", "ES", "AM", "PA", "MA", "RR", "AP"];
    if ($("#uf").val() && estados.indexOf($("#uf").val()) > -1) {
      $(".cel").mask("(99) 99999-9999", {
        clearOnLostFocus: false
      });
    } else {
      $(".cel").mask("(99) 9999-9999", {
        clearOnLostFocus: false
      });
    }

  }

  $("#cpf").blur(function() {
    var cpfValue = $(this).val().replace('.', '').replace('-', '').replace('.', '');

    if (cpfValue) {
      var url = '//surerussolutions.com:8080/divegold-webservice/rest/client/type=0&value=' + cpfValue + '/';
      $.getJSON(url, function(data) {
        populateUserInfo(data);
      }).fail(function() {
        console.log('CPF sem dados cadastrais');
      });
    }
  });

  $("#cnpj").blur(function() {
    var cnpjValue = $(this).val().replace('.', '').replace('-', '').replace('/', '').replace('_', '').replace('.', '');

    if (cnpjValue) {
      var url = '//surerussolutions.com:8080/divegold-webservice/rest/client/type=1&value=' + cnpjValue + '/';
      $.getJSON(url, function(data) {
        populateUserInfo(data);
      }).fail(function() {
        console.log('CNPJ sem dados cadastrais');
      });
    }
  });

  //ativar tooltips
  $('[data-toggle="tooltip"]').tooltip();

  populateCombos();
  beforePost();
};

$(document).ready(function() {
  if (window.location.href.indexOf("/reserva") !== -1) {
    var datelist = [],
      diveDates = [];
    initEvents();
  }
});
