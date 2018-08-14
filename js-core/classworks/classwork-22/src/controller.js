function Controller (model,view) {
    this.model = model;
    this.view = view;
    this.init();
}
Controller.prototype.init = function () {
    this.addHandlerForTasks();
}
Controller.prototype.addTask = function (value, data) {
    if(!value || value === ''){
        return
    }
    this.model.addToDoItem(value);
    this.view.render(data)
}
Controller.prototype.addTaskHandler = function () {
    let input = this.view.elements.input;
    this.addTask(input.value, this.model.data);
    input.value = '';
}
Controller.prototype.addHandlerForTasks = function () {      
    this.view.elements.addButton.addEventListener('click', this.addTaskHandler.bind(this));
}