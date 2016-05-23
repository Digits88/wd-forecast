/**
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2016, Martin Micunda
 * @license   GPL-3.0
 */
'use strict';

import util from 'gulp-util';

const argv = util.env;
const LOG = util.log;
const COLORS = util.colors;
const ENV = !!argv.env ? argv.env.toLowerCase() : 'dev';

if(!ENV.match(new RegExp(/(^|\W)prod($|\W)|(^|\W)dev($|\W)|(^|\W)test($|\W)|(^|\W)demo($|\W)/))) {
    LOG(COLORS.red(`Error: The argument 'env' has incorrect value ${ENV}! Usage: --env=(demo|dev|test|prod)`));
    process.exit(1);
}

function getEnv() {
    return ENV;
}

export {getEnv};
