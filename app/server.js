const express = require('express');
const app = express();

// Setting Port
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.json({ msg: "This is home" });
});

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});