var Controller = function() {
    this.model = new Model();
    this.catList = new CatList();
    this.catDisplayer = new CatDisplayer();
    this.adminPanel = new AdminPanel();
};

Controller.prototype.init = function() {
    this.listRender();
    this.displayRender();
};

Controller.prototype.listRender = function() {
    this.catList.clear();

    for(var i = 0; i < this.model.catList.length; i++) {
        var cat = this.model.catList[i];
        this.catList.addCat(cat);
    }
};

Controller.prototype.displayRender = function() {
    this.model.currentCat = this.model.catList[0];
    this.catDisplayer.render(this.model.currentCat);
};

Controller.prototype.setCurrentCat = function(cat) {
    this.model.currentCat = cat;
    this.catDisplayer.render(cat);
    this.adminPanel.render(cat);
};

Controller.prototype.incrementCounter = function() {
    this.model.currentCat.clickedCounter++;
    this.catDisplayer.renderCounter(this.model.currentCat.clickedCounter);
    this.adminPanel.loadCatClicksCount(this.model.currentCat);
};

Controller.prototype.showAdminPanel = function() {
    this.adminPanel.show(this.model.currentCat);    
};

Controller.prototype.cancelAdminPanel = function() {
    this.adminPanel.hide();
};

Controller.prototype.saveAdminPanel = function() {
    this.adminPanel.save(this.model.currentCat);

    this.catDisplayer.render(this.model.currentCat);
    this.adminPanel.render(this.model.currentCat);
    this.listRender();
};
