//let arr = [n][n];
const arr = (n) => {
  return [n][n]  
}

for (let i = 1; i < n-1; i++) {
    for (let j = 1; j < n - 1; j++) {
        if (arr[i][j]) break;
         let cnt = 0;
        if (arr[i - 1][j] >= arr[i][j])
            cnt++;
        if (arr)
        
    //4개의 조건을 다 맞춘 경우 cnt=4
        if (cnt == 4) arr[i][j]++;

    }
}