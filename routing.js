var http = require('http') // built in module
http.createServer(
    function(req, res){
       res.writeHead(200, { 'Content-Type': 'text/plain' });
       const url = req.url;
       if(url === '/about'){
          res.write('This is About Page\n');
          res.end();
       }
       else if(url === '/contact'){
          res.write('This is Contact Page\n');
          res.end();
       }
       else{
          res.write('Node Server!\n');
          res.end();
       }

    }
).listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});