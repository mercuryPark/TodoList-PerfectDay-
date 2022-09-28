const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(5500, function(){
    console.log('listening on 8080')
})

app.get('/', function(get, post){
    // post.send('sdfsdfsdf')
    post.sendFile(__dirname + '/index.html')
})
app.get('/credit', function(get, post){
    // post.send('sdfsdfsdf')
    post.sendFile(__dirname + '/credit.html')
})
app.get('/todolist', function(get, post){
    // post.send('sdfsdfsdf')
    post.sendFile(__dirname + '/detail.html')
})
app.get('/calendar', function(get, post){
    // post.send('sdfsdfsdf')
    post.sendFile(__dirname + '/calendar.html')
})