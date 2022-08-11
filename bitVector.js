const NUMBER_SIZE = 32;

const createVector = (length) => {

    const elementCount = Math.ceil(length / NUMBER_SIZE);
    const vector = new Array(elementCount);

    for (let ix = 0; ix < elementCount; ix++)
        vector[ix] = 0;

    return vector;
};

const addElement = (vector, index) => {

    const vectorPart = Math.floor(index / NUMBER_SIZE);
    const elementIndex = index % NUMBER_SIZE;

    vector[vectorPart] = vector[vectorPart] | (1 << elementIndex);
};

const removeElement = (vector, index) => {

    const vectorPart = Math.floor(index / NUMBER_SIZE);
    const elementIndex = index % NUMBER_SIZE;

    vector[vectorPart] = vector[vectorPart] & ~(1 << elementIndex);
};

const getElement = (vector, index) => {

    const vectorPart = Math.floor(index / NUMBER_SIZE);
    const elementIndex = index % NUMBER_SIZE;

    const value = vector[vectorPart] & (1 << elementIndex);
    return value !== 0;
};

let vector = createVector(64);

addElement(vector, 5);
addElement(vector, 6);
removeElement(vector, 5);
console.log(getElement(vector, 5));
