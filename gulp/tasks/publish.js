/**
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2016, Martin Micunda
 * @license   GPL-3.0
 */
'use strict';

import gulp from 'gulp';
import awspublish from 'gulp-awspublish';
import path from '../paths';
import * as utils from '../utils';

// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
const publisher = awspublish.create({
    region: 'eu-west-1',
    params: {
        Bucket: `${utils.getEnv()}.schedulino.com`
    }
});

const headers = { 'Cache-Control': 'max-age=315360000, no-transform, public' };

/**
 * Publish all the contents of 'build/dist' to AWS S3.
 *
 * @return {Stream}
 */
gulp.task('publish', ['build'], () => {
    return gulp.src(path.build.dist.basePath + '**')
        // .pipe(awspublish.gzip({ ext: '.gz' }))
        .pipe(publisher.publish(headers))
        .pipe(publisher.sync())
        .pipe(awspublish.reporter());
});

