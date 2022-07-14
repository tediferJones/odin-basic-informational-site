const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
})

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact-me.html'));
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'));
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



// OLD VERSION

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     fs.readFile('index.html', (err, content) => {
//       if (err) throw err;
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(content);
//     })
//   } else if (req.url === '/about') {
//     fs.readFile('about.html', (err, content) => {
//       if (err) throw err;
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(content);
//     })
//   } else if (req.url === '/contact-me') {
//     fs.readFile('contact-me.html', (err, content) => {
//       if (err) throw err;
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(content);
//     })
//   } else {
//     fs.readFile('404.html', (err, content) => {
//       if (err) throw err;
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(content);
//     })
//   }
// })

// const PORT = 8080;

// server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
