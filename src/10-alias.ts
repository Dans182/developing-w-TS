(() => {
  //type es una palabra de reservada de TS y a través de su uso puedo crear tipados personalizados.
  type userID = string | number | boolean;

  let userId: userID;

  function greeting(userId: userID) {
    if (typeof userId === 'string') {
      console.log('string ' + userId.toLowerCase());
    } else {
    }
  }

  greeting('Prueba');
  greeting(123);
})();
