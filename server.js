import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));

app.listen(4000);
