/*
Viết 3 methods myMap, myFilter, myReduce của Array 
sao cho công dụng và cách dùng giống với map, filter, reduce 
(sử dụng prototype của Array, this trong JS)
 */

const array = ['js', 'php', 'css'];

/* a, Viết hàm myMap */

Array.prototype.myMap = function (callback) {
  let length = this.length;
  let output = [];

  for (let i = 0; i < length; i++) {
    let result = callback(this[i], i); // Trả về mảng và chỉ mục
    output.push(result);
  }
  return output;
};

const ex = array.myMap(function (array) {
  return `Hoc ${array}`;
});
console.log(ex);

/* b, Viết hàm myFilter */

Array.prototype.myFilter = function (callback) {
  let length = this.length;
  let output = [];

  for (let i = 0; i < length; i++) {
    let result = callback(this[i], i);
    if (result === true) {
      output.push(this[i]);
    }
  }
  return output;
};

/* b, Viết hàm myReduce */

Array.prototype.myReduce = function (callback, initValue) {
  let length = this.length;
  let init = 0;

  for (let i = 0; i < length; i++) {
    let result = callback(init, this[i]);
    init = result;
  }
  return init;
};

/*
1. Trả về 1 mảng gồm các phần tử giống nhau trong 2 mảng
VD: array1 = [1,2,3,4,5,6];
array2 = [3,4,8,9,12];
	=> [3,4]
 */

const ar1 = [1, 2, 3, 4, 5, 6];
const ar2 = [3, 4, 8, 9, 12];

const arrResult = [];
const ar3 = [];
//c1
ar1.forEach(function (a1) {
  ar2.forEach(function (a2) {
    if (a1 === a2) arrResult.push(a1);
  });
});

console.log('arrResult', arrResult);

//c2
for (let i of ar2) {
  for (let j of ar1) {
    if (i === j) {
      ar3.push(i);
    }
  }
}

console.log('ar3', ar3);

/*
2. tìm 2 phần tử có tổng lớn nhất trong 1 mảng
VD: [1,7,9,2,5,3,8] => [9,8]
 */

//c1
const arr1 = [1, 7, 9, 2, 5, 3, 8];

arr1.sort(function (a, b) {
  return a - b;
}); // Sap xep mot mang theo thư tự tăng dần

const tong = [];
tong.push(arr1[arr1.length - 1], arr1[arr1.length - 2]);
console.log('tong', tong);

//c2

let arr2 = [];
const max1 = arr1.reduce(function (max, num) {
  return max > num ? max : num;
});

arr2 = arr1.filter(function (value) {
  return value < max1;
});

const max2 = arr2.reduce(function (max, num) {
  return max > num ? max : num;
});

let arrResult2 = [];
arrResult2.push(max1, max2);

// console.log('max1', max1)
// console.log('value', value)
// console.log('arr2',arr2)
// console.log('max2', max2)
console.log('arrResult', arrResult2);

/* 
3. Tìm các cặp phần tử có tổng bằng 1 số cho trước
VD: [1,7,9,2,5,3,8]; sum = 10   => [1,9] ; [7,3]; [2,8]
*/

const arr = [1, 7, 9, 2, 5, 3, 8];
/* 
Mình chưa biết làm bài tập này mình mong bạn hướng dẫn
*/

/*
4. Lấy ra 1 mảng mới từ mảng cho trước sao cho các 
phần tử chỉ xuất hiện 1 lần (sử dụng Set)
VD: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]
 */

const a = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];
//c1
function unique(arr) {
  return Array.from(new Set(arr));
}
console.log(unique(a));
//c2
const b = a.sort(function (a, b) {
  return a - b;
});
console.log('b', b);

const c = b.filter(function (item, index) {
  return b.indexOf(item) === index;
});
// trả về vị trí đầu tiên của giá trị được tìm thấy
console.log('c', c);

/* 5. Lấy ra 1 mảng mới gồm các phần tử trùng nhau trong 2 mảng, 
mỗi phần tử xuất hiện đúng 1 lần ở mảng mới
const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 8,8];
=> [3,5,9]
*/
const a1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const a2 = [3, 5, 9, 10, 8, 8];
let a3 = [];

function unique(arr) {
  return Array.from(new Set(arr));
}
console.log(unique(a1));
console.log(unique(a2));

a1.forEach(function (item1) {
  a2.forEach(function (item2) {
    if (item1 === item2) arrResult.push(a3);
  });
});

const a4 = a3.filter(function (item, index) {
  return a3.indexOf(item) === index;
});

console.log('arr3', a3);
console.log('arr4', a4);

/*
6. Từ ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'] 
trả về object {'face': 2, 'zalo': 3, 'gmail':1} 
*/
const MXH = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'];
let result;

function count_element_in_array(array, x) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === x)
      //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
      count++;
  }
  result = (x + ':' + count).toString();
  console.log(result);
}

count_element_in_array(MXH, 'zalo');
count_element_in_array(MXH, 'face');
count_element_in_array(MXH, 'gmail');

/* Bài số 6 mình mới chỉ đếm 
được tầm só xuất hiện của các phần tử trong mảng mình 
chưa hiểu cách tạo thành  object như đề bài 
Mình mong bạn hướng dẫn */

/* 
7. Từ [{ make: 'audi', model: 'r8', year: '2012' }, 
       { make: 'audi', model: 'rs5', year: '2013' }, 
       { make: 'ford', model: 'mustang', year: '2012' }, 
       { make: 'ford', model: 'fusion', year: '2015' }, 
       { make: 'kia', model: 'optima', year: '2012' }]

Trả về {
  "audi": [
    {
      "make": "audi",
      "model": "r8",
      "year": "2012"
    },
    {
      "make": "audi",
      "model": "rs5",
      "year": "2013"
    }
  ],
  "ford": [
    {
      "make": "ford",
      "model": "mustang",
      "year": "2012"
    },
    {
      "make": "ford",
      "model": "fusion",
      "year": "2015"
    }
  ],
  "kia": [
    {
      "make": "kia",
      "model": "optima",
      "year": "2012"
    }
  ]
}
*/

const autos = [
  { make: 'audi', model: 'r8', year: '2012' },
  { make: 'audi', model: 'rs5', year: '2013' },
  { make: 'ford', model: 'mustang', year: '2012' },
  { make: 'ford', model: 'fusion', year: '2015' },
  { make: 'kia', model: 'optima', year: '2012' },
];

function groupBy(array, property) {
  return array.reduce(function (accumulator, obj) {
    let key = obj[property];
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(obj);
    return accumulator;
  }, {});
}

let groupedAutos = groupBy(autos, 'make');
console.log(groupedAutos);

/*
8. Cho 1 object như sau: const order = {
  cart: [
    { id: 1, name: "ao dai", amount: 5, price: 100000 },
    { id: 2, name: "ao coc", amount: 2, price: 200000 },
    { id: 3, name: "quan dai", amount: 3, price: 150000 },
    { id: 4, name: "quan coc", amount: 4, price: 130000 },
  ],
  total_money: 0,
  total_amount: 0,
};

Yêu cầu: Chỉ dùng 1 lần reduce để lấy được giá trị cho total_money = 1870000  và total_amount = 14 (sử dụng reduce với giá trị khởi tạo là 1 object)

*/

const order = {
  cart: [
    { id: 1, name: 'ao dai', amount: 5, price: 100000 },
    { id: 2, name: 'ao coc', amount: 2, price: 200000 },
    { id: 3, name: 'quan dai', amount: 3, price: 150000 },
    { id: 4, name: 'quan coc', amount: 4, price: 130000 },
  ],
  total_money: 0,
  total_amount: 0,
};

const cart = order.cart;
// console.log(cart)

const total = cart.reduce(function (amount, currentAmount) {
  let total_amount = amount + currentAmount.amount;
  let total_money = amount + currentAmount.amount * currentAmount.price;
  return total_money;
}, 0);
console.log(total);
