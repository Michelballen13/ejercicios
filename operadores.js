const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function areaTriangulo(base, altura) {
  return 0.5 * base * altura;
}

function suma(a, b) {
  return a + b;
}

function cuadrado(n) {
  return n * n;
}

function eurosADolares(euros) {
  const tasaCambio = 1.1;
  return euros * tasaCambio;
}

function areaPerimetroCuadrado(lado) {
  return { area: lado * lado, perimetro: 4 * lado };
}

function areaVolumenCilindro(radio, altura) {
  const pi = Math.PI;
  return {
    area: 2 * pi * radio * (radio + altura),
    volumen: pi * radio * radio * altura,
  };
}

function longitudCircunferencia(radio) {
  const pi = Math.PI;
  return 2 * pi * radio;
}

function areaCirculoInscrito(radio) {
  const pi = Math.PI;
  return pi * radio * radio;
}

function promedioTresNumeros(a, b, c) {
  return (a + b + c) / 3;
}

function menu() {
  console.log("\n1. Calcular el área de un triángulo");
  console.log("2. Calcular la suma de dos números");
  console.log("3. Calcular el cuadrado de un número");
  console.log("4. Convertir euros a dólares");
  console.log("5. Calcular el área y el perímetro de un cuadrado");
  console.log("6. Calcular el área y el volumen de un cilindro");
  console.log("7. Calcular la longitud y el área de un círculo");
  console.log("8. Calcular el promedio de tres números");
  console.log("9. Salir");
}

function preguntar() {
  menu();
  readline.question("\nElige una opción: ", function (opcion) {
    switch (opcion) {
      case "1":
        readline.question(
          "Introduce base y altura del triángulo separados por espacio: ",
          function (valores) {
            let [base, altura] = valores.split(" ").map(Number);
            console.log(areaTriangulo(base, altura));
            preguntar();
          }
        );
        break;
      case "2":
        readline.question(
          "Introduce dos números separados por espacio: ",
          function (valores) {
            let [a, b] = valores.split(" ").map(Number);
            console.log(suma(a, b));
            preguntar();
          }
        );
        break;
      case "3":
        readline.question("Introduce un número: ", function (n) {
          console.log(cuadrado(Number(n)));
          preguntar();
        });
        break;
      case "4":
        readline.question("Introduce cantidad en euros: ", function (euros) {
          console.log(eurosADolares(Number(euros)));
          preguntar();
        });
        break;
      case "5":
        readline.question("Introduce el lado del cuadrado: ", function (lado) {
          console.log(areaPerimetroCuadrado(Number(lado)));
          preguntar();
        });
        break;
      case "6":
        readline.question(
          "Introduce radio y altura del cilindro separados por espacio: ",
          function (valores) {
            let [radio, altura] = valores.split(" ").map(Number);
            console.log(areaVolumenCilindro(radio, altura));
            preguntar();
          }
        );
        break;

      case "7":
        readline.question(
          "Introduce el radio de la circunferencia: ",
          function (radio) {
            const longitud = longitudCircunferencia(Number(radio));
            const area = areaCirculoInscrito(Number(radio));
            console.log(`Longitud de la circunferencia: ${longitud}`);
            console.log(`Área del círculo inscrito: ${area}`);
            preguntar();
          }
        );
        break;

      case "8":
        readline.question(
          "Introduce tres números separados por espacio: ",
          function (valores) {
            let [a, b, c] = valores.split(" ").map(Number);
            const promedio = promedioTresNumeros(a, b, c);
            console.log(`El promedio de los tres números es: ${promedio}`);
            preguntar();
          }
        );
        break;

      case "9":
        readline.close();
        break;
      default:
        console.log("Opción no válida");
        preguntar();
    }
  });
}

preguntar();
