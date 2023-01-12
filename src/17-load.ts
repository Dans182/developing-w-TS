//En el caso de Lodash, es una libreria que no viene con soporte a TS.
//Sin embargo, al no tener, igualmente se puede usar y adaptar a TS.

//En este caso se instala la libreria como te indica la documentación.

//Para importarla, para JS es como abajo se muestra
//var_ = require("lodash");
//Sin embargo, para importarla a TS hago un ajuste, una traduccion equivalente y funciona.
//En el lodash, me hace una sugerencia, sobre como se puede preparar el tipado de esa libreria es TS
//Y me sugiere un comando para instalarlo. Una vez hecho la instalación, ya está...
//Ts me sugiere metodos, me indica errores y muestra tipados en esa libreria que inicialmente no
//tenía soporte con TS
import _ from 'lodash';

const data = [
  {
    username: 'Nico',
    role: 'admin',
  },
  {
    username: 'Valentina',
    role: 'seller',
  },
  {
    username: 'Rick',
    role: 'admin',
  },
  {
    username: 'Santiago',
    role: 'customer',
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
