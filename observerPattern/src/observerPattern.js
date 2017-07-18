"use strict";
var WeatherStation = (function () {
    function WeatherStation() {
        this.weatherData = new WeatherData();
        this.currentNewDisplay = new CurrentConditionsDisplay(this.weatherData);
        this.statisticsDisplay = new StatisticsDisplay(this.weatherData);
        this.forecastDisplay = new ForecastDisplay(this.weatherData);
    }
    return WeatherStation;
}());
exports.WeatherStation = WeatherStation;
var WeatherData = (function () {
    function WeatherData() {
        this.observers = [];
    }
    WeatherData.prototype.setChanged = function () {
        this.changed = true;
    };
    WeatherData.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherData.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        if (index >= 0)
            this.observers.slice(index, 1);
    };
    WeatherData.prototype.notifyObservers = function () {
        for (var i = 0; i < this.observers.length; i++) {
            var observer = this.observers[i];
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    };
    WeatherData.prototype.measurementsChanged = function () {
        this.notifyObservers();
    };
    WeatherData.prototype.setMeasurements = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    };
    WeatherData.prototype.getTemperature = function () {
        return this.temperature;
    };
    WeatherData.prototype.getHumidity = function () {
        return this.humidity;
    };
    WeatherData.prototype.getPressure = function () {
        return this.pressure;
    };
    return WeatherData;
}());
exports.WeatherData = WeatherData;
var CurrentConditionsDisplay = (function () {
    function CurrentConditionsDisplay(weatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }
    CurrentConditionsDisplay.prototype.update = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    };
    CurrentConditionsDisplay.prototype.display = function () {
        console.log("Current Conditions: " + this.temperature + "F degress and " +
            this.humidity + "% humidity");
        return "Current Conditions: " + this.temperature + "F degress and " +
            this.humidity + "% humidity";
    };
    return CurrentConditionsDisplay;
}());
exports.CurrentConditionsDisplay = CurrentConditionsDisplay;
var StatisticsDisplay = (function () {
    function StatisticsDisplay(weatherData) {
        this.tempSum = 0;
        this.numOfTempReadings = 0;
        this.maxTemp = 0.0;
        this.minTemp = 200;
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    StatisticsDisplay.prototype.update = function (temperature, humidity, pressure) {
        this.tempSum += temperature;
        this.numOfTempReadings++;
        this.avgTemp = this.tempSum / this.numOfTempReadings;
        if (temperature > this.maxTemp)
            this.maxTemp = temperature;
        if (temperature < this.minTemp)
            this.minTemp = temperature;
        this.display();
    };
    StatisticsDisplay.prototype.display = function () {
        console.log("Avg/Max/Min temperature = " + this.avgTemp + "/"
            + this.maxTemp + "/" + this.minTemp);
        return "Avg/Max/Min temperature = " + this.avgTemp + "/"
            + this.maxTemp + "/" + this.minTemp;
    };
    return StatisticsDisplay;
}());
exports.StatisticsDisplay = StatisticsDisplay;
var ForecastDisplay = (function () {
    function ForecastDisplay(weatherData) {
        this.currentPressure = 29.92;
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    ForecastDisplay.prototype.update = function (temperature, humidity, pressure) {
        this.lastPressure = this.currentPressure;
        this.currentPressure = pressure;
        this.display();
    };
    ForecastDisplay.prototype.display = function () {
        var forecast = "Forecast: ";
        if (this.currentPressure > this.lastPressure)
            forecast += "Improving weather on the way!";
        else if (this.currentPressure === this.lastPressure)
            forecast += "More of the same";
        else if (this.currentPressure < this.lastPressure)
            forecast += "Watch out for cooler, rainy weather";
        console.log(forecast);
        return forecast;
    };
    return ForecastDisplay;
}());
exports.ForecastDisplay = ForecastDisplay;
//# sourceMappingURL=observerPattern.js.map