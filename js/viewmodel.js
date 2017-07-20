var ViewModel = function() {  
  this.model = new Model();
  this.catName = ko.observable(this.model.currentCat.name);
  this.clickCount = ko.observable(this.model.currentCat.clicked);
  this.catImage = ko.observable(this.model.currentCat.image);
  this.catLevel = ko.observable(this.model.currentCat.level);
  this.catList = new CatList();
  this.catDisplayer = new CatDisplayer();
  this.adminPanel = new AdminPanel();

  this.incrementCurrentCatCount = function() {
    this.clickCount(this.clickCount() + 1); 
    this.incrementCurrentCatLevel();
  };

  this.incrementCurrentCatLevel = function() {
    switch(this.clickCount()) {
      case 10:
        this.catLevel("Amateur");
        break;
      case 25:
        this.catLevel("Getting there");
        break;
      case 50:
        this.catLevel("Catnight");
        break;
      case 100:
        this.catLevel("God");
        break;
    };
  };

  this.getCurrentCatCount = ko.pureComputed(function() {
    return "Clicked: " + this.clickCount();  
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
