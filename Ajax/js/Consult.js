$(document).ready(function(){

});

function EnviarConsulta(){
	var nombre=$("#nombre").val();
	
	$.ajax({
		url:"../php/Consulta.php",
		type:"POST",
		data:{"nombre":nombre},
		success:function(data){
			
			if(data=="false"){
				alert("base de datos erronea");
			}else{
				var i=0;
				//var datos=jQuery.parseJSON(data);
				var datos=jQuery.parseJSON(data);
				var html="";
				html=html+"<table><thead>"+
				"<tr><th>id viajes</th> <th>nombre viajes</th> <th>precio</th></tr>"+
				"</thead>"+
				"<tbody>";
				while(i<datos.length){
					console.log(datos[i]['precio']);
					html=html+"<tr><td>"+datos[i]['id_viaje']+"</td><td>"+datos[i]['nombre_viaje']+"</td><td>"+datos[i]['precio']+"</td></tr>"
					i++;
				}
				html=html+"</tbody></table>";
				$("#contenido").html(html);
				$("#link").html("<img src='../imagenes/gato.png' width=100px, height=100px>")
			
			}
			//$("#contenido").html("<label>"+data+"</label>");
		},
		error:function(data){
			alert("error en el ajax");
		},

	});

}