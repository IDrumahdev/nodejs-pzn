import http from 'http';

const server = http.createServer((request, response) => {
    response.write("Todo List API");
    response.end();
});

server.listen(3300);