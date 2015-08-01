$(function() {
  $('#login-form-link').click(function(e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#register-form-link').click(function(e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $("#btnLogin").click(function(e) {
    e.preventDefault();
    if (!$("#username").val() || !$("#password").val()) {
      configTimeout("Os campos de email e senha da operação são obrigatórios.");
    } else {
      window.location.href = "/operacoes";
    }
  });
});
