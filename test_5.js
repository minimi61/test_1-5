//https://onlydev.tistory.com/65`
const initial = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const test5 = (initial) => {
    const result = [];
    let length = initial.length;
    for (let i = 0; i < length; i++) {
        let arr = [];
        for (let j = 0; j < length; j++) {
            let sum = 0;
            if (i - 1 < 0 ||
                i + 1 >= length ||
                j - 1 < 0 ||
                j + 1 >= length) {
                // arr.push(initial[i][j])
                initial[i][j] = initial[i][j]
            }
            else {
                if (initial[i][j] <= initial[i + 1][j] && initial[i][j] >0) {
                   sum ++ 
                }if (initial[i][j] <= initial[i - 1][j]&& initial[i][j] >0) {
                   sum ++ 
                }if (initial[i][j] <= initial[i][j-1]&& initial[i][j] >0) {
                   sum ++ 
                }if (initial[i][j] <= initial[i][j+1]&& initial[i][j] >0) {
                    sum++ 
                }
                
            }
            if (sum == 4) {
                    console.log(i,j,initial[i][j])
                    // arr.push(initial[i][j]+1)
                     initial[i][j] = ++initial[i][j]
            } else {
                // arr.push(initial[i][j])
                    initial[i][j] = initial[i][j]
            }
        }
        // result.push(arr)
    }
    console.log(initial)
}

test5(initial)


//let arr = [n][n];
// const arr = (n) => {
//   return [n][n]
// }

// for (let i = 1; i < n-1; i++) {
//     for (let j = 1; j < n - 1; j++) {
//         if (arr[i][j]) break;
//          let cnt = 0;
//         if (arr[i - 1][j] >= arr[i][j])
//             cnt++;
//         if (arr)
        
//     //4개의 조건을 다 맞춘 경우 cnt=4
//         if (cnt == 4) arr[i][j]++;

//     }
// }

