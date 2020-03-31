<?php

if(isset($_REQUEST['paikkakunta'])){
	$paikkakunta = urlencode($_REQUEST['paikkakunta']);
	$urli = "https://api.openweathermap.org/data/2.5/weather?lang=en&units=metric&q=".$paikkakunta."&appid=00fc2c3482dd80bc2e24185d10f675dd";
	$data = file_get_contents($urli);
	header("Access-Control-Allow-Origin: *");
	header("Content-type: application/json");
	//print $data;
	print json_encode(json_decode($data), JSON_PRETTY_PRINT);
}
?>