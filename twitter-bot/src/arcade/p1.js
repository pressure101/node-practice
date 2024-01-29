/*
Find the number of pairs that are divisible by k
*/

function solution(arr, k) {
    var sum = 0
    var freq = Array(k).fill(0)

    for(var i = 0; i < arr.length; i++) {
        var rem = arr[i] % k
        if(rem != 0) {
            sum += freq[k-rem]
        } else {
           sum += freq[0]
        }
        freq[rem]++;
    }

    console.log('The sum of pairs is ' + sum)
}


var arr = [2,2,1,7,5,3]
var k = 4

solution(arr, k)