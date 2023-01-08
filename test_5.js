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
const result = [];

const test5 = (arr) => {
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        // result.push(arr[i])

        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < 4; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
            
                if (
                    nx >= 0 &&
                    nx < arr.length &&
                    ny >= 0 &&
                    ny < arr.length
                    // &&
                    // arr[nx][ny] >= arr[i][j]
                )
                // {
                //     result[i].push(arr[i][j])
                //     break
                // }
                    
                {
                    if (arr[i][j] == arr[nx + 1][ny]) {
                        sum++
                    } if (arr[i][j] == arr[nx - 1][ny]) {
                        sum++
                    } if (arr[i][j] == arr[nx][ny + 1]) {
                        sum++
                    } if (arr[i][j] == arr[nx][ny - 1]) {
                        sum++
                        // console.log(sum)
                    }
                }
            }
        }
        if (sum === 4) {
            arr[i][j]++
            result[i].push(1)
        }
    }
    console.log(result)
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

