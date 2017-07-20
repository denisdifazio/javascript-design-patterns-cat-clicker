var Model = function() {    
    this.catList = [];

     var cat_one = new Cat("Jerry", "images/cat.jpg");
     this.catList.push(cat_one);
     var cat_two = new Cat("Garfield", "images/cat2.jpg");
     this.catList.push(cat_two);
     var cat_three = new Cat("Bob", "images/cat3.jpg");
     this.catList.push(cat_three);
     var cat_four = new Cat("Envy", "images/cat4.jpg");
     this.catList.push(cat_four);
     var cat_five = new Cat("Tedy", "images/cat5.jpg");
     this.catList.push(cat_five);

     this.currentCat = cat_one;
};