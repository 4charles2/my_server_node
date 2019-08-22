var querystring = require('querystring');

function start(response, postData) {
    console.log("Le gestionnaire 'start' est appelé.");
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Envoyer" />' +
        '</form>' +
        '</body>' +
        '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData) {
    console.log("Le gestionnaire 'upload' est appelé.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    console.log("Bonjour Upload"+postData);
    response.write('Bonjour vous avez envoye : ' + querystring.parse(postData).text);
    response.end();
}


exports.start = start;
exports.upload = upload;


/*


let exec = require ('child_process').exec

function start(callback){
    console.log('Gestionnaire start !');

    exec('cd ../ | dir', function (error, stdout, stderr) {
        callback.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
        callback.write(stdout);
        callback.end()
    });
    // function sleep(milliSeconds) {
    //     var startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + milliSeconds);
    // }
    //sleep(10000);

}

function upload(callback){
    console.log('Gestionnaire upload !');
    callback.write("Bonjour upload");
    callback.end();
}*/
