'use strict';

 // 1) Обычная функция: this = window (!use strict), this = indefined (use strict).

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return this.a + this.b;
    }
    console.log(sum());
  }
//   showThis(2, 5);

 // 2) Метод обьекта: this = этот обьект.

 const obj = {
    a: 20,
    b: 15,
    sum: function() {
       function shout() {
        console.log(this);
       }
       shout();
    }
 }; 

//  obj.sum();

// 3) Конструкторы и классы; this - новый экземпляр обьекта.

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello! ' + this.name);
    };
}

// let ivan = new User('Ivan', 23);

// 4) Ручное присвоение: call, apply, bind.

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

// sayName.call(user, ' Smith');
// sayName.apply(user, ['Smith']);


function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(30));