const ms = 1;
setInterval(async () => {
  let start = Date.now().toString();
  await fetch("http://3.79.98.180:3000/teilnehmer", { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      let stop = Date.now().toString();
      let time = stop - start;
      setToMedianList(time);
    });
}, ms);

let medianList = [];
let max = 1000;

function setToMedianList(value) {
  if (medianList.length < max) {
    medianList.push(value);
  } else {
    medianList.shift();
    medianList.push(value);
  }
}
function getMedian() {
  return medianList.reduce((a, b) => a + b) / medianList.length;
}

setInterval(async () => {
  console.clear();
  console.log("Median Time: ", getMedian(), "by ", ms, "ms");
}, 1000);
