(() => {
  let myNull: null = null;
  let myUndefined: undefined = undefined;
  //En el tipo inferido, el null y el undefined lo interpreta como un dato de tipo "any"
  //Pero si los quiero efectivamente como null o undefined, tendría que hacer un tipado explícito
  //  let myNull = null;
  //  let myUndefined = undefined;

  let myNumber: number | null;
  myNumber = 18;
  myNumber = null;

  let myString: string | undefined;
  myString = 'hola';
  myString = undefined;

  function hi(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }
  hi('Daniel');
  hi(null);

  function hiV2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }
  hi('Daniel');
  hi(null);
})();
