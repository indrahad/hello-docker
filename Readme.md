# hello-docker ; youtube:@inspirasiVID

Praktik : 

Buat app.js
// Import modul http dari Node.js
const http = require('http');

// Membuat server HTTP
const server = http.createServer((req, res) => {
  // Set header HTTP dengan status kode 200 (OK)
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Menampilkan pesan "Hello, World!" di dalam browser
  res.end('Hello, World!\n');
});

// Mendengarkan permintaan di port 3300
server.listen(3300, () => {
  console.log('Server berjalan di http://127.0.0.1:3300/');
});


Buat Dockerfile


# Gunakan Node.js versi 14.x sebagai base image
FROM node:14
# Tentukan direktori kerja di dalam kontainer
WORKDIR /usr/src/app
# Instal dependensi
RUN npm install
# Salin sumber kode aplikasi
COPY . .
# Ekspos port 3300
EXPOSE 3300
# Tentukan perintah default untuk menjalankan aplikasi
CMD ["node", "app.js"]

3. Jalankan docker build -t (nama_aplikasi) .

4. Jalankan docker image ls

5. Jalankan docker run -d -p 3000:3300 (nama_aplikasi)

6. jalankan docker ps -a

7. test melalui website atau curl http://localhost:3000

