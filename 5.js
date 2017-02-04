function Cat(name,age){
    this.name = name;
    this.age = age;
}

Cat.prototype.say = function(){
    console.log('miao');
};

var cat1 = new Cat('猫1',5);
var cat2 = new Cat('猫2',20);


//缺点
//假如这个世界上有很多种类的猫，比如hello kitty,jiafeimao,每种猫除了共同的属性和行为之外，还有自己独特的魅力