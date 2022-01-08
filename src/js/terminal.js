let a = 'name name name   sec sec   yes yes yes yes';
let obj = {
    'name': 1,
    'sec': 115,
    'yes': 28
};


let e = a.split('   ').map(subArr => {
    return subArr.split(' ');
})
.reduce((acum, word) => {
    console.log(acum.length);
    
    for (let key in obj) {
        if(key == word) {
            word = obj[key];
        }
    }

    if (acum) {
        acum += ' ';
    }
    return acum + word;
}, '');

console.log(typeof e);