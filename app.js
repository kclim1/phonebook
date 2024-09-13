const phoneBook = require('./phonebook')
const mergeSort = require('./mergesort')
const binarySearch = require('./binarysearch')

const book = new phoneBook()

//  sample data
// book.addPerson('John Doe', 15551234, 'john.doe@example.com', 30);
// book.addPerson('Jane Smith', 155556781, 'jane.smith@example.com', 25);
// book.addPerson('Alice Johnson', 155512341, 'alice.johnson@example.com', 20);

// entries before sorting
// console.log('Before sorting names:', book.nameArray);

// entries after sorting
// console.log('sortedNames' , mergeSort(book.nameArray))


// sample update - both map and array are updated
// book.updatePerson(15551234,"jonny brones",'test@gmail.com',20)
// console.log(book.entries.get(15551234))
// console.log('updated',book.entries)
// console.log('updated array ', book.numberArray)

// deleting an entry
// book.deletePerson(15551234)
// console.log('deleted',book.entries)
// console.log('deleted', book.numberArray)

// sorting the array using merge sort
// const sortedNumbers = mergeSort(book.numberArray)
// console.log('sorted numbers',mergeSort(book.numberArray))
// console.log('target number',binarySearch(book.numberArray , 155556781 ))


//searching for a single key 
// const searchNumber = 155512341;
// const result = binarySearch(sortedNumbers, searchNumber, book.entries);
// console.log('Search result for number', searchNumber, ':', result);
// console.log('single search',book.entries.get(15551234));
