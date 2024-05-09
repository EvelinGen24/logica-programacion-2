function convertirTemperatura() {
    let celsiusInput = document.getElementById("celsiusInput").value;
    let celsius = parseFloat(celsiusInput);
  
    // Función para verificar si la entrada es un número
    function esNumero(valor) {
      return !isNaN(valor);
    }
  
    // Verificar si la entrada es un número
    if (!esNumero(celsius)) {
      alert("Por favor, ingrese un número válido.");
      return;
    }
  
    // Convertir Celsius a Fahrenheit
    let fahrenheit = celsius * 9/5 + 32;
  
    // Convertir Celsius a Kelvin
    let kelvin = celsius + 273.15;
  
    // Mostrar los resultados en el elemento resultado
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
      <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
      <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
    `;
  }
  

