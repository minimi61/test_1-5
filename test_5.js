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
    let length = initial.length;
    let result = 0;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            let sum = 0;
            if (i - 1 < 0 ||
                i + 1 >= length ||
                j - 1 < 0 ||
                j + 1 >= length) {
                continue
            }
            if (initial[i][j] <= initial[i - 1][j] &&
                    initial[i][j] <= initial[i + 1][j] 
                    &&
                    initial[i][j] <= initial[i][j - 1] &&
                    initial[i][j] <= initial[i][j + 1] && initial[i][j] > 0) {
                    sum = 4;
                }
            if (sum == 4) {
                initial[i][j] = ++initial[i][j]
                 result += initial[i][j]
            }
        }
    }
     let h3Tag = document.createElement('h3');
     let divTag = document.createElement('div');
     h3Tag.textContent = '5번문제'
    document.body.appendChild(h3Tag);
    
     divTag.innerHTML = result
     document.body.appendChild(divTag);
}

test5(initial)