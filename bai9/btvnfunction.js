
//// bai 6
const tongbinhphuong = (n6) => {
    // let n6 = 3;
    let sum6 = 0;
    if (n6 == 1) {
        sum6 = 1;
    } else if (n6 >= 1) {
        for (let index = 1; index <= n6; index++) {
            sum6 += index * index;
        }
    } else {
        console.log('n la so am');
    }
    console.log('Bai 6:  ' + 'tong binh phuong cua ' + n6 + ' la ' + sum6);
    return sum6;

}
tongbinhphuong(4);

// bai 7
const tongsole = (n7) => {
    // let n7 = 5;
    let sum7 = 0;
    if (n7 >= 0) {
        for (let index = 1; index <= n7; index += 2) {
            sum7 += index;
        }
    } else {
        console.log('so am');
    }
    console.log('Bai 7:  ' + 'tong cac so le tu 1 den ' + n7 + ' la ' + sum7);
    return sum7;
}
tongsole(5);

// bai 8
const checkTaoThanhTuSoLe = (n8) => {
    // let n8 = 1356;
    let str_n8 = '' + n8;
    let flag8 = true;
    // la so le tao thanh
    for (let index = 0; index < str_n8.length; index++) {
        if (str_n8[index] % 2 == 0) {
            flag8 = false;
        }
    }
    return flag8;
}
if (checkTaoThanhTuSoLe(n8=3333)) {
    console.log('Bai 8:  '+'la toan so le tao thanh');
} else {
    console.log('Bai 8:  '+'ko toan so le tao thanh');
}

// bai 9
const checksodoixung = (n9) => {
    // let n9 = 1234234321;
    let b = '' + n9;
    let lengb = b.length;
    let flag9 = true;
    for (let index = 0; index <= lengb / 2 - 1; index++) {
        if (b[index] != b[lengb - index - 1]) {
            flag9 = false;
        }
    }
    return flag9;
}

if (checksodoixung(123424321))
    console.log('Bai 9:  ' + ' la so doi xung');
else
    console.log('Bai 9:  ' + ' khong la so doi xung');

// bai10
const inbangcuuchuong = () => {
    console.log('Bai10:  Bang cuu chuong:');
    for (let index = 2; index <= 9; index++) {
        for (let index2 = 1; index2 <= 10; index2++)
            console.log(index + 'X' + index2 + ' = ' + index * index2);
        console.log('');
    }
}
inbangcuuchuong();
