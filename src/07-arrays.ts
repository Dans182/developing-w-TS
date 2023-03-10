(() => {
  let prices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //Acá infiere que es un array, pero solo de números, por ende, no acepta nada más dentro.
  // prices.push("hola");
  // prices.push(true);
  // prices.push({});
  prices.push(10);
  console.log(prices);

  let prices2 = [1, 2, 3, 4, 5, 'prueba', true];
  //En cambio acá estoy indicando que mi array puede ser de números, booleans, strings o incluso de dos o tres en conjunto.

  let mixed: (string | number | boolean | object)[] = ['hola', true];
  //De la manera arriba indicada le aviso a TS explícitamente que se trata de un array y de que tipos de datos existen o existirán dentro
  mixed.push(12);
  mixed.push({});
  mixed.push([]);
  //Los objetos engloban tantoa a los arrays([]), como a los objetos propiamente ({}).
  console.log(mixed);

  let numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  numbers.map((item) => item * 2);

  // let numbers2 = ["hola", "chao"];
  // numbers2.map((item) => item * 2);
  //Acá te arroja error porque entiende que el método de arrays map, en este caso es para multiplicar números. No se pueden multiplicar strings.
})();
