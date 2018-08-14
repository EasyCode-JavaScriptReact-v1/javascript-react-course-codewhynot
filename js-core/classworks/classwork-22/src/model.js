class Model {
    constructor (state) {
        this.data = state;
    }
    addToDoItem (newItem) {
        if(!newItem) {
            return
        }
        this.data.push(newItem);
    }
    removeItem (itemToRemove) {
        const itemInData = this.data.indexOf(itemToRemove);
        if(itemInData === -1){
            return
        }
        this.data.splice(itemInData,1)
    }
    updateToDoItem (oldItem, newItem) {
       const itemInData = this.data.indexOf(oldItem);
        if(itemInData === -1){
            return
        }
        this.data.splice(itemInData,1,newItem);
    }
}