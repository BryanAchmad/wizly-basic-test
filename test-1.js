function minMaxSum(arr) {
    arr.sort((a, b) => a - b); // sort the array from smallest to biggest
    let minimumSum = 0;
    let maximumSum = 0
    arr.forEach((num, i) => {
        if (i !== 4) {
            minimumSum += num;
        }
        if (i !== 0) {
            maximumSum += num;
        }
    });
    
    return [minimumSum, maximumSum];
}

console.log(minMaxSum([1, 3, 5, 7, 9]));

function calculateArray(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                sum += arr[j];
            }
        }
        result.push(sum);
    }

    return result;
}

const arrayData = [1, 3, 5, 7, 9];
const result = calculateArray(arrayData);
result.forEach((sum, i) => {
    console.log(`Sum everything except ${arrayData[i]}, the sum is ${sum}`);
});