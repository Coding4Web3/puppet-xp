#!/usr/bin/env -S ts-node --project tsconfig.cjs.json
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tstest_1 = require("tstest");
const xml_msgpayload_js_1 = require("./xml-msgpayload.js");
(0, tstest_1.test)('CJS: codeRoot()', async (t) => {
    t.ok(xml_msgpayload_js_1.XmlDecrypt, 'should exist XmlDecrypt');
});
//# sourceMappingURL=xml-msgpayload.spec.js.map