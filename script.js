
const gravity = {
  mercury: 3.7,
  venus: 8.87,
  earth: 9.81,
  mars: 3.71,
  jupiter: 24.79,
  saturn: 10.44,
  uranus: 8.69,
  neptune: 11.15
};
const planetImages = {
  mercury: "/image/mercury.png",
  venus: "/image/venus.png",
  earth: "/image/earth.png",
  mars: "/image/mars.png",
  jupiter: "/image/jupiter.png",
  saturn: "/image/saturn.png",
  uranus: "/image/uranus.png",
  neptune: "/image/neptune.png"
};

function calculateweight() {
  const massInput = document.getElementById("mass");
  const select = document.querySelector("select");
  const resultDiv = document.getElementById("result");
  const planetImage = document.getElementById("planetImage");

  const mass = parseFloat(massInput.value);
  const planet = select.value;

  if (isNaN(mass) || mass <= 0) {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = " Please enter a valid mass!";
    planetImage.style.display = "";
    return;
  }

  const weight = (mass * gravity[planet]).toFixed(3);

  resultDiv.style.display = "block";
  resultDiv.innerHTML = `The weight of the object on <b>${planet.toUpperCase()}</b> is <b>${weight} N</b>`;

  planetImage.src = planetImages[planet];
  planetImage.classList.add("show");
  planetImage.style.display = "block";
}
const calculateButton = document.getElementById("calculateweight"); 
if (calculateButton) {
    calculateButton.addEventListener('click', calculateweight);
}