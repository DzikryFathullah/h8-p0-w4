function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  
  var keys = ['product', 'price', 'leftOver',]

  if (shoppers.length === 0) {
    return []
  }
  
  // ubah menjadi objek dalam array
  for (var i = 0; i < listBarang.length; i++) {
    var item = {}
      for (var j = 0; j < listBarang[i].length; j++) {
        item[keys[j]] = listBarang[i][j]
      }
      listBarang.splice(i,1,item)
  }
  // deklarasi bentuk laporan
  var report = []
  
  // lakukan scanning listBarang
  for (var k = 0; k < listBarang.length; k++) {
    var itemReport = {product : '', shoppers : [], leftOver : 0 , totalProfit : 0}
    itemReport.product = listBarang[k].product
    itemReport.leftOver = listBarang[k].leftOver
    
    // lakukan scanning product dan stock pada listBarang vs shopper 
    for (var m =0; m < shoppers.length; m++) {
      if (listBarang[k].product === shoppers[m].product && itemReport.leftOver >= shoppers[m].amount) {
            itemReport.shoppers.push(shoppers[m].name)
            itemReport.leftOver = itemReport.leftOver - shoppers[m].amount
            itemReport.totalProfit = (listBarang[k].leftOver - itemReport.leftOver ) * listBarang[k].price
          }
      }
      report.push(itemReport)
    }
  return report
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
