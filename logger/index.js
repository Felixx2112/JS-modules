/*
thay vi ta viet :

import logger from './logger.js'
export default logger

thi minh co the viet tat
*/
// export { default } from "./logger.js";

//or

export { default as logger2 } from "./logger.js";

// day la loi : Uncaught SyntaxError: The requested module './logger/index.js' does not provide an export named 'default'
// nen ta phai doi ten logger trong app.js
