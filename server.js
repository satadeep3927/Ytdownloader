const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());
app.listen(process.env.PORT||4000, () => {
    console.log('Server Works !!! At port 4000');
});
app.get('/download', (req,res) => {
var URL = req.query.url;
var format = req.query.format
if(format==="mp3"){
    res.header('Content-Disposition', 'attachment; filename="video.mp3"');
    ytdl(URL, {
        format: 'mp3'
        }).pipe(res);
}
else if(format==="mp4"){
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, {
        format: 'mp4'
        }).pipe(res);
}
});