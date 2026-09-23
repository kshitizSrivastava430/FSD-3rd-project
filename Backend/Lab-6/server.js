const http = require('http');
const fs = require('fs');
const path = require('path');

const routes = {
    '/': 'index.html',
    '/about': 'about.html',
    '/contact': 'contact.html',
};

const server = http.createServer((req, res) => {
    const filename = routes[req.url];
    if (filename) {
        const filePath = path.join(__dirname, filename);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 - Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1><p><a href="/">Return Home</a></p>');
    }
});

const PORT = 4000;
if (require.main === module) {
    server.listen(PORT, () => {
        console.log(`Lab-6 Static Server running at http://localhost:${PORT}`);
    });
}

module.exports = server;
