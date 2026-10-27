const test = require('node:test');
const assert = require('node:assert');
const mu = require('../messageUtil');

test('setError marks HTTP 500 as not successful', () => {
    const e = mu.setError(mu.new(200), 500, 'falhou', 'detalhe');
    assert.strictEqual(e.isSuccess, false);
    assert.strictEqual(e.statusCode, 500);
});

test('setError keeps 2xx as successful', () => {
    assert.strictEqual(mu.setError(mu.new(200), 200, 'ok', 'ok').isSuccess, true);
});

test('new keeps the user and developer messages', () => {
    const m = mu.new(200, 'oi', 'dev');
    assert.deepStrictEqual(m.message, { userMessage: 'oi', developerMessage: 'dev' });
});

test('new defaults messages to empty strings', () => {
    assert.deepStrictEqual(mu.new(200).message, { userMessage: '', developerMessage: '' });
});
