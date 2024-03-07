/*
Modular coding practice

File storage - functionally designed
*/

// global file storage
var fileStorage =  new Set()

// creating operations for testing
var operations = new Array()

// map to handle location operations
var memory = new Map()

// adding operations to array
operations.push(Array("ADD_FILE", "file_1"))
operations.push(Array("ADD_FILE", "file_1"))
operations.push(Array("ADD_FILE", "file_2"))
operations.push(Array("DELETE_FILE", "file_1"))
operations.push(Array("ADD_FILE", "file_2"))
operations.push(Array("DELETE_FILE", "file_1"))
operations.push(Array("ADD_FILE", "file_1"))
operations.push(Array("COPY_FILE", "file_1", "/dir1"))

function manageStorage(operations) {
    for (var i = 0; i < operations.length; i++) {
        if(operations[i][0] == "ADD_FILE" || operations[i][0] == "COPY_FILE") {
            var beforeLength = fileStorage.size
            console.log(beforeLength != fileStorage.add(operations[i][1]).size) // add returns set, so have to check set length for change

        } else {
            console.log(fileStorage.delete(operations[i][1])) // delete returns boolean by contract
        }
    }
}

function manageMemory(operations) {
    console.log('Starting up memory management!\n')
    for(var y = 0; y < operations.length; y++) {
        var operation = operations[y]
        var location  = operation.length == 2 ? 'root' : operation[2]
        var file = operation[1]

        if(operations[y][0] == "ADD_FILE" || operations[y][0] == "COPY_FILE") {
            if(memory.has(location)) {
                var entries = memory.get(location)
                var size = entries.size
                console.log(entries.add(file).size != size)
            } else {
                memory.set(location, new Set([file]))
                console.log(true)
            }
        }
        else { 
            console.log('delete case!')
        }
    }
    console.log("Hey I handle location-based file management!")
}

manageStorage(operations)
manageMemory(operations)

// modular rewrite

// ideas - if-else for each new operation
// object oriented approach - operation interface implemented with each operation type add, delete, copy
// 
/*


public class Operation {
    OperationType operationType;
    String fileName;
    String targetLocation;
}

public enum OperationType {
    ADD,
    DELETE,
    COPY,
}

public static main(String args[]) {
    List<Operation> operations;
    HashMap<String, String> storage;

    for(Operation operation: operations) {
        if(operation.getTargetLocation == null) Operation.setTargetLocation = root;
        List<String> files = storage.get(operation.getTargetLocation)
        
        if(operation.getOperationType == DELETE) {
            if(files.contains(operation.filename)) {
                files.remove(index)
                return true;
            } else {
                return false;
            }
        } else {
            if(!files.contains(operation.fileName)) {
                files.add(operation.fileName)
                return true;
            } else {
                return false;
            }
        }
    }

}



-> will take this a step further and make storage the main object with operations changing its state

*/