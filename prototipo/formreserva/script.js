var datelist = [];
$(document).ready(
		function() {
			$('input[type="checkbox"]').click(function() {
				if ($(this).attr("value") == "equipamentos") {
					$(".equipamentos").toggle();
				}
				if ($(this).attr("value") == "pousada") {
					$(".pousada").toggle();
				}
			});

			$(function() {


				$("#datepicker").datepicker({
					
							dateFormat : 'dd/mm/yy',
							dayNames : [ 'Domingo', 'Segunda', 'Terça',	'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
							dayNamesMin : [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D' ],
							dayNamesShort : [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom' ],
							monthNames : [ 'Janeiro', 'Fevereiro', 'Março',	'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
							monthNamesShort : [ 'Jan', 'Fev', 'Mar', 'Abr',	'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
							nextText : 'Próximo',
							prevText : 'Anterior',
							beforeShowDay : function(d) {

								// normalize the date for searching in array
								var dmy = "";
								dmy += ("00" + d.getDate()).slice(-2) + "-";
								dmy += ("00" + (d.getMonth() + 1)).slice(-2)
										+ "-";
								dmy += d.getFullYear();
								if ($.inArray(dmy, datelist) >= 0) {
									return [ true, "" ];
								} else {
									return [ false, "" ];
								}
							}
				});

				$("#test_dates").click(function() {
					datelist = []; // empty the array

					var result = "04-05-2015,07-05-2015,15-05-2015"; // dummy
																		// result
					datelist = result.split(","); // populate the array
					$("#datepicker").datepicker("refresh"); // tell datepicker
															// that it needs to
															// draw itself again

				});

			});
		});
