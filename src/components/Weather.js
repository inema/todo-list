import React, { Component } from 'react';
import WeatherClass from "../constants/WeatherClass.js"

class Weather extends Component {
  state = {
        error: null,
        isLoaded: false,
        weatherText: ""
  }

  componentDidMount() {
    const {weatherUrl, imageUrl, weatherText} = WeatherClass;
    fetch(weatherUrl)
      .then(res => res.json()).then(weatherRes => {
        const abbreviation = weatherRes.consolidated_weather[0].weather_state_abbr;
        const image = <img src={imageUrl(abbreviation)} style={{maxHeight: "20px", maxWidth: "20px"}} alt="weather icon" />;
        this.setState({weatherText: weatherText(abbreviation, image), isLoaded: true});
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
    const { error, isLoaded, weatherText } = this.state;
    const {perfectDay, loadingText} = WeatherClass;
    if (error) {
      return <p>{perfectDay}</p>;
    } else if (!isLoaded) {
      return <p>{loadingText}</p>;
    } else {
      return (
        <div className="weather">
          <p>{weatherText}</p>
          <p>{perfectDay}</p>
        </div>
      );
    }
  }
}

export default Weather;
