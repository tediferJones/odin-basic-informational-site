const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    })
  } else if (req.url === '/about') {
    fs.readFile('about.html', (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    })
  } else if (req.url === '/contact-me') {
    fs.readFile('contact-me.html', (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    })
  } else {
    fs.readFile('404.html', (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    })
  }
})

const PORT = 8080;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

// try to create links for about & contact page, each page should link back to the home page