let condicion = true;
const posibilidades = 10000000;
let contador = 0;

function numeroAleatorio() {
  return Math.floor(Math.random() * 46); // número entero 0 a 45
}

function jugadaPosible() {
  const jugada = new Set();
  while (jugada.size < 6) {
    jugada.add(numeroAleatorio());
  }
  return Array.from(jugada).sort((a, b) => a - b);
}

const contadorGlobal = (() => {
  const contador = Array(46).fill(0);

  return {
    agregarJugada(jugada) {
      for (const num of jugada) {
        if (num >= 0 && num <= 45) {
          contador[num]++;
        }
      }
    },
    obtenerConteo() {
      return contador.map((veces, num) => ({
        numero: num.toString().padStart(2, '0'),
        veces,
      }));
    },
    imprimirTabla() {
      console.table(this.obtenerConteo());
    }
  };
})();

function sonArraysIguales(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

while (condicion == true) {

  const jugada = jugadaPosible();
  const miJugada = jugadaPosible();
  contadorGlobal.agregarJugada(jugada);
  contador++;
  if (sonArraysIguales(jugada, miJugada)) {
    console.log("Ha salido tu número y es: " + jugada.map(n => n.toString().padStart(2, '0')).join(", ") + ". En la jugada numero: " + contador);
    condicion = false;
    break;
  }
}

contadorGlobal.imprimirTabla();


const datos = [
  {"numero": "00", "veces": 958},
  {"numero": "01", "veces": 1002},
  {"numero": "02", "veces": 1046},
  {"numero": "03", "veces": 909},
  {"numero": "04", "veces": 972},
  {"numero": "05", "veces": 958},
  {"numero": "06", "veces": 1007},
  {"numero": "07", "veces": 929},
  {"numero": "08", "veces": 1004},
  {"numero": "09", "veces": 1111},
  {"numero": "10", "veces": 1028},
  {"numero": "11", "veces": 958},
  {"numero": "12", "veces": 921},
  {"numero": "13", "veces": 932},
  {"numero": "14", "veces": 923},
  {"numero": "15", "veces": 1072},
  {"numero": "16", "veces": 1022},
  {"numero": "17", "veces": 938},
  {"numero": "18", "veces": 921},
  {"numero": "19", "veces": 1168},
  {"numero": "20", "veces": 1065},
  {"numero": "21", "veces": 944},
  {"numero": "22", "veces": 1072},
  {"numero": "23", "veces": 945},
  {"numero": "24", "veces": 1136},
  {"numero": "25", "veces": 929},
  {"numero": "26", "veces": 934},
  {"numero": "27", "veces": 930},
  {"numero": "28", "veces": 1048},
  {"numero": "29", "veces": 1010},
  {"numero": "30", "veces": 959},
  {"numero": "31", "veces": 1039},
  {"numero": "32", "veces": 923},
  {"numero": "33", "veces": 933},
  {"numero": "34", "veces": 1036},
  {"numero": "35", "veces": 1050},
  {"numero": "36", "veces": 1089},
  {"numero": "37", "veces": 1161},
  {"numero": "38", "veces": 939},
  {"numero": "39", "veces": 913},
  {"numero": "40", "veces": 1007},
  {"numero": "41", "veces": 1036},
  {"numero": "42", "veces": 959},
  {"numero": "43", "veces": 1250},
  {"numero": "44", "veces": 1025},
  {"numero": "45", "veces": 954}
];

const totalVeces = datos.reduce((acc, el) => acc + el.veces, 0);

const frecuencias = datos.map(({numero, veces}) => ({
  numero,
  veces,
  frecuencia: (veces / totalVeces * 100).toFixed(2) + '%'
}));

// Ordenar por frecuencia descendente
frecuencias.sort((a,b) => b.veces - a.veces);

console.table(frecuencias);