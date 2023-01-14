const getRandomNumberInclusive = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

const chooseAnimation = (elHeight) => {
  return elHeight < screen.height / 2 ? "falling" : "elevating";
};

const addStyles = (
  elOpacity,
  elScale,
  elDuration,
  elDelay,
  elBlur,
  elSpread,
  elPositionX,
  elPositionY
) =>
  `
    opacity: ${elOpacity};
    box-shadow: 0px 0px ${elBlur}px ${elSpread}px rgba(255, 255, 255, 1);
    transform: scale(${elScale});
    animation: ${chooseAnimation(
      elPositionY
    )} ${elDuration}s linear ${elDelay}s infinite alternate;
    left: ${elPositionX}px;
    top: ${elPositionY}px;
  `;

const box = document.getElementById("box");

for (let i = 0; i < 300; i++) {
  const rndOpacity = getRandomNumberInclusive(0, 1);
  const rndBlur = getRandomNumberInclusive(5, 15);
  const rndSpread = getRandomNumberInclusive(1, 1);
  const rndScale = getRandomNumberInclusive(0, 1);
  const rndDuration = getRandomNumberInclusive(10, 50);
  const rndDelay = getRandomNumberInclusive(0, 10);
  const rndPositionX = getRandomNumberInclusive(0, screen.width);
  const rndPositionY = getRandomNumberInclusive(0, screen.height);

  const firefly = document.createElement("div");
  firefly.classList.add("firefly");
  firefly.style.cssText = addStyles(
    rndOpacity,
    rndScale,
    rndDuration,
    rndDelay,
    rndBlur,
    rndSpread,
    rndPositionX,
    rndPositionY
  );

  box.appendChild(firefly);
}
