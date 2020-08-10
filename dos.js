/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let vMarca;
  let vPrecio;
  let vPeso;
  let vTipo;
  let vRespuesta;
  let vAcumPesoTotal = 0;
  let vMaxPrecioLiq = 0; //Inicializo en 0 pues se que no puede haber precios negativos
  let vMaxPrecioLiqMarca = "No se ingreso";
  let vMinPrecioSol;
  let vMinPrecioSolMarca = "No se ingreso";
  let vBanderaMin = false;

  do{

    vMarca = prompt("Ingrese la marca");

    do{
    vPrecio = parseFloat(prompt("Ingrese el precio"));
    }while(vPrecio<0 || isNaN(vPrecio))

    do{
      vPeso= parseFloat(prompt("Ingrese el peso"));
    }while(vPeso<0 || isNaN(vPeso))

    do{
      vTipo = prompt("Ingrese el tipo (sólido/líquido)");
    }while(vTipo!= "sólido" && vTipo!= "líquido")

    vAcumPesoTotal+=vPeso;
    
    switch(vTipo){
      case "sólido":
        if(vBanderaMin == false){
          vMinPrecioSol = vPrecio;
          vMinPrecioSolMarca = vMarca;
          vBanderaMin = true;

        }else if(vMinPrecioSol>vPrecio){
          vMinPrecioSol = vPrecio;
          vMinPrecioSolMarca = vMarca;
        }

      break;
      case "líquido":

        if(vMaxPrecioLiq<vPrecio){
          vMaxPrecioLiq= vPrecio;
          vMaxPrecioLiqMarca = vMarca;
        }

      break;

    }


    vRespuesta = prompt("¿Desea continuar?");

  }while(vRespuesta == "si")


  alert("a)El peso total de la compra es de: " + vAcumPesoTotal + ".\nb)La marca del más caro de los líquidos es: " + vMaxPrecioLiqMarca +
  ".\c)La marca del más barato de los sólidos es: " + vMinPrecioSolMarca);
}