(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  //Si quiero indicar que tipo de dato llevará una variable, pero no la quiero inicializar, si es obligatorio hacerlo de manera explícita.
  //al no indicar nada, ts no puede inferir el tipo de dato.
  let productInStock: number;
  console.log('productInStock', productInStock);

  if (productInStock > 10) {
    console.log('is greater');
  }

  //Acá creo esta variable, la cual es un método que me transformará lo que le ponga en un int. En este caso, es de Str a Int.
  //TS ya me infiere que la variable discount es de tipo number.
  let discount = parseInt('123');
  console.log('discount', discount);
})();
