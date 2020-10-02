const assert = require('assert').strict;

(async () => {
    await assert.rejects(
        async () => {
            throw new TypeError('Wrong value');
        },
        {
            name: 'TypeError',
            message: 'Wrong value'
        }
    );
})();

(async () => {
    await assert.rejects(
        async () => {
            throw new TypeError('Wrong value');
        },
        (err) => {
            assert.strictEqual(err.name, 'TypeError');
            assert.strictEqual(err.message, 'Wrong value');
        }
    );
})();

assert.rejects(
    Promise.reject(new Error('Wrong value')),
    Error
).then( () => {
        //...
});