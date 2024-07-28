const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const server = require('./express')()
const { port = 1202 } = require('./config/index');

server.listen(port, async () => {
    console.log(
        '\x1b[36m%s\x1b[0m',
        `server is running at http://localhost:${port}`
    );
    console.log('\x1b[36m%s\x1b[0m', `API's docs http://localhost:${port}/docs`);
})
