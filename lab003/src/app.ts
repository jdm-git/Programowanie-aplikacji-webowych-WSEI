export class App {
  opwApiKey = "2eab94e68e577bc023a653cc6be04573";
  constructor() {
    this.getCityInfo("krakow");
  }
  async getCityInfo(city: string) {
    const weather = await this.getWeather("krakow");
    this.saveData(weather);
    this.showData();
  }
  async getWeather(city: string): Promise<any> {
    const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
    const weatherResponse = await fetch(openWeatherUrl);
    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    return weatherData;
  }
  saveData(data: any) {
    localStorage.setItem("weatherData", JSON.stringify(data));
  }
  getData() {
    const data = localStorage.getItem("weatherData");
    if (data) {
      return JSON.parse(data);
    } else {
      return {};
    }
  }
  showData() {
    const data = this.getData();
    const temperature = (data.main.temp - 273.15).toFixed();
    const pressure = data.main.pressure;
    const humidity = data.main.humidity;
    const iconCode = data.weather[0].icon;
    const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    console.log(temperature, pressure, humidity);
    document.getElementById("weather").innerHTML = `<img src='${iconUrl}'/>`;
  }
}
