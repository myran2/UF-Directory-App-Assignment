var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

// Send listings data if on the listings page. 404 otherwise
var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  if (parsedUrl.path === "/listings") {
    response.writeHead(200, {
      'Content-Length': Buffer.byteLength(listingData),
      'Content-Type': 'application/json'
    });
    response.write(listingData);
  }
  else {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Bad gateway error");
  }

  response.end();
};

// read listings data into memory and then start the server
fs.readFile('listings.json', 'utf8', function(err, data) {
  listingData = data;
  server = http.createServer(requestHandler);
  server.listen(port, function() {
    console.log('Server listening on: http://127.0.0.1:' + port);
  });
});
