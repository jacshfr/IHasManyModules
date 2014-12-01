'use strict';

var Course = require('./Course');
var Student = require('./Student');

var math = new Course('math');
var science = new Course('science');
var english = new Course('english');
var history = new Course('history');

var john = new Student('john');
var jane = new Student('jane');

var addClass = function(person, course) {
  course.inCourse(person);
  person.signUp(course);
};

var removeClass = function(person, course) {
  course.outCourse(course);
  person.dropOut(person);
};

addClass(john, math);
addClass(jane, english);
addClass(john, history);
addClass(jane, science);
removeClass(john, math);

console.log(math.display());
console.log(jane.display());
