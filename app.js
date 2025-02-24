import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send('World War 1!');
});
app.get('/home', (req, res) => {
    res.send('World War 2!');
});
app.get('/home/room', (req, res) => {
    res.send('World War 3!');
});
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});