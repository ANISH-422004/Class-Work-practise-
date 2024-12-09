n = 5

for (let i = 5 ; i>=1 ; i--) {
    let pol= ""
    let number = 1
    for (let j =1 ; j<=i ; j++) {
        pol+= `${number} `
        number++
    }
    console.log(pol)
}

