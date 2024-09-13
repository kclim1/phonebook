const phonebook = require('./phonebook')
const mergeSort = require('./mergesort')


function binarySearch(array, target, entries) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return entries.get(target)
        } else if (array[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    console.log('number does not exist')
    return
}



module.exports = binarySearch