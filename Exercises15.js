function changeVocals (str) {
  //code di sini
  var alph = 'abcdefghijklmnopqrstuvwxyz'
  var alphUpper = alph.toUpperCase()
  var strChangeVocals = ''
  for (var i = 0; i < str.length; i++) {
      if (str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o' ) {
        var a = 0  
        a = alph.indexOf(str[i])
        strChangeVocals += alph[a+1]
      } else if (str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || str[i] === 'E' || str[i] === 'O' ) {
          var b = 0
          b = alphUpper.indexOf(str[i])
          strChangeVocals += alphUpper[b+1]
      } else {
          strChangeVocals += str[i]
      }
  }
  return strChangeVocals
}

function reverseWord (str) {
  //code di sini
  if (str.length === 1) {
      return str[0]
  }

  return str[str.length-1] + reverseWord(str.slice(0,str.length-1))
}


function setLowerUpperCase (str) {
  //code di sini
  var hurufKecil = str.toLowerCase()
  var hurufBesar = str.toUpperCase()
  var lowUp = ''

  for (var j = 0; j < str.length; j++) {
      if (str[j] === hurufKecil[j]) {
          lowUp += hurufBesar[j]
      } else {
          lowUp += hurufKecil[j]
      }
  }
  return lowUp
}

function removeSpaces (str) {
  //code di sini
  var noSpace = ''

  for (var k = 0; k < str.length; k++) {
      if (str[k] === ' '){
          noSpace += ''
      } else {
          noSpace += str[k]
      }
  }
  return noSpace
}

function passwordGenerator (name) {
  //code di sini
  var ubahHuruf = changeVocals(name)
  var balikHuruf = reverseWord(ubahHuruf)
  var besarKecil = setLowerUpperCase(balikHuruf)
  var hasil = removeSpaces(besarKecil)

  if (name.length < 5) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }   
  return hasil
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
