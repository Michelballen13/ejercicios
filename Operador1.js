function calcularAreaTriangulo(base, altura) {

    if (isNaN(base) || isNaN(altura)) {
      return "Los valores de base y altura deben ser números";
    }
  
    const area = (base * altura) / 2;
  
    return area;
  }
  
  const base = "3"; 
  const altura = "7";
  
  const areaTriangulo = calcularAreaTriangulo(base, altura);
  
  if (typeof areaTriangulo === "string") {
    console.log(areaTriangulo); 
  } else {
    console.log("El área del triángulo es:", areaTriangulo);
  }
  