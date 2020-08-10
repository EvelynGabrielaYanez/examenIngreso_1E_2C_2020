/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let vNombre;
	let vPeso;
	let vEdad;
	let vSexo;
	const cCantidadPersonas = 5;
	let vContMujeres = 0;
	let vAcumEdad = 0 ;
	let vMaxPesoHombre = 0; // Inicializo en 0 pues no hay pesos negativos
	let vMaxPesoHombreNombre;
	

	for(let i=1; i<= cCantidadPersonas; i++){

	vNombre= prompt("Ingrese el nombre");

	do{
	vSexo = prompt("Ingrese el sexo(f/m)");
	}while(vSexo!="f" && vSexo!="m")

	do{
	vPeso = parseFloat(prompt("Ingrese el peso"));
	}while(vPeso<0 || isNaN(vPeso))

	do{
	vEdad = parseInt(prompt("Ingrese la edad"));
	}while(vEdad<0 || isNaN(vEdad))


	if(vSexo == "f"){

		vContMujeres++;

	}else{
		if(vMaxPesoHombre<vPeso){
			vMaxPesoHombre = vPeso;
			vMaxPesoHombreNombre = vNombre;
		}

	}
	
	vAcumEdad+=vEdad;

	}

	document.write("a)La cantidad de mujeres ingresadas es: " + vContMujeres + ".</br>b)La edad promedio en total es: " + (vAcumEdad/cCantidadPersonas)+
	".</br>c)El hombre mas pesado es: " + vMaxPesoHombreNombre )

}
