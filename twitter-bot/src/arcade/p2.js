/*
Modular coding practice

File storage - functionally designed
*/

// global file storage
var fileStorage =  new Set()

// creating operations for testing
var operations = new Array()

// adding operations to array
operations.push(Array("ADD_FILE", "file_1"))
operations.push(Array("ADD_FILE", "file_1"))
operations.push(Array("ADD_FILE", "file_2"))
operations.push(Array("DELETE_FILE", "file_1"))
operations.push(Array("ADD_FILE", "file_2"))
operations.push(Array("DELETE_FILE", "file_1"))
operations.push(Array("ADD_FILE", "file_1"))

function manageStorage(operations) {
    for (var i = 0; i < operations.length; i++) {
        console.log(operations[i])
    }
}

manageStorage(operations)