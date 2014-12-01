'use strict';

var Student = function(name) {
  this.name = name;
  this.courses = [];
};

Student.prototype.signUp = function(course) {
  this.courses.push(course);
}

Student.prototype.dropOut = function(person) {
  console.log(this.courses);
  for (var i = 0; i < this.courses.length; i++) {
    if (this.courses[i].name = person);
    this.courses.slice(i, 1);
  };
};

Student.prototype.display = function() {
  return this
};


module.exports = Student;
