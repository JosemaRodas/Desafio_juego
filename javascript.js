function spinWheel() {
  const options = ["Premio 1", "Premio 2", "Premio 3", "Premio 4", "Premio 5"];
  const wheel = document.querySelector(".wheel");
  const button = document.querySelector("button");
  const result = document.getElementById("result");

  button.disabled = true;
  result.innerHTML = "Girando...";

  const totalRotations = Math.floor(Math.random() * 5) + 2;
  const targetAngle = totalRotations * 360 + Math.floor(Math.random() * 360);

  wheel.style.transition = "transform 5s ease-out";
  wheel.style.transform = `rotate(${targetAngle}deg)`;

  setTimeout(() => {
    const prize = Math.floor(targetAngle % 360 / (360 / options.length));
    result.innerHTML = `Has ganado ${options[prize]}!`;
    button.disabled = false;
  }, 5000);
}
