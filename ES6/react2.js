var funcs = [];
//console.log(funcs);
for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    
    });
    // console.log('Deepak');
    // console.log(funcs);
}

funcs.forEach(function(fun) {
    fun();    
})
//console.log(funcs);