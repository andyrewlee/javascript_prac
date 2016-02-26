Array.prototype.myForEach = function(callback) {
  for(var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myFilter = function(callback) {
  var output = [];
  this.myForEach(function(x) {
    if(callback(x) === true) { output.push(x); }
  });
  return output;
};

Array.prototype.myIndexOf = function(target) {
  for(var i = 0; i < this.length; i++) {
    if(this[i] === target) { return i; }
  }
  return -1;
};

// [1,2,3].myForEach(function(x) {
//   console.log(x + 1);
// });
// 
// var greaterThanTwo = [1,2,3,4].myFilter(function(x) {
//   return x > 2
// });
// 
// console.log(greaterThanTwo);
// console.log([1,2,3,4].myIndexOf(2));
// console.log([1,2,3,4].myIndexOf(8));

Object.prototype.myForEach = function(callback) {
  for(key in this) {
    if(this.hasOwnProperty(key)) {
      callback(key, this[key]);
    }
  }
}

Object.prototype.myFilter = function(callback) {
  var output = {};
  this.myForEach(function(key, value) {
    if(callback(value) === true) { output[key] = value }
  });
  return output;
};

Object.prototype.myKeyOf = function(target) {
  var k;
  this.myForEach(function(key, value) {
    if(value === target) { k = key; }
  });
  return k || -1;
};

var myObj = {kobe: 24, mj: 23, tmac: 1};

// myObj.myForEach(function(key, value) {
//   console.log('Key', key);
//   console.log('Value', value);
// });

// var greaterThanTwo = myObj.myFilter(function(value) {
//   return value > 2;
// });

// console.log(greaterThanTwo);
// console.log(myObj.myKeyOf(24));
// console.log(myObj.myKeyOf(8));
