() => {
  let userId: string | number;
  userId = 123;
  userId = 'asasa';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log('string' + myText.toLowerCase());
    } else {
      myText.toFixed();
    }
  }
  greeting(125);
  greeting('Prueba');
};
