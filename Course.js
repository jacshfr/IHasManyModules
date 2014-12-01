'use strict';

var Course = function(name) {
  this.name = name;
  this.members = [];
};

Course.prototype.inCourse = function(person) {
  this.members.push(person);
};

Course.prototype.outCourse = function(person) {
  console.log(this.members);
  for (var i = 0; i < this.members.length; i++) {
    if (this.members[i].name = person);
    this.members.slice(i, 1);
  };
};

Course.prototype.display = function() {
  return this;
};

module.exports = Course;
