var CatList = function() {
    this.catListHTML = document.createElement("ul");
    document.getElementById('cat-list').appendChild(this.catListHTML);
};

CatList.prototype.addCat = function(cat) {
    var catItem = document.createElement("li");
    catItem.textContent = cat.name;

    catItem.addEventListener("click", function () {
        controller.setCurrentCat(cat);
    }, false); 
    
    this.catListHTML.appendChild(catItem);    
};

CatList.prototype.clear = function() {
    this.catListHTML.innerHTML = '';
};