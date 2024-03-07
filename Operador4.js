function convertirADolares(euros) {
    const tasaCambio = 1.09;
    const dolares = euros * tasaCambio;
    return dolares;
  }
  
  const cantidadEuros = 45;
  const cantidadDolares = convertirADolares(cantidadEuros);
  
  console.log(`€${cantidadEuros} equivalen a $${cantidadDolares.toFixed(2)}`);
  