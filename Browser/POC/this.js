// function type2(){
// console.log(this.iname);
// }
// var iname="kumar";
// var obj={
//     iname:"verma",
//     type2
// }
// obj.type2();
// type2()

//3
var food="Piza"
var obj={
    food:'Pasta',
    eat(){
        console.log("i am eating "+this.food )
    }
}
var fo=obj.eat;
fo();