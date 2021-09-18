// Loi 404 duoc hinh thanh khi ten file thieu .js
// va de app.js duoc hoat dong thi ta them type='module'
// import logger from "./logger/index.js";

import { logger2 } from "./logger/index.js";

import { TYPE_LOG, TYPE_ERROR, TYPE_WARN, TYPE_INFO } from "./constants.js";

// logger("mesage...", TYPE_INFO);

logger2("mesage...", TYPE_WARN);
