
function route(handle, pathname, response, postData){
    console.log('Routage de l\'url' + pathname);
    if(typeof handle[pathname] === "function")
        handle[pathname](response, postData);
    else {
        response.write('Aucun gestionnaire pour cette URL');
        response.end();
        console.log('Aucun gestionnaire pour cette URL');
    }
}

exports.route = route;