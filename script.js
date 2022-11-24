const REQUEST_URL = "https://fe.it-academy.by/Examples/test_JSE.txt";
const SHR = new XMLHttpRequest();
SHR.open("GET", REQUEST_URL);
let str;
let regexp = /(".*\\".*?")|('.*\\'.*?')|('.*?')|(".*?")/g;
SHR.onload = () => {
  str = SHR.response;
  let result = str.match(regexp);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
};

SHR.send();
