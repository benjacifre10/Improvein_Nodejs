const express = require('express');
const app = express();

// Setting Port
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require('./routes.js'));

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});