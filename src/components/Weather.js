import React, { Component } from 'react';
import * as Constants from "../Constants.js"

class Weather extends Component {
  state = {
        error: null,
        isLoaded: false,
        abbreviation: "c",
        image: "https://www.metaweather.com/static/img/weather/c.svg",
        weatherText : "Weather loading..."
  }

    componentDidMount() {
      fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/4118/")
        .then(res => res.json()).then(weatherRes => {
          const abbreviation = weatherRes.consolidated_weather[0].weather_state_abbr;
          const image = `https://www.metaweather.com/static/img/weather/${abbreviation}.svg`;
          this.setState({abbreviation, image, isLoaded: true});
          console.log(weatherRes.consolidated_weather[0].weather_state_abbr);
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

    render() {
      const { error, isLoaded, abbreviation, image, weatherText} = this.state;
      const {weather, city, perfectDay } = Constants;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>{weatherText}</div>;
      } else {
        return (
          <div className="weather">
            <p>Today it's {weather[abbreviation]} <img src={image} style={{maxHeight: "20px", maxWidth: "20px"}} alt="weather icon" /> in {city}.</p>
            <p>{perfectDay}</p>
          </div>
        );
      }
    }
}

export default Weather;
