function sample(arr, req) {
    arr = arr.sort(() => { return 0.5 - Math.random() });
    let i = 0,
        array = [];
    while (i < req) {
        array.push(arr[i])
        ++i
    }
    return array
}

//example  
let arr = [1, 2, 3, 4, 5];
console.log(sample(arr, 2))   // will return two  random items 