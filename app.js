let x=1;

let f = function (y) {
    let n=10;
    console.log(x+y);
}
console.log(x);


var Person = function (person){
    this.firstname = person.firstname;
    this.lastname = person.lastname;
    this.gender = person.gender;
}

var p1 = new Person({firstname:'Jovana',lastname:'Pantic',gender:'f'});
console.log(p1.firstname);

/*var Student = function(stud, brindexa){
    this.constructor.apply(this,[stud]);
    this.brindexa = brindexa;
}
Student.prototype = new Person();

var s1 = new Student({firstname:'Tamara',lastname:'Panic',gender:'f'},'444/13');
console.log(s1.firstname);*/

var student = Object.create(p1);

student.indexn = '444/13';

Person.prototype.staticvar1 = 'Hello';
Person.prototype.staticvar2 = 'Hello again';

Person.prototype.introduceYourself = function(){
    console.log('My name is '+this.firstname + ' '+ this.lastname);
}
