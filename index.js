const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');

dotenv.config();
const app = express();

app.use(morgan('combined'));

app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${process.env.PORT}`);
});