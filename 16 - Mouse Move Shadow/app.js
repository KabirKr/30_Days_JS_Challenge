const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 200; // 200px

function shadow(e) {
  //   const width = hero.offsetWidth;
  //   const height = hero.offsetHeight;

  //   Useing ES6 desturcturing
  const { offsetWidth: width, offsetHeight: height } = hero;

  //   Using offsetX and offsetY we can get the position of the cursor
  let { offsetX: x, offsetY: y } = e;

  //   console.log(this, e.target);

  /* 'this' is always hero but target will be changed according to the position of the mouse */

  //   Fix cursor position for nested element
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  //   Calculate how far text shadow should go
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
  ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
  ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.7),
  ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)
  `;
}

hero.addEventListener("mousemove", shadow);
