const factorial_test4 = (n,acc=1) => {
     if (n === 0 || n === 1) {
         return acc
     }
     return factorial_test4(n-1, n*acc)
    //const cal = (n, acc) => {
    //    return (n === 1 ? acc : factorial(n - 1, n * acc))
   // }
   // return cal(n,1)
}

const main_test4 = () => {
      let h3Tag = document.createElement('h3');
     let divTag = document.createElement('div');
     h3Tag.textContent = '4번문제'
     document.body.appendChild(h3Tag);

    let result = factorial_test4(1000)
    console.log(result)
     divTag.innerHTML = result
     document.body.appendChild(divTag);
}

main_test4()


//https://ko.javascript.info/recursion