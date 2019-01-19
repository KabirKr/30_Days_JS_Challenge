// Select all elemnts that has a data-time attribute and convert them to an Array
const timeNode = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNode
  // get the times and make an array of times
  .map(node => node.dataset.time)
  .map(timeCode => {
    //  split the elements into minutes and seconds and convert them to number
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    // console.log(mins * 60 + secs);
    // convert all to secs
    return mins * 60 + secs;
  })
  //   Add all seconds and get the total value
  .reduce((total, time) => total + time);

let secondsLeft = seconds;

// get whole hours
const hours = Math.floor(secondsLeft / 3600);
// after geting the hour seconds left =>
secondsLeft = secondsLeft % 3600;

// get whole minutes
const mins = Math.floor(secondsLeft / 60);
// after geting the minutes seconds left =>
secondsLeft = secondsLeft % 60;

console.log("Hours: " + hours);
console.log("Minutes: " + mins);
console.log("seconds " + secondsLeft);
