const tong = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log('Start cong')
        setTimeout(() => {
            const sum = a + b;
            console.log('cong done', sum);
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject('cong: ban phai nhap number');
            }
            resolve(sum);
        }, 3000);
    })
}

const nhan = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log('Start Nhan')
        setTimeout(() => {
            const mul = a * b;
            console.log('cong done', mul);
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject('Nhan: ban phai nhap number');
            }
            resolve(mul);
        }, 2000);
    })
}

const chia = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log('Start chia')
        setTimeout(() => {
            const div = a / b;
            console.log('chia done', div);
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject('chia: ban phai nhap number');
            }
            resolve(div);
        }, 1000);
    })
}

const ketqua = async (a, b, h) => {
    try {
        const resultTong = await tong(a, b);
        const resultNhan = await nhan(resultTong, h);
        const done = await chia (resultNhan, 2);

        console.log('done', done);
    } catch (error) {
        console.log("bi loi~~~~~~")
    }
};
// (a+b) *h * (c/d)
ketqua(5, 7, 2);