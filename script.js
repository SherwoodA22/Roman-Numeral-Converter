const numInput = document.getElementById("number");
const convert = document.getElementById("convert-btn");
const output = document.getElementById("output")

const numerals = [
["M",  1000],
["CM", 900],
["D",  500],
["CD", 400],
["C",  100],
["XC", 90],
["L",  50],
["XL", 40],
["X",  10],
["IX", 9],
["V",  5],
["IV", 4],
["I",  1],
];
convert.addEventListener("click", () => {
  if (numInput.value === "") {
    output.innerText = "Please enter a valid number";
    } else if (numInput.value <= 0) { 
      output.innerText = "Please enter a number greater than or equal to 1";
    } else if (numInput.value >= 4000) {
      output.innerText = "Please enter a number less than or equal to 3999";
    } else {
      let result = "";
      let tmpInput = parseInt(numInput.value);
      for(let i = 0; i < numerals.length; ++i) {
        while(tmpInput >= numerals[i][1]){
          console.log(numerals[i][0]);
          console.log(numerals[i][1]);
          result += numerals[i][0];
          tmpInput -= numerals[i][1];
        }
      }
      output.innerText = result;
    }

});