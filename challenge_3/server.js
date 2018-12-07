const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const logging = process.env.NODE_ENV === 'production' ? morgan('short') : morgan('dev');
const PORT = process.env.PORT || 3000;

app.use(logging);
app.use(express.static(path.resolve(__dirname, './public')));

app.listen(PORT);
console.log(`Express listening at ${PORT}`);

