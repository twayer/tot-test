var arr = [{a: 1}, {a: 2}];
let index = arr.findIndex(function(item){
    return item == {a: 2}
});
console.log(index);