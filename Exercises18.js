function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var angkaStr  = String(angka)
  var hasilKali = 1

    if (angkaStr.length < 2) {
      return angka
    }

    for (var i = 0; i < angkaStr.length; i++) {
      hasilKali = hasilKali * Number(angkaStr[i])
    }
    //console.log(hasilKali)
  var hasilKaliStr = String(hasilKali)
    if (hasilKaliStr.length >= 2) {
        return kaliTerusRekursif(hasilKali)
    } else {
        return hasilKali
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
