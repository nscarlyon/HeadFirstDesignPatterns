interface Subject {
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObservers();
}

interface Observer {
    update(temperature: number, humidity: number, pressure: number): void;
}

interface DisplayElement {
    display(): void;
}

export class WeatherStation {
     weatherData: WeatherData;
     currentNewDisplay: CurrentConditionsDisplay;
     statisticsDisplay: StatisticsDisplay;
     forecastDisplay: ForecastDisplay;

    constructor() {
        this.weatherData = new WeatherData();
        this.currentNewDisplay = new CurrentConditionsDisplay(this.weatherData);
        this.statisticsDisplay = new StatisticsDisplay(this.weatherData);
        this.forecastDisplay = new ForecastDisplay(this.weatherData);
    }
}

export class WeatherData implements Subject {
    observers: any[];
    temperature: number;
    humidity: number;
    pressure: number;
    changed: boolean;

    constructor() {
        this.observers = [];
    }

    setChanged(): void {
        this.changed = true;
    }

    registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    removeObserver(o: Observer): void {
        let index: number = this.observers.indexOf(o);
        if (index >= 0) this.observers.slice(index, 1);
    }

    notifyObservers():void {
            for(let i = 0; i < this.observers.length; i++) {
                let observer: Observer = this.observers[i];
                observer.update(this.temperature, this.humidity, this.pressure);
            }
    }

    measurementsChanged():void {
        this.notifyObservers();
    }

    setMeasurements(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }

    getTemperature(): number {
        return this.temperature;
    }

    getHumidity(): number {
        return this.humidity;
    }

    getPressure(): number {
        return this.pressure;
    }
}

export class CurrentConditionsDisplay implements  Observer, DisplayElement {
    private temperature: number;
    private humidity: number;
    private weatherData: Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }

    display(): string {
        console.log("Current Conditions: " + this.temperature + "F degress and " +
        this.humidity + "% humidity");
        return "Current Conditions: " + this.temperature + "F degress and " +
            this.humidity + "% humidity";
    }
}

export class StatisticsDisplay implements  Observer, DisplayElement {
    private temperature: number;
    private weatherData: Subject;
    private tempSum: number = 0;
    private numOfTempReadings: number = 0;
    private maxTemp: number = 0.0;
    private  minTemp: number = 200;
    private avgTemp: number;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this.tempSum+=temperature;
        this.numOfTempReadings++;
        this.avgTemp = this.tempSum / this.numOfTempReadings;
        if(temperature > this.maxTemp) this.maxTemp = temperature;
        if(temperature < this.minTemp) this.minTemp = temperature;
        this.display();
    }

    display(): string {
        console.log("Avg/Max/Min temperature = " + this.avgTemp + "/"
        + this.maxTemp + "/" + this.minTemp);
        return "Avg/Max/Min temperature = " + this.avgTemp + "/"
            + this.maxTemp + "/" + this.minTemp;
    }
}

export class ForecastDisplay implements  Observer, DisplayElement {
    private weatherData: Subject;
    private currentPressure: number = 29.92;
    private lastPressure: number;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this.lastPressure = this.currentPressure;
        this.currentPressure = pressure;
        this.display();
    }

    display(): string {
        let forecast: string = "Forecast: ";
        if (this.currentPressure > this.lastPressure) forecast+= "Improving weather on the way!";
        else if (this.currentPressure === this.lastPressure) forecast+= "More of the same";
        else if (this.currentPressure < this.lastPressure) forecast+= "Watch out for cooler, rainy weather";
        console.log(forecast);
        return forecast;
    }
}
