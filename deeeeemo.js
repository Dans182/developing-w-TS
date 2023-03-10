//@ts-check
//Uso el ts-check, para que usando ts me analice el fichero javascript

//typescript transpila y transforma los archivos ts a js

//'npx tsc --init'
//Con este comando generamos automáticamente nuestro archivo TSConfig.json

//npx tsc
//Este comando es para transpilar todos los archivos

//npx tsc --watch
//Este comando es para que me haga una transpilación de manera reactiva, cada vez que guarde un archivo .ts que
//hubiera sufrido cambios, acá me transpila todo a archivos .js

//npx tsc archivo_typescript.ts
//Aca transpilas un archivo que tu especifiques

//npx tsc archivo_typescript.ts --target es6
//Acá haces una compilación a una versión específica

//npx tsc archivo_typescript.ts --target es6 --outDir carpeta_destino
//Enviando compilación a una carpeta

//npx tsc *.ts --target es6 --outDir carpeta_destino
//deseas aplicar la anterior operación a todos los archivos con extensión TypeScript

/*Deno: un entorno nativo para ambos lenguajes
Deno, del mismo creador de Node.js, es un nuevo entorno de ejecución para JavaScript que puede correr también nativamente TypeScript. Sin embargo, aún no tiene la madurez en el ecosistema de Node.js*/


//node src/hello.js
//Ejecuto el archivo js

(async ()=> {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET'
    });
    const data = await rta.json();
    products.concat(data);
  }
  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].prize;
    }
    return total;
  }
  function addProduct(index) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  // const rta = person +  limit;
  // console.log(rta);
});
