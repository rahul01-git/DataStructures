let user = {
    age: 53,
    name: 'kylie',
    magic: true,
    scream: function (){
        console.log("wallah");
    }
}

console.log(user.name); //O(1)
user.spell = "abra ka dabra" //O(1)
console.log(user.spell) //O(1)
user.scream() //O(1)