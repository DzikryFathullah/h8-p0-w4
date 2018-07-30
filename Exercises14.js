function sorting(arrNumber) {
  // code di sini
 var nilaiSort = arrNumber.length
 for (var i = nilaiSort-1; i >= 0; i--) {
   for (var j = 1; j <= i; j++) {
     if (arrNumber[j-1] < arrNumber[j]) {
       var tamp = 0
       tamp = arrNumber[j]
       arrNumber[j] = arrNumber [j-1]
       arrNumber [j-1] = tamp 
     }
   }
 }
 //var nilaiSort = arrNumber.length
 //if (nilaiSort === 0) {
 //  return
 //}
 //for (var j = 1; j <= nilaiSort;  j++ ) {
 //  if (arrNumber[j-1] > arrNumber[j]) {
 //    var tampung = 0 
 //    tampung = arrNumber[j-1]
 //    arrNumber[j-1] = arrNumber[j]
 //    arrNumber[j] = tampung
 //  }
 //}
 //nilaiSort = nilaiSort -1
 return arrNumber
}


function getTotal(arrNumber) {
  // code di sini
  var angkaMax = arrNumber[0]
  var count = 0

  if (arrNumber.length === 0) {
    return '\'\''
  }
  for (var k = 0; k < arrNumber.length; k++) {
    if (arrNumber[k] === angkaMax) {
      count++
    }
  }
  return 'angka paling besar adalah ' +angkaMax +' dan jumlah kemunculan sebanyak  ' +count +' kali'
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
