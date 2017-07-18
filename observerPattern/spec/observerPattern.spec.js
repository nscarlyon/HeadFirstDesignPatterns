"use strict";
var observerPattern_1 = require("../src/observerPattern");
describe('Observer Pattern', function () {
    it('should set the current conditions', function () {
        var weatherStation = new observerPattern_1.WeatherStation();
        weatherStation.weatherData.setMeasurements(80, 81, 82);
        expect(weatherStation.currentNewDisplay.display()).toEqual('Current Conditions: 80F degress and 81% humidity');
    });
    it('should calculate average, max, and min temp', function () {
        var weatherStation = new observerPattern_1.WeatherStation();
        weatherStation.weatherData.setMeasurements(80, 81, 82);
        weatherStation.weatherData.setMeasurements(85, 81, 82);
        weatherStation.weatherData.setMeasurements(90, 81, 82);
        expect(weatherStation.statisticsDisplay.display()).toEqual('Avg/Max/Min temperature = 85/90/80');
    });
    it('changes forecast depending on pressure', function () {
        var weatherStation = new observerPattern_1.WeatherStation();
        weatherStation.weatherData.setMeasurements(80, 81, 80);
        weatherStation.weatherData.setMeasurements(85, 81, 82);
        expect(weatherStation.forecastDisplay.display()).toEqual('Forecast: Improving weather on the way!');
        weatherStation.weatherData.setMeasurements(85, 81, 78);
        expect(weatherStation.forecastDisplay.display()).toEqual('Forecast: Watch out for cooler, rainy weather');
        weatherStation.weatherData.setMeasurements(85, 81, 78);
        expect(weatherStation.forecastDisplay.display()).toEqual('Forecast: More of the same');
    });
});
//# sourceMappingURL=observerPattern.spec.js.map