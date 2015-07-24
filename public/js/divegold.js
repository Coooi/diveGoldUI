var initOperacoes, bindDeleteButton, addOperation, saveOperations, getOperations, generate, initPlanilha, getAvailableDates, clearUserInfo, enabledAddBtn, getLongDate, getDiveDates, applyPhoneMask, applyMasks, configTimeout, populateAparts, populateGases, populateTanks, populateCombos, beforePost, sendPostRequest, initEvents;

$(document).ready(function() {});

!function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : a("object" == typeof exports ? require("jquery") : jQuery);
}(function(a) {
    var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c);
    a.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, a.fn.extend({
        caret: function(a, b) {
            var c;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, 
            this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), 
                c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select());
            })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), 
            a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
                begin: a,
                end: b
            });
        },
        unmask: function() {
            return this.trigger("unmask");
        },
        mask: function(c, g) {
            var h, i, j, k, l, m, n, o, p;
            if (!c && this.length > 0) {
                h = a(this[0]);
                p = h.data(a.mask.dataName);
                return p ? p() : void 0;
            }
            return g = a.extend({
                autoclear: a.mask.autoclear,
                placeholder: a.mask.placeholder,
                completed: null
            }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function(a, b) {
                "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), 
                k > a && (m = j.length - 1)) : j.push(null);
            }), this.trigger("unmask").each(function() {
                function h() {
                    if (g.completed) {
                        for (var a = l; m >= a; a++) if (j[a] && C[a] === p(a)) return;
                        g.completed.call(B);
                    }
                }
                function p(a) {
                    return g.placeholder.charAt(a < g.placeholder.length ? a : 0);
                }
                function q(a) {
                    for (;++a < n && !j[a]; ) ;
                    return a;
                }
                function r(a) {
                    for (;--a >= 0 && !j[a]; ) ;
                    return a;
                }
                function s(a, b) {
                    var c, d;
                    if (!(0 > a)) {
                        for (c = a, d = q(b); n > c; c++) if (j[c]) {
                            if (!(n > d && j[c].test(C[d]))) break;
                            C[c] = C[d], C[d] = p(d), d = q(d);
                        }
                        z(), B.caret(Math.max(l, a));
                    }
                }
                function t(a) {
                    var b, c, d, e;
                    for (b = a, c = p(a); n > b; b++) if (j[b]) {
                        if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
                        c = e;
                    }
                }
                function u() {
                    var a = B.val(), b = B.caret();
                    if (a.length < o.length) {
                        for (A(!0); b.begin > 0 && !j[b.begin - 1]; ) b.begin--;
                        if (0 === b.begin) for (;b.begin < l && !j[b.begin]; ) b.begin++;
                        B.caret(b.begin, b.begin);
                    } else {
                        for (A(!0); b.begin < n && !j[b.begin]; ) b.begin++;
                        B.caret(b.begin, b.begin);
                    }
                    h();
                }
                function v() {
                    A(), B.val() != E && B.change();
                }
                function w(a) {
                    if (!B.prop("readonly")) {
                        var b, c, e, f = a.which || a.keyCode;
                        o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, 
                        e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), 
                        y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), 
                        B.caret(0, A()), a.preventDefault());
                    }
                }
                function x(b) {
                    var c, d, e, g, i, k;
                    if (!B.prop("readonly")) {
                        g = b.which || b.keyCode, i = B.caret();
                        if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                            if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), 
                            n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                                if (t(c), C[c] = d, z(), e = q(c), f) {
                                    k = function() {
                                        a.proxy(a.fn.caret, B, e)();
                                    };
                                    setTimeout(k, 0);
                                } else B.caret(e);
                                i.begin <= m && h();
                            }
                            b.preventDefault();
                        }
                    }
                }
                function y(a, b) {
                    var c;
                    for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c));
                }
                function z() {
                    B.val(C.join(""));
                }
                function A(a) {
                    var b, c, d, e = B.val(), f = -1;
                    for (b = 0, d = 0; n > b; b++) if (j[b]) {
                        for (C[b] = p(b); d++ < e.length; ) if (c = e.charAt(d - 1), j[b].test(c)) {
                            C[b] = c, f = b;
                            break;
                        }
                        if (d > e.length) {
                            y(b + 1, n);
                            break;
                        }
                    } else C[b] === e.charAt(d) && d++, k > b && (f = b);
                    return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), 
                    y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l;
                }
                var B = a(this), C = a.map(c.split(""), function(a, b) {
                    return "?" != a ? i[a] ? p(b) : a : void 0;
                }), D = C.join(""), E = B.val();
                B.data(a.mask.dataName, function() {
                    return a.map(C, function(a, b) {
                        return j[b] && a != p(b) ? a : null;
                    }).join("");
                }), B.one("unmask", function() {
                    B.off(".mask").removeData(a.mask.dataName);
                }).on("focus.mask", function() {
                    if (!B.prop("readonly")) {
                        clearTimeout(b);
                        var a;
                        E = B.val(), a = A(), b = setTimeout(function() {
                            z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a);
                        }, 10);
                    }
                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function() {
                    B.prop("readonly") || setTimeout(function() {
                        var a = A(!0);
                        B.caret(a), h();
                    }, 0);
                }), e && f && B.off("input.mask").on("input.mask", u), A();
            });
        }
    });
});

$(function() {
    $("#login-form-link").click(function(a) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $("#register-form-link").removeClass("active");
        $(this).addClass("active");
        a.preventDefault();
    });
    $("#register-form-link").click(function(a) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $("#login-form-link").removeClass("active");
        $(this).addClass("active");
        a.preventDefault();
    });
});

initOperacoes = function() {
    if (!Modernizr.touch) $("#opDate").attr("type", "text").datepicker({
        dateFormat: "dd/mm/yy",
        dayNames: [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" ],
        dayNamesMin: [ "D", "S", "T", "Q", "Q", "S", "S", "D" ],
        dayNamesShort: [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom" ],
        monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
        monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
        nextText: "Próximo",
        prevText: "Anterior",
        minDate: 0,
        afterShow: function(a, b, c) {
            b.dpDiv.css("width", "400px");
            $(".ui-datepicker").css("width", $("#opDate").width());
        }
    });
    $("#btnAdicionarOp").click(function() {
        var a = {};
        a.date = $("#opDate").val();
        if (Modernizr.touch) a.date = moment(a.date).format("DD-MM-YYYY");
        a.name = $("#opName").val();
        addOperation(a);
        $("#opDate").val("");
        $("#opName").val("");
    });
    $("#btnSaveOperations").click(function() {
        saveOperations();
    });
};

bindDeleteButton = function(a) {
    a.last().click(function(a) {
        a.preventDefault();
        var b = confirm("Tem certeza que deseja remover esta operação?");
        if (true === b) $(this).parents(".lineOpItem").slideUp(300, function() {
            $(this).remove();
        }); else a.preventDefault();
    });
};

addOperation = function(a) {
    if (!$("#opDate").val() || !$("#opName").val()) {
        configTimeout("Os campos de data e nome da operação são obrigatórios.");
        return;
    }
    $.get("js/templates/lineItemOp.hbs", function(b) {
        var c = Handlebars.compile(b);
        $(".opPanel").append(c(a));
        bindDeleteButton($(".btnRemoveOp").last());
    }, "html");
};

saveOperations = function() {
    sweetAlert("Operações salvas com sucesso!", "", "success");
};

$(document).ready(function() {
    if (window.location.href.indexOf("/operacoes") !== -1) initOperacoes();
});

getOperations = function() {
    $.blockUI({
        message: "Carregando lista de operações...",
        css: {
            border: "none",
            padding: "15px",
            backgroundColor: "#000",
            "-webkit-border-radius": "10px",
            "-moz-border-radius": "10px",
            opacity: .5,
            color: "#fff"
        }
    });
    $.getJSON("//surerussolutions.com:8080/divegold-webservice/rest/operation/", function(a) {
        var b = [], c = "<option value='{{id}}'>{{date}} - {{desc}}</option>", d = Handlebars.compile(c);
        $.each(a.operations, function() {
            var a, b = "", c = {}, e = new Date(this.date);
            c.id = this.id;
            c.desc = this.desc;
            c.date = e.getDate() + "/" + (e.getMonth() + 1) + "/" + e.getFullYear();
            a = d(c);
            $(".comboOperacoes").append(a);
        });
        $.unblockUI();
    }).fail(function() {
        configTimeout("Ocorreu um erro ao buscar a lista de operações.");
    });
};

generate = function() {};

initPlanilha = function() {
    var a = this;
    $("#btnGenerate").click(function() {
        a.generate();
    });
};

$(document).ready(function() {
    if (window.location.href.indexOf("/planilha") !== -1) {
        initPlanilha();
        getOperations();
    }
});

getAvailableDates = function() {
    $.getJSON("//surerussolutions.com:8080/divegold-webservice/rest/operation/", function(a) {
        var b = [];
        $.each(a.operations, function() {
            var a = new Date(this.date);
            b.push(a.getDate() + "-" + (a.getMonth() + 1) + "-" + a.getFullYear());
        });
        datelist = b;
        $("#datepicker").datepicker("refresh");
        $.unblockUI();
    }).fail(function() {
        configTimeout("Ocorreu um erro ao buscar as datas de mergulho.");
    });
};

clearUserInfo = function() {
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

enabledAddBtn = function() {
    if ("Selecione" !== $("#btnCilindro").text() && "Selecione" !== $("#btnGases").text() && "Selecione" !== $("#btnDatas").text()) $(".btnAddTanque").removeAttr("disabled", ""); else $(".btnAddTanque").attr("disabled", "");
};

getLongDate = function(a) {
    var b, c, d;
    if (a) {
        c = a.split("/");
        d = c[1] + "-" + c[0] + "-" + c[2];
        b = new Date(d).getTime();
    }
    return b;
};

getDiveDates = function() {
    $("#dataMergulho").datepicker({
        dateFormat: "dd/mm/yy",
        dayNames: [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" ],
        dayNamesMin: [ "D", "S", "T", "Q", "Q", "S", "S", "D" ],
        dayNamesShort: [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom" ],
        monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
        monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
        nextText: "Próximo",
        prevText: "Anterior",
        beforeShowDay: function(a) {
            var b = "";
            b += a.getDate() + "-";
            b += a.getMonth() + 1 + "-";
            b += a.getFullYear();
            if ($.inArray(b, datelist) >= 0) return [ true, "" ]; else return [ false, "" ];
        }
    });
    $("#dataMergulho").click(function() {
        getAvailableDates();
    });
};

applyPhoneMask = function(a) {
    var b = [ "SP", "RJ", "ES", "AM", "PA", "MA", "RR", "AP" ];
    if (a.val() && b.indexOf(a.val()) > -1) $(".cel").mask("(99) 99999-9999"); else $(".cel").mask("(99) 9999-9999");
};

applyMasks = function() {
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

configTimeout = function(a) {
    console.log(a);
    $.unblockUI();
    sweetAlert("Ops...", a, "error");
};

populateAparts = function() {
    var a = "//surerussolutions.com:8080/divegold-webservice/rest/serrinha/apartype/", b = "<li><a href='#' value={{type}}>{{type}}</a></li>";
    apItemTemplate = Handlebars.compile(b);
    $.getJSON(a, function(a) {
        $.each(a.innApartTypes, function() {
            var a = apItemTemplate(this);
            $("#comboTipoAp").append(a);
        });
        $("#comboTipoAp").find("li").on("click", function(a) {
            $("#btnTipoAp").text($(this).text());
            if ("Duplo Casal" === $(this).text() || "Duplo Solteiro" === $(this).text()) {
                $(".acomp1").slideDown("slow");
                $(".acomp2").slideUp("slow");
                $(".acomp3").slideUp("slow");
            }
            if ("Triplo Casal" === $(this).text() || "Triplo Solteiro" === $(this).text()) {
                $(".acomp1").slideDown("slow");
                $(".acomp2").slideDown("slow");
                $(".acomp3").slideUp("slow");
            }
            if ("Quádruplo Casal" === $(this).text() || "Quádruplo Solteiro" === $(this).text()) {
                $(".acomp1").slideDown("slow");
                $(".acomp2").slideDown("slow");
                $(".acomp3").slideDown("slow");
            }
            if ("Solteiro" === $(this).text()) {
                $(".acomp1").slideUp("slow");
                $(".acomp2").slideUp("slow");
                $(".acomp3").slideUp("slow");
            }
            $("#btnTipoAp").attr("typeId", $(this).find("a").attr("value"));
            a.preventDefault();
        });
        getDiveDates();
    }).fail(function() {
        getDiveDates();
        configTimeout("Não foi possível localizar os tipos de acomodacoes.");
    });
};

populateGases = function() {
    var a = "//surerussolutions.com:8080/divegold-webservice/rest/gastype/", b = "<li><a href='#' value={{id}}>{{type}}</a></li>";
    gasItemTemplate = Handlebars.compile(b);
    $.getJSON(a, function(a) {
        $.each(a.gasTypes, function() {
            var a = gasItemTemplate(this);
            $("#comboGases").append(a);
        });
        $("#comboGases").find("li").on("click", function(a) {
            a.preventDefault();
            $("#btnGases").text($(this).text());
            $("#btnGases").attr("typeId", $(this).find("a").attr("value"));
            enabledAddBtn();
        });
        populateAparts();
    }).fail(function() {
        configTimeout("Não foi possível localizar os tipos de gases.");
        populateAparts();
    });
};

populateTanks = function() {
    var a = "//surerussolutions.com:8080/divegold-webservice/rest/tanktype/", b = "<li><a href='#' value={{id}}>{{type}}</a></li>";
    tankItemTemplate = Handlebars.compile(b);
    $.getJSON(a, function(a) {
        $.each(a.tankTypes, function() {
            var a = tankItemTemplate(this);
            $("#comboCilindro").append(a);
        });
        $("#comboCilindro").find("li").on("click", function(a) {
            a.preventDefault();
            $("#btnCilindro").text($(this).text());
            $("#btnCilindro").attr("typeId", $(this).find("a").attr("value"));
            enabledAddBtn();
        });
        populateGases();
    }).fail(function() {
        configTimeout("Não foi possível localizar os tipos de cilindros.");
        populateGases();
    });
};

populateCombos = function() {
    $.blockUI({
        message: "Carregando informações de cadastro",
        css: {
            border: "none",
            padding: "15px",
            backgroundColor: "#000",
            "-webkit-border-radius": "10px",
            "-moz-border-radius": "10px",
            opacity: .5,
            color: "#fff"
        }
    });
    var a = "//surerussolutions.com:8080/divegold-webservice/rest/divertype/", b = "<li><a href='#' value={{id}}>{{desc}}</a></li>";
    dataMergulhoTemplate = Handlebars.compile(b);
    $.getJSON(a, function(a) {
        $.each(a.diverTypes, function() {
            var a = dataMergulhoTemplate(this);
            $("#comboNivelMergulho").append(a);
        });
        $("#comboNivelMergulho").find("li").on("click", function(a) {
            a.preventDefault();
            $("#btnNivelMergulho").text($(this).text());
        });
        populateTanks();
    }).fail(function() {
        configTimeout("Não foi possível localizar os niveis de mergulhador.");
        populateTanks();
    });
};

beforePost = function() {
    $("#formReserva").submit(function(a) {
        a.preventDefault();
        if (!$("#cpf").val().replace(".", "").replace("-", "").replace(".", "").trim() && !$("#cnpj").val().replace(".", "").replace("-", "").replace("/", "").replace("_", "").replace(".", "").trim()) {
            configTimeout("Favor informar pelo menos o CPF ou CNPJ");
            return;
        }
        if (!$("#userName").val()) {
            configTimeout("O nome é obrigatório");
            return;
        }
        if (!$("#cep").val() || 10 !== $("#cep").val().length) {
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
        if ("Selecione" === $("#btnNivelMergulho").text()) {
            configTimeout("Favor escolher o nível do mergulhador");
            return;
        }
        if (0 === $(".datasReserva input").length) {
            configTimeout("Favor escolher pelo menos uma data de mergulho");
            return;
        }
        if (0 === $(".gasTypesRowSet").length) {
            configTimeout("Favor escolher pelo menos um tanque e um gas por data");
            return;
        }
        if ($("#checkPousada").is(":checked")) {
            if (!$("#dataEntrada").val() || !$("#dataSaida").val()) {
                configTimeout("As datas de entrada e saída da pousada são obrigatórias");
                return;
            }
            if ("Selecione" === $("#btnTipoAp").text()) {
                configTimeout("O tipo da acomodação é obrigatório");
                return;
            }
            if (!$("#nomeReserva").val()) {
                configTimeout("O nome do responsável pela reserva é obrigatório");
                return;
            }
            if ($("#acomp1").is(":visible") && !$("#acomp1").val() || $("#acomp2").is(":visible") && !$("#acomp2").val() || $("#acomp3").is(":visible") && !$("#acomp3").val()) {
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
            sendPostRequest(a);
        });
    });
};

sendPostRequest = function(a) {
    var b, c = {}, d = this;
    $.blockUI({
        message: "Processando sua reserva...",
        css: {
            border: "none",
            padding: "15px",
            backgroundColor: "#000",
            "-webkit-border-radius": "10px",
            "-moz-border-radius": "10px",
            opacity: .5,
            color: "#fff"
        }
    });
    c.userInfo = {};
    c.userInfo.name = $("#userName").val();
    c.userInfo.cpf = $("#cpf").val().replace(".", "").replace("-", "").replace(".", "");
    c.userInfo.cnpj = $("#cnpj").val().replace(".", "").replace("-", "").replace("/", "").replace("_", "").replace(".", "");
    c.userInfo.cep = $("#cep").val().replace(".", "").replace("-", "").replace(" ", "");
    c.userInfo.address = $("#rua").val();
    c.userInfo.city = $("#cidade").val();
    c.userInfo.uf = $("#uf").val();
    c.userInfo.number = $("#numero").val();
    c.userInfo.comp = $("#comp").val();
    c.userInfo.region = $("#bairro").val();
    c.userInfo.tel = $("#tel").val().replace("-", "").replace(" ", "").replace("(", "").replace(")", "");
    c.userInfo.cel = $("#cel").val().replace("-", "").replace(" ", "").replace("(", "").replace(")", "");
    c.userInfo.email = $("#email").val();
    c.userInfo.diverType = "Selecione" !== $("#btnNivelMergulho").text() ? $("#btnNivelMergulho").text() : "";
    c.diveDates = [];
    c.tankInfo = [];
    c.reservationComments = $("#obsReserva").val();
    c.gearInfo = {};
    c.innInfo = {};
    $.each($(".datasReserva input"), function(a, b) {
        var d = {};
        d.date = getLongDate($(this).val());
        c.diveDates.push(d);
    });
    $.each($(".gasTypesRowSet"), function(a, b) {
        var d = {};
        d.opId = "1";
        $.each($(this).find("input"), function(a, b) {
            if ($(this).hasClass("dateSet")) d[$(this).attr("name")] = getLongDate($(this).val()); else d[$(this).attr("name")] = $(this).attr("typeId");
        });
        c.tankInfo.push(d);
    });
    c.gearInfo.needed = $("#checkEquipamentos").is(":checked");
    if (c.gearInfo.needed) $.each($(".equipment"), function(a, b) {
        if ($(this).val()) c.gearInfo[$(this).attr("name")] = $(this).val();
    });
    c.innInfo.needed = $("#checkPousada").is(":checked");
    if (c.innInfo.needed) {
        c.innInfo.dateIn = getLongDate($("#dataEntrada").val());
        c.innInfo.dateOut = getLongDate($("#dataSaida").val());
        c.innInfo.apType = "Selecione" !== $("#btnTipoAp").text() ? $("#btnTipoAp").text() : "";
        c.innInfo.reservationName = $("#nomeReserva").val();
        c.innInfo.guests = [];
        if ($("#acomp1").val() && $("#acomp1").is(":visible")) {
            b = {};
            b.name = $("#acomp1").val();
            b.diver = $("#firstDiverYes").is(":checked");
            c.innInfo.guests.push(b);
            if ($("#acomp2").val() && $("#acomp2").is(":visible")) {
                b.name = $("#acomp2").val();
                b.diver = $("#secondDiverYes").is(":checked");
                c.innInfo.guests.push(b);
                if ($("#acomp3").val() && $("#acomp3").is(":visible")) {
                    b.name = $("#acomp3").val();
                    b.diver = $("#thirdDiverYes").is(":checked");
                    c.innInfo.guests.push(b);
                }
            }
        }
        c.innInfo.comments = $("#observacoes").val();
    }
    console.log(JSON.stringify(c));
    $.ajax({
        cache: false,
        url: "//surerussolutions.com:8080/divegold-webservice/rest/reservation/add/",
        type: "POST",
        dataType: "json",
        data: JSON.stringify(c),
        context: d,
        success: function(a) {
            $.unblockUI();
            sweetAlert("Solicitação de reserva realizada com sucesso!", "Você receberá um email com o resumo da sua solicitação. Lembramos que sua reserva ainda não está confirmada e está sujeita à disponibilidade. Você receberá outro email quando sua reserva forma confirmada pela DIVEGOLD", "success");
            $(".center").html("<div class='text-center'><img src='https://s3-sa-east-1.amazonaws.com/felipemedia/divegold_logo.png' width='35' height='35' alt='DiveGold Logo'>Reserva efetuada com sucesso!</div>");
        },
        error: function() {
            configTimeout("Ocorreu um erro ao enviar a reserva.");
        }
    });
};

initEvents = function() {
    var a = $("#checkEquipamentos"), b = $("#checkPousada"), c = $(".btnAddDate"), d = $("#dataMergulho"), e = $("#dataEntrada"), f = $("#dataSaida"), g = $("#comboNivelMergulho"), h = $("#btnNivelMergulho"), i = $("#comboTipoAp"), j = $("#btnTipoAp"), k = $("#comboDatas"), l = $("#comboDatasFim"), m = $("#btnDatas"), n = $("#btnDatasFim"), o = $("#equipamentos"), p = $("#pousada"), q = $("#cep"), r = $(".btnAddTanque"), s = $("btnCilindro"), t = $("btnGases"), u = $(".btnRemoveDate"), v = this;
    applyMasks();
    $("#uf").blur(function() {
        applyPhoneMask($(this));
    });
    $("#cpfRadio").click(function(a) {
        if ("true" === $("#firstAccess").text()) {
            $("#cpf").removeAttr("disabled", "");
            $("#cnpj").attr("disabled", "");
            $("#cnpj").val("");
            $("#cpf").focus();
            $("#firstAccess").text("false");
        } else {
            var b = confirm("Tem certeza que deseja alterar o tipo do cadastro?");
            if (true === b) {
                clearUserInfo();
                $("#cpf").removeAttr("disabled", "");
                $("#cnpj").attr("disabled", "");
                $("#cnpj").val("");
                $("#cpf").focus();
            } else a.preventDefault();
        }
    });
    $("#cnpjRadio").click(function(a) {
        var b = confirm("Tem certeza que deseja alterar o tipo do cadastro?");
        if (true === b) {
            clearUserInfo();
            $("#cnpj").removeAttr("disabled", "");
            $("#cpf").attr("disabled", "");
            $("#cpf").val("");
            $("#cnpj").focus();
        } else a.preventDefault();
    });
    $("#cpfRadio").click();
    c.click(function(a) {
        var b, c, e, f, g, h, i, j;
        if ($("#dataMergulho").val().indexOf("/") === -1) {
            configTimeout("Data de mergulho inválida");
            return;
        }
        b = "<div class='form-group row'><label class='col-md-1 col-xs-2 control-label'></label><div class='col-md-3 col-xs-6'><input id='dataMergulho' type='text' name='regular' class='form-control' value='{{date}}' disabled></div><div class='col-md-1 col-xs-1 btnRemoveDate'><button type='button' class='btn btn-danger btn-raised btn-xs'><span class='glyphicon glyphicon-remove-sign'></span> Remover</button></div></div>";
        c = "<li><a href='#' value={{date}}>{{date}}</a></li>";
        e = Handlebars.compile(b);
        f = Handlebars.compile(c);
        i = d.val();
        if (i && "" !== i) {
            d.val("");
            g = {
                date: i
            };
            h = e(g);
            j = f(g);
            if (j) if (!k.find("[value='" + i + "']").length) {
                $(".datasReserva").append(h);
                k.append(j);
                l.append(j);
                k.find("a").on("click", function(a) {
                    a.preventDefault();
                    m.text($(this).text());
                    enabledAddBtn();
                });
                l.find("a").on("click", function(a) {
                    a.preventDefault();
                    n.text($(this).text());
                });
            }
            if (h) $(".btnRemoveDate").last().click(function(a) {
                a.preventDefault();
                $(this).parent().slideUp(300, function() {
                    $(this).remove();
                });
                $(".dateSet[value='" + i + "']").parents(".gasTypesRowSet").slideUp(300, function() {
                    $(this).remove();
                });
                k.find("[value='" + i + "']").parent().remove();
                l.find("[value='" + i + "']").parent().remove();
                m.text("Selecione");
                n.text("Selecione");
                $("#btnCilindro").text("Selecione");
                $("#btnGases").text("Selecione");
                if (!k.find("[value='" + i + "']").length) r.attr("disabled", "");
            });
        }
    });
    r.click(function(a) {
        var b, c = "<div class='form-group row gasTypesRowSet well'><div class='row bottom'><label class='col-md-2 col-xs-12 control-label'>Data inicial de uso</label><div class='col-md-2 col-xs-11'><input type='text' name='diveDateIn' class='form-control dateSet' value='{{date}}' disabled></div><label class='col-md-2  col-xs-12 control-label'>Cilindro</label><div class='col-md-2 col-xs-11'><input type='text' name='tankType' typeId='{{cilindroId}}' class='form-control' value='{{cilindro}}' disabled></div></div><div class='row bottom'><label class='col-md-2 col-xs-12 control-label'>Data final de uso</label><div class='col-md-2 col-xs-11'><input type='text' name='diveDateOut' class='form-control dateSet' value='{{dateFim}}' disabled></div><label class='col-md-2 col-xs-12 control-label'>Gases</label><div class='col-md-2  col-xs-11'><input type='text' name='gasType' class='form-control' typeId='{{gasId}}' value='{{gas}}' disabled></div><div class='col-md-1 col-xs-12 divRemoveTank'><button type='button' class='btn btn-danger btn-raised btnRemoveTanque btn-xs btn-fab mdi-navigation-close'></button></div></div></div>", d = Handlebars.compile(c), e = $("#btnDatas").text(), f = $("#btnDatasFim").text(), g = $("#btnCilindro").text(), h = $("#btnCilindro").attr("typeId"), i = $("#btnGases").text(), j = $("#btnGases").attr("typeId");
        if ("Selecione" === f) f = "";
        b = d({
            date: e,
            dateFim: f,
            cilindro: g,
            gas: i,
            cilindroId: h,
            gasId: j
        });
        $(".gasTypesRowDates").append(b);
        $(".btnRemoveTanque").last().click(function(a) {
            a.preventDefault();
            $(this).parents(".gasTypesRowSet").slideUp(300, function() {
                $(this).remove();
            });
        });
        m.text("Selecione");
        n.text("Selecione");
        $("#btnCilindro").text("Selecione");
        $("#btnGases").text("Selecione");
        r.attr("disabled", "");
    });
    getAvailableDates();
    e.datepicker({
        dateFormat: "dd/mm/yy",
        dayNames: [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" ],
        dayNamesMin: [ "D", "S", "T", "Q", "Q", "S", "S", "D" ],
        dayNamesShort: [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom" ],
        monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
        monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
        nextText: "Próximo",
        prevText: "Anterior",
        minDate: 0
    });
    f.datepicker({
        dateFormat: "dd/mm/yy",
        dayNames: [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" ],
        dayNamesMin: [ "D", "S", "T", "Q", "Q", "S", "S", "D" ],
        dayNamesShort: [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom" ],
        monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
        monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
        nextText: "Próximo",
        prevText: "Anterior",
        minDate: 0,
        beforeShow: w
    });
    function w(a) {
        var b, c, d;
        if ("dataSaida" == a.id && "" !== $("#dataEntrada").val()) {
            b = $("#dataEntrada").val();
            c = b.split("/");
            b = c[1] + "-" + c[0] + "-" + c[2];
            d = new Date(b);
            d.setDate(d.getDate() + 1);
            return {
                minDate: d
            };
        } else return {
            minDate: 0
        };
    }
    $.each($(".datasReserva input"), function(a, b) {
        diveDates.push($(this).val());
    });
    o.hide();
    p.hide();
    a.change(function(a) {
        a.preventDefault();
        if ($(this).prop("checked")) o.slideDown("slow"); else {
            $.each($(".equipment"), function(a, b) {
                $(this).val("");
            });
            o.slideUp("slow");
        }
    });
    b.change(function(a) {
        a.preventDefault();
        if ($(this).prop("checked")) p.slideDown("slow"); else p.slideUp("slow");
    });
    q.blur(function() {
        var a, b = $(this).val().replace(".", "").replace("-", "");
        if (b) {
            a = "http://cep.correiocontrol.com.br/" + b + ".json";
            $.getJSON(a, function(a) {
                $("#rua").val(a.logradouro);
                $("#bairro").val(a.bairro);
                $("#cidade").val(a.localidade);
                $("#uf").val(a.uf);
                v.applyPhoneMask($("#uf"));
            }).fail(function() {
                console.log("CEP inexistente");
            });
        }
    });
    function x(a) {
        if (!a.userInfo) return;
        $("#userName").val(a.userInfo.name);
        $("#cep").val(a.userInfo.cep);
        $("#rua").val(a.userInfo.address);
        $("#numero").val(a.userInfo.number);
        $("#comp").val(a.userInfo.comp);
        $("#bairro").val(a.userInfo.region);
        $("#cidade").val(a.userInfo.city);
        $("#uf").val(a.userInfo.uf);
        $("#tel").val(a.userInfo.tel);
        $("#cel").val(a.userInfo.cel);
        $("#email").val(a.userInfo.email);
        $("#btnNivelMergulho").text(a.userInfo.diverType.desc);
        $("#cep").mask("99.999-999", {
            placeholder: " ",
            clearOnLostFocus: false
        });
        $("#uf").mask("aa", {
            placeholder: " ",
            clearOnLostFocus: false
        });
        var b = [ "SP", "RJ", "ES", "AM", "PA", "MA", "RR", "AP" ];
        if ($("#uf").val() && b.indexOf($("#uf").val()) > -1) $(".cel").mask("(99) 99999-9999", {
            clearOnLostFocus: false
        }); else $(".cel").mask("(99) 9999-9999", {
            clearOnLostFocus: false
        });
    }
    $("#cpf").blur(function() {
        var a, b = $(this).val().replace(".", "").replace("-", "").replace(".", "");
        if (b) {
            a = "//surerussolutions.com:8080/divegold-webservice/rest/client/type=0&value=" + b + "/";
            $.getJSON(a, function(a) {
                x(a);
            }).fail(function() {
                console.log("CPF sem dados cadastrais");
            });
        }
    });
    $("#cnpj").blur(function() {
        var a, b = $(this).val().replace(".", "").replace("-", "").replace("/", "").replace("_", "").replace(".", "");
        if (b) {
            a = "//surerussolutions.com:8080/divegold-webservice/rest/client/type=1&value=" + b + "/";
            $.getJSON(a, function(a) {
                x(a);
            }).fail(function() {
                console.log("CNPJ sem dados cadastrais");
            });
        }
    });
    $('[data-toggle="tooltip"]').tooltip();
    populateCombos();
    beforePost();
};

$(document).ready(function() {
    if (window.location.href.indexOf("/reserva") !== -1) {
        var a = [], b = [];
        initEvents();
    }
});
//# sourceMappingURL=divegold.js.map