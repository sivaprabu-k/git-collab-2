const arr = [0,1,2,3,4,5,6,6,4,3];

const maxArr = arr.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, 0);
console.log(maxArr);

const minArr = arr.reduce((acc, curr) => {
    return curr < acc ? curr: acc;
}, 0);
console.log(minArr);


const uniqueElements = [...new Set(arr)];
console.log(uniqueElements);
