(function () {
    const globalState = [];
    const model = new Model(globalState);
    const view = new View(globalState);
    const controller = new Controller(model,view);
})()