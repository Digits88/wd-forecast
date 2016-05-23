/**
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2016, Martin Micunda
 * @license   GPL-3.0
 */
'use strict';

import {Filter} from '../shared/ng-decorators'; // jshint unused: false

class ForecastLabel {
    //start-non-standard
    @Filter({
        filterName: 'forecastLabel'
    })
    //end-non-standard
    static forecastLabelFilter() {
        return conditionCode => {
            let label = '';
            // http://openweathermap.org/weather-conditions
            if(conditionCode >= 500 && conditionCode < 600) {
                label = 'rain-mix';
            } else if(conditionCode >= 200 && conditionCode < 300) {
                label = 'thunderstorm';
            } else if(conditionCode >= 300 && conditionCode < 400) {
                label = 'storm-showers';
            } else if(conditionCode >= 600 && conditionCode < 700) {
                label = 'snow';
            } else if(conditionCode >= 801 && conditionCode < 900) {
                label = 'day-sunny';
            } else {
                label = 'cloud';
            }

            return label;
        };
    }
}
