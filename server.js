const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();

// Performance: Enable gzip compression
app.use(compression({
    level: 6,
    threshold: 1024,
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            return false;
        }
        return compression.filter(req, res);
    }
}));

// Performance: Enable trust proxy for Railway
app.set('trust proxy', 1);

// Performance: Set security and caching headers
app.use((req, res, next) => {
    // Cache static assets for 1 year
    if (req.url.match(/\.(css|js|jpg|jpeg|png|gif|webp|svg|woff|woff2|ttf|eot|ico)$/)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (req.url.match(/\.html$/)) {
        // Cache HTML for 1 hour but allow revalidation
        res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
    }

    // Security headers
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');

    next();
});

// Serve static files with compression
app.use(express.static(__dirname, {
    maxAge: '1y',
    etag: true,
    lastModified: true
}));

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
