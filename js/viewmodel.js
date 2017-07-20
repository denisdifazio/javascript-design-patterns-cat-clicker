var ViewModel = function() { 
  var self = this;

  this.model = new Model();
  this.adminPanel = new AdminPanel();
  this.currentCat = ko.observable(this.model.catList[0]);

  this.catList = ko.observableArray(); 

  for(var i = 0; i < this.model.catList.length; i++) {
    this.catList.push(this.model.catList[i]);
  };

  this.incrementCurrentCatCount = function() {
    self.currentCat().clickedCount(self.currentCat().clickedCount() + 1); 
  };  

  this.getCurrentCatCount = ko.pureComputed(function() {
    return "Clicked: " + self.currentCat().clickedCount();  
  }, self);

  this.setCurrentCat = function(clickedCat) {
    self.currentCat(clickedCat)
  };

  this.showAdminPanel = function() {
    self.adminPanel.show();
  };

  this.hideAdminPanel = function() {
    this.adminPanel.hide();
  };

  this.saveModifiedCat = function() {
    this.adminPanel.save(self.currentCat());
  };
};

ko.applyBindings(new ViewModel());
