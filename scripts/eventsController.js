var fs= require('fs'); // fs is file system

// here we read the file from disk
module.exports.get = function(req, res){
	var event= fs.readFileSync('app/data/event/' +req.params.id + '.json', 'utf8');
	res.setHeader('Content-Type', 'application/json');
	res.send(event);
};

//here we write file in disk
module.exports.save = function(req, res){
	var event= req.body;
	fs.writeFileSync('app/data/event/' + req.params.id + '.json', JSON.stringify(event));
	res.send(event);

	}