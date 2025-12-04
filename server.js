const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/profit-accelerator', (req, res) => {
    res.sendFile(path.join(__dirname, 'profit-accelerator.html'));
});

app.get('/booking-confirmed', (req, res) => {
    res.sendFile(path.join(__dirname, 'booking-confirmed.html'));
});

// Handle 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
