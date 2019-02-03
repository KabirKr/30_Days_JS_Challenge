const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
  //e.stopPropagation(); // stop bubbling
  //   console.log(this);
}

/* 
event bubbling  means if we click in a div which is nested inside other divs the click event will go from that div to all the way up. e.g : div three => div two => div one => body ...... (bottom to top)


event capturing means if we click in a div which is nested inside other divs the click event will start at the top div and will go down to the div where the click event happened. e.g : div one => div two => div three
(top to bottom)

By default  capture is false so event bubbling happens by default
If we set capture to true then only event capturing happens
*/

divs.forEach(div =>
  div.addEventListener("click", logText, {
    capture: false
    // once: true
  })
);

// stopPropagation() with capture: false will stop bubbling and so it will give only the div we clicked in. [output: div 3]
// stopPropagation() with capture: true will stop capturing and so it will give only the top div in which the clicked div lives. [output: div 1]

button.addEventListener(
  "click",
  () => {
    console.log("Clicked!!!");
  },
  {
    once: true
  }
);

// once: true => it will allow to click only once. After the first click it will unbind itself from the click event
