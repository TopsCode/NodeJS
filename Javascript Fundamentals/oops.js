// class object constructor
class emp{
    //default constructor
    constructor(){
        this.a=10
        this.data = {
            id:101,
            name:"test",
            age:25
        }
        this.abc=()=>{
            console.log("abc function called..");             
        }
    }
    abcd(){
        console.log("abcd dfg function called..");             
    }
}
let obj = new emp()
document.write('<br> A is '+obj.a)
document.write('<br> Object is '+obj.data.name)
document.write('<br> ABc function called ')
obj.abc()
obj.abcd()
