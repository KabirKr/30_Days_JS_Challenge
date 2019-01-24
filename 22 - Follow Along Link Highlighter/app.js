const triggers = document.querySelectorAll("a");

// create a span
const highlight = document.createElement("span");

// add a class to the span highlight
highlight.classList.add("highlight");

// add to DOM
document.body.append(highlight);

function highlightLink() {
  //   console.log(this);
  //   Detect where the element is in the page
  const linkCoords = this.getBoundingClientRect();
  //   console.log(linkCoords);

  //   make coords
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,

    // add the scrollY to original coord (horizontal scrolling)
    top: linkCoords.top + window.scrollY,
    // add the scrollX to original coord (vertical scrolling)
    left: linkCoords.left + window.scrollX
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;

  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px )`;
}

triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));
