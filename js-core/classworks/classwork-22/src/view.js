class View {
    constructor (state) {
        this.elements = {
            addButton: document.querySelector('.controls__add'),
            listItems: document.querySelector('.list'),
            input: document.querySelector('.controls__input'),
        }
        this.render(state)
    }


    render (data) {
        this.elements.listItems.innerHTML = data.reduce((acc,val) => {
            return acc + `<li>${val}</li>`
        },'');
    }
}