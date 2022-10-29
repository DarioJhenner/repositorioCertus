
function Ej01(){
  a = document.getElementById("num1").value;
  b = document.getElementById("num2").value;
  c = document.getElementById("num3").value;
  d = document.getElementById("num4").value;
  e = document.getElementById("num5").value;
  let arr1 = [parseInt(a),parseInt(b),parseInt(c),parseInt(d),parseInt(e)];
  arr2 = arr1.sort((a,b)=>a-b);
  document.getElementById("mayor").innerHTML=arr2[4];
  document.getElementById("menor").innerHTML=arr2[0];
  document.getElementById("tercer").innerHTML=arr2[2];
}

function Ej02(){
  a = document.getElementById("fourdigit").value;
  let arr1 = [a[0], a[1], a[2], a[3]];
  let arr2 = [];
  arr1.forEach(e => arr2.push(parseInt(e)));
  let result = arr2.reduce((y, x) => x % 2 == 1 ? y+x : y, 0);
  document.getElementById("sumimp").innerHTML=result;
}

function Ej03(){
  a = parseInt(document.getElementById("soles").value);
  dolar = Math.round((a/4)*100)/100;
  euro = Math.round((a/4.1)*100)/100;
  document.getElementById("dolares").innerHTML=dolar+" USD";
  document.getElementById("euros").innerHTML=euro+" EUR";
}

function Ej04(){
  a = document.getElementById("fivedigit").value;
  let arr1 = [a[0], a[1], a[2], a[3], a[4]];
  let arr2 = [];
  arr1.forEach(e => arr2.push(parseInt(e)));
  let result = arr2.reduce((y, x) => (x % 2 == 1 && IsPrime(x) == false) ? y+x : y, 0);
  document.getElementById("sumrare").innerHTML=result;
}

function IsPrime(n) {
  if (n<=1) return false;
  for (let i = 2; i <= n-1; i++)
    if (n % i == 0) return false;
  return true;
}