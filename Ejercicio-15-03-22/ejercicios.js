// EJERCICIO 1
  function ejercicio1() {
    let puesto = prompt("Ingrese el número del puesto (1-repositor, 2-cajero y 3-supervisor.):");
    let sueldoRepositor = 15890;
    let sueldoRepositorBono = sueldoRepositor * 1.1;
    let sueldoCajero = 25630.89;
    let sueldoSupervisor = 35560.20; // -11%
    let sueldoSupervisorJubilacion = sueldoSupervisor * 0.89;

    if(puesto==1) { alert("El sueldo de repositor es $ "+sueldoRepositor.toFixed(2)+" y con el bono $ "+sueldoRepositorBono.toFixed(2)); }
    else if(puesto==2) { alert("El sueldo de cajero es $ "+sueldoCajero.toFixed(2)); }
    else if(puesto==3) { alert("El sueldo de supervisor es $ "+sueldoSupervisor.toFixed(2)+" menos jubilación $"+sueldoSupervisorJubilacion.toFixed(2)); }
    else { alert("Puesto desconocido."); }
  }


// EJERCICIO 2
  function ejercicio2() {
    let cantidad = prompt("Ingrese la cantidad de paquetes:");
    if (cantidad < 5) { alert("No se permiten compras inferiores a 5 paquetes."); }
    else if (cantidad >= 5 && cantidad <= 15) { alert("El costo de envío es de $200."); }
    else if (cantidad >= 5 && cantidad > 15) { alert("¡El costo de envío es gratis!"); }
    else { alert("Indique sólo el número de paquetes."); }
  }

// EJERCICIO 3
  function ejercicio3() {
    let nombre = prompt("Ingrese su nombre:");
    let numero = prompt("Ingrese un número:");
    let resultado = parseInt(nombre.length) + parseInt(numero);
    if (resultado >= 15) { alert( "Tu nombre "+nombre+" tiene "+nombre.length+" letras y sumado a tu número "+numero+" da como resultado "+resultado+" ¡ES MAYOR O IGUAL A 15!");}
    else { alert( "Tu nombre tiene "+nombre.length+" letras y sumado a tu número "+numero+" da como resultado "+resultado+" ¡ES MENOR A 15!");}
  }

// EJERCICIO 4
  function ejercicio4() {
    let nombre = prompt("Ingrese su nombre:");
    let edad = prompt("Ingrese su edad:");
    if (edad >= 18) { alert( nombre+", podés ingresar");}
    else { alert( nombre+", NO podés ingresar");}
  }

// EJERCICIO 5
  function ejercicio5(a) {
    if (a == '5a') { alert("Hello Arbi"); }
    else if (a == '5b') { document.write("Hello Arbi"); }
    else if (a == '5c') { document.write(3+5); }
    else if (a == '5d') {
      let nombre = prompt("Ingrese su nombre:");
      document.write("Hola "+nombre);
    }
    else if (a == '5e') {
      let nombre = prompt("Ingrese su nombre:");
      document.write("Hola "+nombre +" tu nombre tiene "+ nombre.length+" letras");
    }
    else { alert("Ocurrió un error"); }

  }
