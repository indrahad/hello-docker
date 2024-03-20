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

