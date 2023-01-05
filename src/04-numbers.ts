(() => {
  //El tipo de dato number se usa para variables que contendrán números positivos, negativos o decimales.
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  //Cuando definas una variable de tipo de dato number, es preferible que el nombre de tipo sea en minúscula.
  //Esto como buena práctica, pues se hará referencia al tipo de dato number y no al objeto Number propio del lenguaje
  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);
  //En JavaScript, una variable de tipo number puede fácilmente ser concatenado con otra de tipo string
  //Sin embargo, esto podría llevar confusiones y errores durante la ejecución del programa, además de estar cambiando el tipo de dato de la variable.
  //Por ello, en TypeScript solo se pueden hacer operaciones numéricas entre números valga la redundancia:

  //Si quiero indicar que tipo de dato llevará una variable, pero no la quiero inicializar, si es obligatorio hacerlo de manera explícita.
  //al no indicar nada, ts no puede inferir el tipo de dato.
  //Serán señalados como errores aquellas variables que queramos usar sin haberles dado un valor inicial
  let productInStock: number;
  console.log('productInStock', productInStock);

  if (productInStock > 10) {
    console.log('is greater');
  }

  //Acá creo esta variable, la cual es un método que me transformará lo que le ponga en un int. En este caso, es de Str a Int.
  //TS ya me infiere que la variable discount es de tipo number.

  //NaN es parte del conjunto de números, al igual que los hexadecimal y los binarios.
  let discount = parseInt('123');
  //Esto funciona si el string tiene solo y exclusivamente números que no empiecen con 0. De lo contrario, el resultado será de tipo NaN
  console.log('discount', discount);

  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  //TypeScript nos puede indicar error si intentamos definir números binarios que tengan números que no sean 0 o 1 y si declaramos hexadecimales usando valores fuera del rango.
  let hex = 0xfff; //con 0x defino ya el hexadecimal
  console.log('hex', hex);

  let bin = 0b1010; //con 0b defino que es binario
  console.log('bin', bin);
})();
