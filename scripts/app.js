'use strict'
var projectHolder = [ ];

function Project(obj){
  this.title = obj.projectTitle
  this.projectType = obj.projectType
  this.projectSummary = obj.projectSummaryContent
  this.project = obj.projectContent
}

Project.prototype.compileProjects = function () {
  var compile = Handlebars.compile($('#project-summary').html());
  return compile(this);
};

storedProjects.forEach(function(obj){
  projectHolder.push(new Project(obj));
});

projectHolder.forEach(function(project){
  $('#projects').append(project.compileProjects());
})
