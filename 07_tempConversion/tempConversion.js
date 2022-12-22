//.toFixed(1) for round to the tenth place?
//ftoc form is f-32 divided by 1.800
//ctof form is c*1.800 + 32
const ftoc = function(x) {
  let cDeg = (x - 32) / 1.800;
  let rDeg = cDeg.toFixed(1);
  return Number(rDeg);
};

const ctof = function(y) {
  let fDeg = (y * 1.800) + 32;
  let rDeg = fDeg.toFixed(1);
  return Number(rDeg);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
