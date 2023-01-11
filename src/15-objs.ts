(() => {
    //Acá aprendemos directamente a tipear objetos.
  type sizes = "S" | "M" | "L" | "XL" | "XXL";
 
 //Creamos nuestro objeto tipado
  type product = {
    title: string;
    createdAd: Date;
    stock: number;
    size?: sizes;
  };
//indicamos que no puede recibir cualquier tipo de dato, quitamos el "any" y
//le indicamos que solo puede recibir un objeto con las caracteristicas indicadas.
  const products: product[] = [];

  const addProduct = (data: product) => {
    products.push(data);
  };

  addProduct({
    title: "Prod1",
    createdAd: new Date(2010, 1, 1),
    stock: 12,
  });

  addProduct({
    title: "Prod2",
    createdAd: new Date(1990, 31, 3),
    stock: 18,
    size: "L",
  });
  console.log(products);
  products.push({
    title: "Prod3",
    createdAd: new Date(2090, 31, 3),
    stock: 88,
    size: "L",
  });


/*En TypeScript también podemos usar los Alias para definir la estructura de tipado que debería tener un objeto:
type userData = {
  username: string,
   email: string
}
Y luego este “nuevo tipo” puede ser usado en un array, por ejemplo, para definir el tipado de los objetos que queramos añadir:
type userData = {
  username: string,
  email: string
}

let usersList: userData[] = [];

usersList.push({
  username: "freddier", //CORRECTO
  email: "freddy@email.com", //CORRECTO
});
usersList.push({
  username: "cvander", //CORRECTO
  email: true, // ERROR. Debe ser de tipo string y NO de tipo boolean
});*/

})();
