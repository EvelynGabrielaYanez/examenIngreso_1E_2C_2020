/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let vSexoTitular;
	let vLugar;
	let vTemporada;
	let vCantidadPersonas;
	let vRespuesta;
	let vContBariloche = 0;
	let vContCataratas = 0;
	let vContSalta = 0;
	let vLugarMasElegido;
	let vMaxPasajeros = 0; //Inicializo en 0 pues se que no puede haber una cantidad negativa de pasajeros
	let vMaxPasajerosSexo;
	let vAcumInvierno = 0;
	let vContInvierno = 0;
	let vPromedioInvierno;


	do {
		do {
			vSexoTitular = prompt("Ingrese el sexo del titular(f/m)");
		} while (vSexoTitular != "f" && vSexoTitular != "m")

		do {
			vLugar = prompt("Ingrese el lugar");
		} while (vLugar != "bariloche" && vLugar != "cataratas" && vLugar != "salta")

		do {
			vTemporada = prompt("Ingrese la temporada");
		} while (vTemporada != "otoño" && vTemporada != "verano" && vTemporada != "primavera"  && vTemporada != "invierno")

		do {
			vCantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas"));
		} while (vCantidadPersonas <= 0 || isNaN(vCantidadPersonas))

		switch (vLugar) {
			case "bariloche":
				vContBariloche++;

				break;
			case "cataratas":
				vContCataratas++;
				break;
			case "salta":
				vContSalta++;
				break;
		}

		if(vMaxPasajeros<vCantidadPersonas){
			vMaxPasajeros = vCantidadPersonas;
			vMaxPasajerosSexo = vSexoTitular;
		}

		if(vTemporada == "invierno"){
			vAcumInvierno+=vCantidadPersonas;
			vContInvierno++;
		}
	
		vRespuesta = prompt("¿Desea continuar?(si/no)");
	} while (vRespuesta == "si")


	if(vContBariloche>vContCataratas && vContBariloche> vContSalta){
		vLugarMasElegido = "Bariloche";
	}else if(vContCataratas>vContBariloche && vContCataratas>vContSalta){
		vLugarMasElegido = "Cataratas";
	}else{
		vLugarMasElegido = "Salta";
	}

	if(vContInvierno==0){

		vPromedioInvierno = "No se registraron viajes en invierno";
		
	}else{
		vPromedioInvierno =	vAcumInvierno/vContInvierno;
	}

	
	alert("a)El lugar más elegido es: " + vLugarMasElegido + ".\nb)El sexo del titular que lleva más pasajeros es: " + vMaxPasajerosSexo + 
	"\nc)El promedio de personas por viaje, que viajan en inverno es: " + vPromedioInvierno );

}
