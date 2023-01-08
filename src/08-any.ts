(() => {
  let myDinamicVar: any;
  myDinamicVar = 100;
  myDinamicVar = null;
  myDinamicVar = {};
  myDinamicVar = '';
  //de esta manera "desactivamos" el sistema de chequeo de TS.
  //Porque le decimos que esa variable puede ser cualquier tipo de dato en
  //esa variable en particular.
  //Se aconseja que any no se use.

  /*El any suele ser una buena herramienta para una migración hacia typescript,
de manera que no sea radical*/

  myDinamicVar = 'Hola';
  //al ser any, automaticamente ts ni js no nos ayuda ni nos indica que metodos se pueden usar
  //para un string
  const rta = (myDinamicVar as string).toLowerCase();
  //Haciendo un cast, obligo a que una varible sea tratada como un determinado estilo de dato.
  console.log(rta);

  myDinamicVar = 123456;
  //Esta es otra forma de hacer un cast, para que una variable sea tratada de una determinada forma para obtener las ayudas sobre métodos y demás de ts.
  //Son formas para que una variable sea tratada forzosamente como un tipo de dato que le indiques.
  const rta2 = (<number>myDinamicVar).toFixed();
  console.log(rta2);
})();
