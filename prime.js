// function checkprime() {
//     let n = +prompt("Nhập số cần kiểm tra: ");
//
//     let i = 2;
//
//     if (n < 2) {
//         document.write('Ko phải SNT');
//         return;
//     }
//     while (Math.sqrt(n) > i) {
//         if (n % i === 0) {
//             document.write('Ko phải SNT')
//             return;
//         }
//         i++;
//     }
//     document.write('Là SNT');
// }

// checkPrime();


function listPrime() {
    let quantity = +prompt("Nhập số các số nguyên tố: ");
    let count = 0;
    let n = 2;

    while (count < quantity) {
        let i = 2;        //khai bao bien
        let flag = true;
        // viet ham check so nguyen to
        while (i < Math.sqrt(n)) {
            if (n % i === 0) {
                flag = false;
                break;
            }
            i++;
        }
        //viet ham in so nguyen to
        if (flag) {
            document.write(n + "<br>");
            count++;
        }
        n++;
    }
    console.log(count);
}

listPrime();