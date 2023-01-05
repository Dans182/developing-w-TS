(() => {
  let isEnable = true;

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);

  //Los unicos valores que puede recibir un boolean es true or false.
  //En JS es normal que nuestro boolean acepte un null o undefined. Pero en TS solo acepta true o false.
  //Recordar que lo correcto y buena práctica es "boolean" y no "Boolean"
})();
