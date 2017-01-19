
(function(module) {

  var projectHolder = [ ];

  function Project(data){
    this.title = data.projectTitle
    this.projectType = data.projectType
    this.projectSummary = data.projectSummaryContent
    this.project = data.projectContent
  }

  Project.prototype.compileProjects = function () {
    var compile = Handlebars.compile($('#project-summary').html());
    return compile(this);
  };

  function makeProjectObjects(data) {
    data.forEach(function(data){
      projectHolder.push(new Project(data));
    })
  }

  Project.storedProjects = function() {
    if (localStorage.savedProjects) {
      var locallyStoredProjects = JSON.parse(localStorage.getItem('savedProjects'));
      makeProjectObjects(locallyStoredProjects);
      console.log(projectHolder);
    } else {
      $.getJSON('./data/data.json')
      .done(function(data) {
        makeProjectObjects(data);
        console.log(projectHolder);
        localStorage.setItem('savedProjects', JSON.stringify(data));
      })
    }
  };

  Project.storedProjects();

  // storedProjects.forEach(function(obj){
  //   projectHolder.push(new Project(obj));
  // });

  projectHolder.forEach(function(project){
    $('#projects').append(project.compileProjects());
    $('.projectContent').hide();
  })

})(window);
