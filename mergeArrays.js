const mergeTwoArrays = (arr1, arr2) => {
    const result = [];

    let firstIndex = 0;
    let secondIndex = 0;
    while (firstIndex < arr1.length && secondIndex < arr2.length) {
        if (arr1[firstIndex] < arr2[secondIndex])
            result.push(arr1[firstIndex++]);
        else
            result.push(arr2[secondIndex++]);
    }
    while (firstIndex < arr1.length) {
        result.push(arr1[firstIndex++]);
    }

    while (secondIndex < arr2.length) {
        result.push(arr2[secondIndex++]);
    }
    return result;
};

const mergeArrays = (arr) => {
    let index = 0;
    let result = [];
    while (index < arr.length) {
        result = mergeTwoArrays(result, arr[index++]);
    }
    return result;
};

console.log(mergeArrays([[1,6], [1, 2, 10], [9, 14], [10, 36]]))
