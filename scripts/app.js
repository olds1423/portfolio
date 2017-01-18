
(function(module) {
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

Project.prototype.makeProjectObjects = function () {
  projectHolder.push(new Project(obj));
};

Project.storedProjects = function() {
  if (localStorage.savedProjects) {
    var locallyStoredProjects = JSON.parse(localStorage.getItem('savedProjects'));
    Project.makeProjectObjects.forEach(locallyStoredProjects);
    console.log(projectHolder);
  } else {
    $.getJSON('/data/data.json')
    .done(function(data) {
      Project.makeProjectObjects.forEach(data);
      localStorage.setItem('savedProjects', JSON.stringify(data));
    })
  }
};

Project.storedProjects();

// storedProjects.forEach(function(obj){
//   projectHolder.push(new Project(obj));
// });

// projectHolder.forEach(function(project){
//   $('#projects').append(project.compileProjects());
//   $('.projectContent').hide();
// })

})(window);
