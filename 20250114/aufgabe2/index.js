import express from 'express';

const app = express();

//static index.html
app.use(express.static('public'));

app.listen(3000, () => {
    console.log("app is listening on Port 3000");
});