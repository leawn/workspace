const assert = require('assert');

const tracker = new assert.CallTracker();

function func() {}

function foo() {}

const callsfunc = tracker.calls(func, 2);

callsfunc();

callsfunc();

console.log(tracker.report());