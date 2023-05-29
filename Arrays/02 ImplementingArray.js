/**
 * Methods in this array
 * get(index) => to get element of that index
 * push(item) => to push item at last
 * pop() => to remove item from last
 * insert(index,item) => to add new item at that index
 * delete(index) => to remove item at that index
 */
class MyArray{
    constructor(){
        this.length = 0 
        this.data = {}
    }
    get(index)
    {
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item
        this.length++
        return this.length
    }
    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem;
    }
    delete(index){
        const item = this.data[index]
        this.shiftItems(index)
        return item
    }
    shiftItems(index){
        for(let i = index;i<this.length-1;i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
    }
    insert(index,item){
        this.unShiftItem(index,item)
        return this.length;
    }
    unShiftItem(index,item){
        for(let i=this.length;i>index;i--){
            this.data[i] = this.data[i-1]; 
        }
        this.data[index] = item;
        this.length++
    }
}