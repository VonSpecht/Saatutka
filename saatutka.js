$(document).ready(function(){

	$("#nappi").click(function(){

		let paikkakunta = $("#paikkakunta").val();
			
		$.ajax({url: "openweathermap.php",
			method: "GET",
			data: { "paikkakunta":paikkakunta },
			success: function(result) {	
			tulostaLampotila(result, paikkakunta);
		},
			error: function(xhr){
			alert("Virhe: " + xhr.status + " " + xhr.statusText);
			} 				
		});
	});
	
	function tulostaLampotila(result, paikkakunta){
		$("#tulostus").css("display", "initial");
		if (result !== null) {
			let tulostus = "Lämpötila paikkakunnalla <b>" + paikkakunta + "</b> on: <b>" + result.main.temp + "</b> C&#176;";
			$("#tulostus").html(tulostus);
		}
		else {
			$("#tulostus").html("Lämpötilan tietoa paikkakunnalle <b>" + paikkakunta + "</b> ei löydy, tarkista paikkakunnan nimi!");
		}
	}
});