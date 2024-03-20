// Import modul http dari Node.js
const http = require('http');

// Membuat server HTTP
const server = http.createServer((req, res) => {
  // Set header HTTP dengan status kode 200 (OK)
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Menampilkan pesan "Hello, World!" di dalam browser
  res.end('Hello, World! percobaan ke 2\n');
});

// Mendengarkan permintaan di port 3300
server.listen(3300, () => {
  console.log('Server berjalan di http://127.0.0.1:3300/');
});

