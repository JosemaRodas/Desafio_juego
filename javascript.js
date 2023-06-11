function spinWheel() {
    var options = ["Premio 1", "Premio 2", "Premio 3", "Premio 4", "Premio 5"];
    var wheel = document.querySelector(".wheel");
    var button = document.querySelector("button");
  
    // Deshabilitar el botón mientras la rueda está girando
    button.disabled = true;
  
    // Generar un número aleatorio de vueltas entre 2 y 6
    var totalRotations = Math.floor(Math.random() * 5) + 2;
  
    // Calcular el ángulo de destino basado en el número de vueltas
    var targetAngle = totalRotations * 360 + Math.floor(Math.random() * 360);
  
    // Girar la rueda animándola con CSS
    wheel.style.transition = "transform 5s ease-out";
    wheel.style.transform = "rotate(0deg)"; // Restablecer la posición inicial
    setTimeout(function() {
      wheel.style.transform = "rotate(" + targetAngle + "deg)"; // Girar a la posición de destino
    }, 100);
  
    // Después de 5 segundos (duración de la animación), mostrar el resultado
    setTimeout(function() {
      var result = document.getElementById("result");
      var prize = Math.floor(targetAngle % 360 / (360 / options.length));
      result.innerHTML = "¡Has ganado " + options[prize] + "!";
      button.disabled = false; // Habilitar el botón nuevamente
    }, 5000);
  }
  