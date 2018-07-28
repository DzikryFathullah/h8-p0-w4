function shoppingTime(memberId, money) {
  // you can only write your code here!
  var cetak = {}
  var balance = 0
  var itemBarang = [
    {namaBarang : 'Sepatu brand Stacattu',  hargaBarang : 1500000},
    {namaBarang : 'Baju brand Zoro',  hargaBarang : 500000}, 
    {namaBarang : 'Baju brand H&N',  hargaBarang : 250000},
    {namaBarang : 'Sweater brand Uniklooh',  hargaBarang : 175000},
    {namaBarang : 'Casing Handphone ',  hargaBarang : 50000}]

if ( memberId === undefined || memberId === '') {
  return 'Mohon maaf, toko X hanya berlaku untuk member saja'
} else if ( money < 50000) {
  return 'Mohon maaf, uang tidak cukup'
} else {
  var sale = []
  for (var i = 0; i < itemBarang.length; i++) {
    if (money >= itemBarang[i].hargaBarang) {
      sale.push(itemBarang[i].namaBarang)
      money = money-itemBarang[i].hargaBarang
    } 
  }
  cetak['memberId'] = memberId
  cetak['money'] = money
  cetak.listPurchased = sale
  //console.log(sale)
  cetak.changeMoney = money
}
return cetak
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
