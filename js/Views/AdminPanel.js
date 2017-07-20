var AdminPanel = function() {
    this.clickInput = document.getElementById("cat-input-clicks");
    this.nameInput = document.getElementById("cat-input-name");
    this.imageInput = document.getElementById("cat-input-image");
};

AdminPanel.prototype.show = function() {
    document.getElementById("admin-panel").style.display = 'inline';
};

AdminPanel.prototype.hide = function() {
    document.getElementById("admin-panel").style.display = 'none';
};

AdminPanel.prototype.save = function(cat) {
    cat.clickedCount(this.clickInput.value);   
    cat.name(this.nameInput.value);     
    cat.image(this.imageInput.value);       
};