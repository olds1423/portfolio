Project.allProjects = [];

Project.prototyope.toHtml = function(templateId) {
  var template = Handlebars.compile($(templateId).text());
  return template(this);
};
