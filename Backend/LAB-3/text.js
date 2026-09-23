const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('My first page\n');
    res.write('My second page\n');
    res.write('My third page\n');
    res.end('This is my page');
});

const PORT = 4000;
if (require.main === module) {
    server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));
}

module.exports = server;