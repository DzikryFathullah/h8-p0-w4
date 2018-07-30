function totalDigitRekursif(angka) {
  // you can only write your code here!
  var  angkaStr = String(angka)
  
  if (angkaStr.length === 1) {
    return Number (angkaStr[0])
  }
  //console.log(angkaStr.length)
  //console.log(angkaStr.slice(0,angkaStr.length))
  return Number(angkaStr[0]) + totalDigitRekursif(angkaStr.slice(1,angkaStr.length))
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
