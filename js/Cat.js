var Cat = function(name, image) {
    this.name = ko.observable(name);
    this.image = ko.observable(image);
    this.clickedCount = ko.observable(0);   
    this.level = ko.pureComputed(function() {    
      if (this.clickedCount() < 10) {
          return  "Newborn";
      }

      if (this.clickedCount() < 25) {
          return "Amateur";
      }

      if (this.clickedCount() < 50) {
          return "Getting there";
      }

      if (this.clickedCount() < 100) {
          return "Catnight";
      }

      return "God";
      
    }, this); 
};
