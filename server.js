const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
app.get('/', (req,res)=>res.sendFile(__dirname+'/index.html'));
io.on('connection', s=>{
 s.on('chat message', m=>io.emit('chat message', m));
});
http.listen(3000, ()=>console.log('FRAN-CHAT OK sur port 3000'));
