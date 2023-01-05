(() => {
  let productTitle = 'My amazing product';
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription = "I'm bla bla bla bla";
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}`;
  console.log(summary);

  //El backtick `` me sirve no solo para indicar un string, aparte de "" y '', sino que te permite hacer concatenaciones (interpolación) y a su vez te
  //permite escribir strings en multiples líneas.
})();
