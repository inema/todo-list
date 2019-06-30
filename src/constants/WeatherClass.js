class WeatherClass {
  constructor() {
    this.loadingText = "Weather loading...";
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
    this.weatherText = (abbr, image, city) => `Today it's ${this.weatherAbbrMap[abbr]} ${image} in ${city}.`
  }
}

export default (new WeatherClass());
