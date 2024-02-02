const http = require('http'); 
const express = require('express');
const { emit } = require('process');
const applicacao = express();
const {exec} = require('child_process');

const servidorHttp = http.createServer(applicacao);
const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket) => {
    const ip = socket.handshake.address;
    const horaAtual = new Date().toLocaleTimeString();
    console.log(`[${horaAtual}]Um usuário com IP ${ip} se conectou.`);

    socket.addListener('nova mensagem', (msg)=>{
        io.emit('nova mensagem', msg);
        playMsgSound();
    });
})

applicacao.use(express.static('public'));

servidorHttp.listen(1000, '192.168.248.200');
  

// function playMsgSound(){
//     exec('play ./som-mensagem.mp3', (error, stdout, stderr) =>{
//         if(error){
//             console.error(`Erro ao reproduzir o som: ${error.message}`);
//             return;
//         }
//         if(stderr){
//             console.error(`Erro ao reproduzir som:${stderr}`);
//             return;
//         }
//         console.log(`Som reproduzido com sucesso.`)
//     });
// }
const { spawn } = require('child_process');

function playMsgSound() {
    // Comando para reproduzir o som, ajuste o caminho do arquivo conforme necessário
    const player = spawn('powershell', ['-c', `(New-Object Media.SoundPlayer "./som-mensagem.wav").PlaySync();`]);

    player.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    player.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    player.on('close', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
}
