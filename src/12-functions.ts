(() => {
  type sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    //En el argumento createdAt se indica que es de tipo Date en alusión al objeto Date propio de JavaScript y no a un tipo de dato como string o number. Son diferentes las definiciones.
    stock: number,
    size: sizes
  ) {
    return { title, createdAt, stock, size };
  }
  ///Cuando hagamos uso de nuestra función, TypeScript comprobará que le envíes todos los parámetros en orden y con el tipo de dato que se declaró en la función0
  const producto1 = createProductToJson('P1', new Date(), 12, 'M');
  console.log(producto1);
  console.log(producto1.createdAt);
  console.log(producto1.title);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    //Si queremos que un argumento sea opcional de enviar, podemos usar el modificador ? junto al nombre del argumento:
    size?: sizes
  ) => {
    return { title, createdAt, stock, size };
  };
  const producto2 = createProductToJsonV2('P2', new Date(), 5);

  console.log(producto2);
  console.log(producto2.createdAt);
  console.log(producto2.size);

  /*
  cuando definamos argumentos opcionales en una función, estas deben ubicarse al final, si no TypeScript nos indicará un **error, ya que podría haber confusiones al momento de invocar la función y enviar los respectivos parámetros:
  function randomFunc(title: string, amount?: number){} //CORRECTO
  function otherFunc(title?: string, amount: number){} // ERROR
*/
})();
