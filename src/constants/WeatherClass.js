class WeatherClass {
  constructor() {
    this.loadingText = "Weather loading...";
    this.weatherUrl = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/4118/";
    this.imageUrl = (abbr) => `https://www.metaweather.com/static/img/weather/${abbr}.svg`;
    this.weatherAbbrMap = {
      sn: "snowing",
      sl: "sleeting",
      h: "hailing",
      t: "thunderstorming",
      hr: "raining heavily",
      lr: "raining lightly",
      s: "showering",
      hc: "heavily cloudy",
      lc: "lightly cloudy",
      c: "clear skies"
    };
    this.city = "Toronto";
    this.perfectDay = "Isn't it a perfect day to check off some todo's?";
    this.weatherText = (abbr, image) => [`Today it's ${this.weatherAbbrMap[abbr]} `,image,` in ${this.city}`];
  }
}

export default (new WeatherClass());
