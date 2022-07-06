import { g as globalApis } from './chunk-constants.c8f1d38c.js';
import { i as index } from './chunk-runtime-chain.701cffd8.js';
import 'url';
import './chunk-utils-global.a3293dce.js';
import 'path';
import 'tty';
import 'local-pkg';
import 'util';
import './chunk-utils-timers.b26e7c5c.js';
import 'chai';
import './vendor-_commonjsHelpers.34b404ce.js';
import './chunk-runtime-rpc.c47f2233.js';
import 'fs';
import './spy.js';
import 'tinyspy';

function registerApiGlobally() {
  globalApis.forEach((api) => {
    globalThis[api] = index[api];
  });
}

export { registerApiGlobally };
