function secondHighest(arr) {
    if(arr.length < 2) {
        alert(-Infinity);
        return -Infinity;
    }

    let max1 = -Infinity;
    let max2 = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if(arr[i] > max2 && arr[i] != max1) {
            max2 = arr[i];
        }
    }

    if(max2 === -Infinity) {
        alert(-Infinity);
        return -Infinity;
    } else {
        alert(max2);
        return max2;
    }
}