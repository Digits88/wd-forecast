/**
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2016, Martin Micunda
 * @license   GPL-3.0
 */
'use strict';

import {Service, Inject} from '../shared/ng-decorators'; // jshint unused: false

//start-non-standard
@Service({
    serviceName: 'ForecastService'
})
@Inject('$http')
//end-non-standard
class ForecastService {
    constructor($http) {
        this.$http = $http;
        this.apiKey = '279b4be6d54c8bf6ea9b12275a567156';
        this.apiBaseUrl = 'http://api.openweathermap.org/data/2.5';
    }

    getWeeklyWeather() {
        return this.$http.get(`${this.apiBaseUrl}/forecast?q=Paris,FR&mode=json&units=metric&APPID=${this.apiKey}`);
    }
}

export default ForecastService;
