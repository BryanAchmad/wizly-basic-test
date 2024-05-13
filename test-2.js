function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    arr.forEach(num => {
        if (num > 0) {
            positive++;
        } else if (num < 0) {
            negative++;
        } else {
            zero++;
        }
    });
    
    let arrayLength = arr.length;
    
    let positiveRatio = positive / arrayLength;
    let negativeRatio = negative / arrayLength;
    let zeroRatio = zero / arrayLength;
    
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

plusMinus([1,1,0,-1,-1])