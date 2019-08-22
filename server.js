let http = require('http');
let url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        console.log('requete reçus');
        var postData = "";
        var pathname = url.parse(request.url).pathname;

        //route(handle, pathname, response);
        request.setEncoding("utf8");
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Paquet POST reçu '"+ postDataChunk + "'.");
        });
        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });
        console.log('Fin de la gestion de la requete_____________________');
        //response.end();
    }

    http.createServer(onRequest).listen(8080);
    console.log('Serveur Demaré');
}


exports.start = start;