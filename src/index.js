if (process.env.NODE_ENV === 'production') {
    module.exports = require('../dist/dt-add.min.js');
} else {
    module.exports = require('../dist/dt-add.js');
}