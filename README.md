# Phonebook

## Overview

The Phone Book Application is a console-based tool for managing contact information. It allows users to add, update, delete, and search for contacts. Each contact entry includes details such as name, phone number, and any additional relevant information. The application supports sorting contacts based on different criteria such as name or phone number.

## Usage
- **Clone:** Simply git clone SSH and run the app via console.log statements. 

### Code Explanation

#### Creating a New PhoneBook Instance

```javascript
const book = new phoneBook();
```
#### Adding Sample Data

```javascript
book.addPerson('John Doe', 15551234, 'john.doe@example.com', 30);
book.addPerson('Jane Smith', 155556781, 'jane.smith@example.com', 25);
book.addPerson('Alice Johnson', 155512341, 'alice.johnson@example.com', 20);
```
#### Displaying Names Before Sorting

```javascript
console.log('Before sorting names:', book.nameArray);
```
#### Sorting Names and Displaying Results

```javascript
console.log('sortedNames', mergeSort(book.nameArray));
```
#### Updating an Entry and Displaying Results - both map and array

```javascript
book.updatePerson(15551234, "jonny brones", 'test@gmail.com', 20);
console.log(book.entries.get(15551234));
console.log('updated', book.entries);
console.log('updated array', book.numberArray);
```
#### Deleting an Entry, Sorting, and Searching

```javascript
book.deletePerson(15551234);
console.log('deleted', book.entries);
console.log('deleted', book.numberArray);

const sortedNumbers = mergeSort(book.numberArray);
console.log('sorted numbers', sortedNumbers);
console.log('target number', binarySearch(book.numberArray, 155556781));

const searchNumber = 155512341;
const result = binarySearch(sortedNumbers, searchNumber, book.entries);
console.log('Search result for number', searchNumber, ':', result);

console.log('map entry', book.entries.get(15551234));
```

## Features

- **Add Contact:** Allows users to create new contact entries.
- **Update Contact:** Enables users to modify details of existing contacts.
- **Delete Contact:** Permits users to remove contacts from the phone book.
- **Search Contacts:** Provides functionality to find contacts by name or phone number.
- **Sort Contacts:** Supports sorting of contacts based on name, phone number, or other criteria.
- **Limitation :** Please DO NOT enter the phone number in as a string. Only as a number and do not start with the number 0. Do note that some of these problems can be easily overcome if this was a proper full stack project where I can implement form validations and sanitation. However, the main objective of this project is to implement sorting algoithms and data structures thus the lack of supporting features. 

## Data Structures
  - **Array:** Used for storing and iterating through contacts.
  - **Map:** Used for fast lookup of contacts by phone number.

# Data Structure Comparison

## Hash Maps

### Pros
- **Fast Lookups**: Average-case time complexity for lookups, insertions, and deletions is O(1) due to hashing.
- **Direct Access**: Ideal for scenarios where you need to access elements directly using unique keys (e.g., phone numbers).
- **Dynamic Size**: Can handle dynamic and large datasets efficiently.

### Cons
- **No Sorting**: Hash maps do not maintain any order. Sorting keys or values requires additional steps.
- **Memory Usage**: May use more memory due to hash table overhead.
- **No Prefix Matching**: Cannot perform prefix searches or partial matches.

### Time Complexity
- **Lookup**: \(O(1)\) average case, \(O(n)\) worst case (in case of hash collisions).
- **Insertion**: \(O(1)\) average case, \(O(n)\) worst case.
- **Deletion**: \(O(1)\) average case, \(O(n)\) worst case.

## Binary Search Trees (BSTs)

### Pros
- **Sorted Data**: Keys are stored in a sorted manner, which allows in-order traversal to retrieve sorted data.
- **Efficient Range Queries**: Can efficiently handle range queries and ordered data operations.

### Cons
- **Time Complexity Variance**: Performance depends on the tree’s balance. In the worst case (unbalanced tree), operations can degrade to O(n).

## Tries

### Pros
- **Prefix Searches**: Efficiently handles prefix-based searches and can provide suggestions or autocomplete functionality.
- **Prefix Matching**: Can find all entries with a common prefix.

### Cons
- **Memory Usage**: Can be memory-intensive, especially for large datasets with many keys.
- **Complexity**: More complex to implement and manage compared to hash maps and BSTs.

### Time Complexity
- **Lookup**: O(m), where (m) is the length of the key (or prefix length).
- **Insertion**: O(m), where (m) is the length of the key.
- **Deletion**: O(m), where (m) is the length of the key.
---
## Reasoning
 #### The main reason for choosing a hash map over a trie or a BST is its O(1) average time complexity for operations like insertion, deletion, and lookup, combined with its ability to handle unique keys efficiently. While tries and BSTs offer advantages such as natural sorting and support for prefix searches, the hash map's constant-time performance and simplicity make it a more suitable choice for scenarios where quick access to data is critical. The ability to store unique keys and perform operations in constant time outweighs the benefits of inherent sorting provided by BSTs and the prefix search capability of tries. Also, I decided to go with using phone number as unique key instead of name as there may be multiple John Doe in this world. The phone number will serve as a unique identifier for all. 
 ---








