function type2(){
console.log(this.iname);
}
var iname="kumar";
var obj={
    iname:"verma",
    type2
}
obj.type2();
type2()