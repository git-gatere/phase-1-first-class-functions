function callback(){
    'I have been called!'
}
function receivesAFunction(callback){
    return console.log(callback());
}
function returnsANamedFunction(){
    return function named() {
        console.log('I am named!');
    }
}
function returnsAnAnonymousFunction (){
    return function () {
        console.log('I am unnamed');
    }

}