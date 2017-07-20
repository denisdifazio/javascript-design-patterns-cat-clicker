var CatDisplayer = function() {
    //this.catName = document.getElementById("cat-name");
    //this.catCounter = document.getElementById("cat-counter");
    //this.catImage = document.getElementById("cat-image");
};

CatDisplayer.prototype.render = function(cat) {
    this.catName.textContent = cat.name;    
    this.catCounter.textContent = "Clicked: " + cat.clickedCounter; 
    this.catImage.src = cat.image;    
};

CatDisplayer.prototype.renderCounter = function(counter) {
    this.catCounter.textContent = "Clicked: " + counter;
};