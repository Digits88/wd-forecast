/**
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2015, Martin Micunda
 * @license   GPL-3.0
 */
'use strict';

// js vendor files
import angular from 'angular';

// js app files
import './forecast/index';
import mainModule from './shared/ng-decorators';

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainModule.name], {
        strictDi: true
    });
});
