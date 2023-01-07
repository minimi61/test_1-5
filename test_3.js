const factorial = (n) => {
    if (n < 1) {
        return 1
    }
    return n*factorial(n-1)
}

const main_test3 = () => {
     let h3Tag = document.createElement('h3');
    let divTag = document.createElement('div');
    h3Tag.textContent = '3번문제'
    document.body.appendChild(h3Tag);

    let result = factorial(4)
    divTag.innerHTML = result
    document.body.appendChild(divTag);}

main_test3()