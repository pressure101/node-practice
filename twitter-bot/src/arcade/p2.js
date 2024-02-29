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
        if(operations[i][0] == "ADD_FILE") {
            var beforeLength = fileStorage.size
            console.log(beforeLength != fileStorage.add(operations[i][1]).size) // add returns set, so have to check set length for change

        } else {
            console.log(fileStorage.delete(operations[i][1])) // delete return boolean by contract
        }
    }
}

manageStorage(operations)