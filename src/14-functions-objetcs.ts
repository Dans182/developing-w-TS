(() => {
  const login = (email: string, password: string) => {
    console.log(email, password);
  };
  login('dans@gmail.com', '123121312');

  //acá solo paso email y password, pero si realmente pasara muchos mas parametros, lo más comodo sería
  //hacer uso de objetos.

  //Acá abajo transformamos la primer función a formato "objeto".
  const login2 = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };
  login2({ email: 'dans@gmail.com', password: 123121312 });
})();
