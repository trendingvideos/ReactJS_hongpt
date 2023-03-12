const A = [1, 2, 3, 4, 3, 2, 3, 5, 6, 7];
const C = [];
var checkLap = true;
for (let i = 0; i < A.length; i++) {
    for (let j = i+1; j < A.length; j++) {
        checkLap = true;
        if (A[i] == A[j]) {
            checkLap = false;
            break;
        }
    }
    if (checkLap) {
        C.push(A[i]);
    }

}
console.log(C);

const removeDup = function() {
    const arr = [1, 3, 3, 9, 9, 9,6, 6];
    const result = [];

    result[0] = arr[0];
    var point = 1; //đánh dấu độ dài mảng kq
    for (let index = 1; index < arr.length; index++) {
        for (let rr = point - 1; rr < arr.length; rr++) {
            console.log('i, rr', index, rr);
            if (arr[index] == result[rr]) {
                console.log('bi trung ', arr[index], index, rr);
                break;
            }
            result[point] = arr[index];
            console.log('them arr[index] point', arr[index], point);
            point++;
            console.log(result);
        }
    }
    // for(let index = 0; index < point; index ++){
    //     console.log(result[index] + " ");
    // }
    console.log(result);

}

// removeDup();
const arrA = [1, 2, 3, 4, 5];
const arrB = [5, 6, 7, 3, 4, 3, 4, 4];
for (let i = 0; i< arrB.length; i++) {
    var trung = false;
    for (let j = 0; j < arrA.length; j++) {
        if (arrB[i] == arrA[j]) {
            console.log('bi trung');
            trung = true;
            break;
        }
    }
    if (!trung) {
        arrA.push(arrB[i]);
    }
}
console.log(arrA);