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
})();
