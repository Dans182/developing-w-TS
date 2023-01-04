/*
A partir de la inicialización de la variable TypeScript infiere el tipo que será a lo largo del código y este no puede variar. Por ejemplo:
let myName = "Victoria";
Si bien no indicamos el tipo de dato como se haría de esta manera:
let myName: string = "Victoria";
TypeScript infiere que la variable myName será del tipo string y en adelante no podrá tomar un valor que no sea de este tipo de dato.
myName = 30;
Nos señalará como error pues se le quiere asignar un número a una variable de tipo string.
*/

//Acá no le indico el tipo de valor, sin embargo si me posiciono sobre el nombre de la variable, me indicará el tipo de
//valor y siempre que trate de reasignarlo, me dará error.
//Puedo especificar el tipo de dato o puede inferirlo e indicarlo automáticamente typescript.
//Todo esto haciendo uso de "var" o "let"

//Esto a continuación es una función anónima autoejecutable. IIFE (Immediately Invoked Function Expression)
/* (() => {
})(); */
/*Nombres de variables iguales
TypeScript te indicará como error aquellas variables con el mismo nombre a pesar de estar en archivos distintos. Esto no sucederá en entornos preconfigurados como por ejemplo Angular o React, ya que estos trabajan de forma modular o tienen un alcance (scope) para cada variable.
Si deseas trabajar con los mismos nombres de variables en diferentes archivos, puedes crear una función anónima autoejecutada:
( () => {
    let myName = "Victoria";
})();
Lo mismo por cada variable que desees tener el mismo nombre (myName para este ejemplo) deberás crear este tipo de función para evitar que te den estas advertencias.*/
//De esta manera cierras el scope. Y todas estas variables solo existiran dentro de este fichero.


//var myProductName2 = 'Product 1';
(() => {
  let myProductName = 'Product 1';
  let myProductPrice = 123;

  //Puedes reasignar el valor a una variable
  myProductName = 'Change';

  //En Visual Studio Code puedes obtener autocompletado teniendo sugerencias según el tipo de dato que sea la variable
  myProductName.toLowerCase();
  myProductPrice.toFixed();

  //Con const, no me indica el tipo de dato. Como es constante, no te lo infiere, porque se supone que una constante no se
  //puede reasignar el valor
  const myProductStock = 1000;
})();
