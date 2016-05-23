/**
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2015, Martin Micunda
 * @license   GPL-3.0
 */
'use strict';

import moment from 'moment';
import template from './forecast.html!text';
import {View, Component, Inject} from '../shared/ng-decorators'; // jshint unused: false

//start-non-standard
@Component({
    selector: 'wd-forecast'
})
@View({
    template: template
})
@Inject('ForecastService')
//end-non-standard
class Forecast {
    constructor(ForecastService) {
        ForecastService.getWeeklyWeather().then(respond => {
            /*jshint camelcase:false */
            respond.data.list[0].date = moment.utc(respond.data.list[0].dt_txt).toDate();
            this.forecastToday = respond.data.list[0];
            // create has map of date/daily forecast
            let f = {}, date;
            this.forecasts = respond.data.list.filter(l => {
                /*jshint camelcase:false */
                date = moment.utc(l.dt_txt);
                // we are not interested in future dates
                if(date.isAfter(moment())) {
                    // we are only interested at 12 o'clock forecast
                    if(date.hour() > 11 && date.hour() < 13) {
                        l.date = date.toDate();
                        return true;
                    }
                }

                return false;
            });
        });
    }
}

export default Forecast;
