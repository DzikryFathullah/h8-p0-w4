function changeMe(arr) {
  // you can only write your code here!
  var keysHasil = ["firstName", "lastName", "gender", "age"]
  var title = ""

  if (arr.length === 0 ) {
      console.log("\"\"")
  }

  for (var i = 0; i < arr.length; i++) {
    var objHasil = {}
    title = i+1 +". " +arr[i][0] + arr[i][1] +" :"
      for (var j = 0; j < arr[i].length; j++) {
        objHasil[keysHasil[j]] = arr[i][j]
      }
      if (objHasil.age === undefined) {
        objHasil.age = "Invalid Birth year"
    } else {
        objHasil.age = 2018 - objHasil.age
    }
    console.log(title)
    console.log(objHasil)
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
