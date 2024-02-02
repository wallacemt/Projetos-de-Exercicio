const http = require('http'); 
const express = require('express');
const { emit } = require('process');
const applicacao = express();

const servidorHttp = http.createServer(applicacao);
const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket) => {
    console.log('um usuário conectou');
    socket.addListener('nova mensagem', (msg)=>{
        io.emit('nova mensagem', msg);
    });
})

applicacao.use(express.static('public'));

servidorHttp.listen(1000, '192.168.248.200');
  