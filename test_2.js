const calculator = {
    count : 0,
    add(n) {
        this.count += n
        return this
    },
    substract(n) {
        this.count -= n
        return this
    }
}

const main = () => {
    let h3Tag = document.createElement('h3');
    let divTag = document.createElement('div');
    h3Tag.textContent = '2번문제'
    document.body.appendChild(h3Tag);

    let result = calculator.add(4).add(5).substract(3)
    // console.log(result.count)
    // document.write("<h3>2번문제</h3></br>"+result.count)
    divTag.innerHTML = result.count
    document.body.appendChild(divTag);

}

main()