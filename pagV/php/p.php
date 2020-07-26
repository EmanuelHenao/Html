<?php

	$nomb=$_POST['nom'];
	$cor=$_POST['cor'];
	$con=$_POST['con'];
	$conV=$_POST['con1'];
	$val=0;
	
	if ($nomb=="") {
		echo"ingrese por favor un nombre   ";
	}else{
		$val=$val+1;
	}
	
	if ($cor=="") {
		echo"ingrese por favor el correo    ";
	}else{
		$val=$val+1;
	}
	
	if ($con!="" && $con==$conV) {
		echo "validacion correcta    ";
		$val=$val+1;
	}else{
		echo "no coinciden   ";
	}

	if ($val==3) {
		echo "    se a registrado correctamente    Felicidades!!!";
	}

?>