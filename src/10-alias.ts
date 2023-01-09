(() => {
  //type es una palabra de reservada de TS y a través de su uso puedo crear tipados personalizados.
  type userID = string | number | boolean;

  let userId: userID;

  //Literal types
  //Acá especifico que solo acepta una de las 5 opciones
  type sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
  let shirtSize: sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  //let shirtSize: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  //shirtSize = 'Z';

  function greeting(userId: userID, size: sizes) {
    if (typeof userId === 'string') {
      console.log('string ' + userId.toLowerCase());
    } else {
    }
  }
  greeting(11111, 'L');

  /*Los Alias nos permiten darle un nombre a uno o varios tipos de datos en conjunto. Un ejemplo de como se definen sería así:
¡Ahora UserID lo podemos usar como si fuese un tipo de dato string, boolean o number!
Los Union Types que vayamos a utilizar ahora serán menos tediosos de escribir, pues con los Alias podemos utilizar el mismo conjunto de tipos de datos en la definición de varias variables, beneficiándonos en escribir menos código.*/
})();
