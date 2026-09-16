'use strict';

var test = require('tape');

/** @import { Module } from '..' */

/** @typedef {typeof import('..')} IsCore */

/**
 * @template A, B, Message
 * @typedef {(<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : Message} ExactlyOrMessage
 */

// the real checks here happen in `tsc`, which `npm run lint` runs; the runtime assertions only restate them
test('isCore signature', function (t) {
	/** @type {ExactlyOrMessage<Parameters<IsCore>, [specifier: Module | (string & {}), nodeVersion?: string], '`isCore` must accept any string specifier and an optional string node version'>} */
	var parametersAreExact = true;

	/** @type {ExactlyOrMessage<ReturnType<IsCore>, boolean, '`isCore` must return a boolean'>} */
	var returnsBoolean = true;

	t.equal(parametersAreExact, true, '`isCore` accepts any string (suggesting `isCore.Module` names), and an optional string node version');
	t.equal(returnsBoolean, true, '`isCore` returns a boolean');

	t.end();
});
