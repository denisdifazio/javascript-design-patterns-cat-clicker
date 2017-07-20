var ViewModel = function() {
  this.model = new Model();
  this.catList = new CatList();
  this.catDisplayer = new CatDisplayer();
  this.adminPanel = new AdminPanel();

  this.getCurrentCatName = ko.pureComputed(function() {
    return this.model.currentCat.name;
  }, this);

  this.init = function() {
    this.listRender();
    this.displayRender();
  };

  this.listRender = function() {
    this.catList.clear();

    for (var i = 0; i < this.model.catList.length; i++) {
      var cat = this.model.catList[i];
      this.catList.addCat(cat);
    }
  };

  this.displayRender = function() {
    this.model.currentCat = this.model.catList[0];
    this.catDisplayer.render(this.model.currentCat);
  };

  this.setCurrentCat = function(cat) {
    this.model.currentCat = cat;
    this.catDisplayer.render(cat);
    this.adminPanel.render(cat);
  };

  this.incrementCounter = function() {
    this.model.currentCat.clickedCounter++;
    this.catDisplayer.renderCounter(this.model.currentCat.clickedCounter);
    this.adminPanel.loadCatClicksCount(this.model.currentCat);
  };

  this.showAdminPanel = function() {
    this.adminPanel.show(this.model.currentCat);
  };

  this.cancelAdminPanel = function() {
    this.adminPanel.hide();
  };

  this.saveAdminPanel = function() {
    this.adminPanel.save(this.model.currentCat);

    this.catDisplayer.render(this.model.currentCat);
    this.adminPanel.render(this.model.currentCat);
    this.listRender();
  };
};

ko.applyBindings(new ViewModel());
