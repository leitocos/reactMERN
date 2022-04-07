  function miFuncion1(cadena) {
    alert(`Tu cadena tiene ${cadena.length} caracteres`);
  }

  function miFuncion2(cadena, recorte) {
    alert(`Tu cadena <${cadena}> recortada en ${recorte} es: ${cadena.substring(0, recorte)}`);
  }

  function miFuncion3(cadena, caracter) {
    let aSeparar = cadena.split(caracter);
    alert(`Tu cadena <${cadena}> separada por <${caracter}> es un Array de ${aSeparar.length} elemento/s: Array[${aSeparar}]`);
  }

  function miFuncion4(cadena, repetir) {
    let cadenaConSeparador = `${cadena} `;
    alert(`Tu cadena <${cadena}> repetida ${repetir} veces da: ${cadenaConSeparador.repeat(repetir)}`);
  }
