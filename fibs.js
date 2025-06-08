function fibs(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        if (arr.length < 2) {
            arr.push(i)
        } else {
            arr.push(arr[i-2] + arr[i-1])
        }
    }
    return arr
}

console.log(fibs(8))

function fibsRec(n) {
    let arr = []
    if (n == 1) {
        arr = [0]
    } else if (n == 2) {
        arr = [0, 1]
    } else {
        arr = [...fibsRec(n-1), fibsRec(n-1).pop() + fibsRec(n-2).pop()]
    }
    return arr
}   

console.log(fibsRec(8))
/*
fibsRec(3) should be [0, 1, 1]

    |-> fibsRec(2) + fibsRec(1) -> 2
    |-> fibsRec(1) + fibsRec(0)- 1
*/
/*
fibsRec3 should return 0, 1, 1
fibsRec2 should return 0, 1
fibsRec1 should return 0
BASE n = 1
return [0]
BASE n = 2
return [0 1]
ELSE 
return 
*/