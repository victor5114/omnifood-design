exports.index = function(req, res, next) {
    res.sendFile(__dirname + '/resources/views/index.html');  
};

exports.templates = function(req, res) {
    var name = req.params.name;
    res.sendFile(__dirname + '/resources/views/templates/'+name+'.html');
}

exports.directives = function(req, res) {
    var name = req.params.name;
    res.sendFile(__dirname + '/resources/js/app/directives/templates/'+name);
}