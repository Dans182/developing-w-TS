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
})();
