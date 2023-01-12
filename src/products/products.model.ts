//.model en TS no significa nada, es una forma visual para indicar que ese archivo tiene modelado modular
//.service en TS es una forma visual para indicar que trata datos

//Todo lo que tenga que ver con el modelado de datos o con la definicion
//de tipos, va en el model

//Yo acá busco que estos tipados de abajo, puedan ser exportados y se puedan llamar desde otros sitios

export type sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type product = {
  title: string;
  createdAd: Date;
  stock: number;
  size?: sizes;
};

//Nuestro código puede ser dividido en varios módulos
//(archivos), por lo que para poder usar las funciones o
//variables que existen en uno y queramos acceder desde otro,
//utilizamos import y export.
