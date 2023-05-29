const string = ['a','b','c','d']

//Time Complexities
//lookup -> O(1)
//push -> O(1)
//insert -> O(n)
//delete -> O(n)

//lookup
// console.log(string[2]) //O(1)

//push
// string.push('e') //O(1)

//pop
// string.pop() //O(1)

//unshift
// string.unshift("x") //O(n) -> here we first add element to first and the loop to shift the index

//shift
// string.shift() //O(n) -> here we first delete element of index O and then looped to arrange the index of array

//splice
string.splice(2,0,"egg") //O(n/2) but we remove any constants so O(n)-> here we went to that index and then add 'egg' and managed the indexes by looping remaining half array so its O(n/2)

console.log(string)