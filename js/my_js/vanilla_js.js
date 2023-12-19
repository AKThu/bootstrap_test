function add1000() {
    let result = 0;
    
    for(let i=0; i<1000; i++) {
        result += i;
    }
    return result;
}

function add1000later() {
    return new Promise( (resolve, reject) => {
        let result = add1000();

        if(result) resolve(result);
        else reject();
    })
}

console.log("some processes")
add1000later()
    .then( result => "$" + result)
    .then( result => console.log(result) )
    .catch( () => console.log("Something wrong!"))
console.log("more processes")

//async and await
async function add1000later_2() {
    let result = await add1000()
    console.log(result)
}