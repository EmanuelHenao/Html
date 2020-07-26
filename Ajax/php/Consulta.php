<?php 
	$variable=$_POST['nombre'];
	include('Conexion.php');
	$bd=mysql_select_db($variable);

	if($bd==false){
		echo "false";

	}else{
		$sql="SELECT * FROM viajes";
		$consulta=mysql_query($sql);
		$i=0;
		while($fila=mysql_fetch_array($consulta)){

			$vect[$i]=$fila;
			$i++;
		}
		
	
		
		if(mysql_num_rows($consulta)>0){
			
			echo  json_encode($vect);


		}
	}
	
?>