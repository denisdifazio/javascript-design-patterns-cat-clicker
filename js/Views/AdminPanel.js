var AdminPanel = function() {
    this.adminButton = document.getElementById("admin-button");
    this.adminButton.addEventListener("click", function() {
        controller.showAdminPanel();
      }, false);

    this.nameInput = document.getElementById("admin-name-input");
    this.imageInput = document.getElementById("admin-image-input");
    this.clickInput = document.getElementById("admin-clicks-input");

    this.cancelButton = document.getElementById("admin-cancel-button");
    this.cancelButton.addEventListener("click", function() {
        controller.cancelAdminPanel();
    }, false);

    this.saveButton = document.getElementById("admin-save-button");
    this.saveButton.addEventListener("click", function() {
        controller.saveAdminPanel();
    }, false);

    this.visible  = false;
};

AdminPanel.prototype.show = function(cat) {
    document.getElementById("admin-panel").style.display = 'inline';
    this.visible = true;
    this.render(cat);
};

AdminPanel.prototype.hide = function(cat) {
    document.getElementById("admin-panel").style.display = 'none';
    this.visible = false;
};

AdminPanel.prototype.render = function(cat) {
    if (this.visible) {
      this.nameInput.value = cat.name;
      this.imageInput.value = cat.image;
      this.clickInput.value = cat.clickedCounter;
    }        
};

AdminPanel.prototype.loadCatClicksCount = function(cat) {
    if (this.visible) {
        this.clickInput.value = cat.clickedCounter;
    }        
};

AdminPanel.prototype.save = function(cat) {
    cat.clickedCounter = this.clickInput.value;   
    cat.name = this.nameInput.value;     
    cat.image = this.imageInput.value;       
};