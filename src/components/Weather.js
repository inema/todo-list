import React, { Component } from 'react';
import WeatherClass from "../constants/WeatherClass.js"

class Weather extends Component {
  state = {
        error: null,
        isLoaded: false,
        abbreviation: "",
        image: "",
  }

    componentDidMount() {
      fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/4118/")
        .then(res => res.json()).then(weatherRes => {
          const abbreviation = weatherRes.consolidated_weather[0].weather_state_abbr;
          const imageURL = `https://www.metaweather.com/static/img/weather/${abbreviation}.svg`;
          const image = <img src={imageURL} style={{maxHeight: "20px", maxWidth: "20px"}} alt="weather icon" />
          this.setState({abbreviation, image, isLoaded: true});
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
      const { error, isLoaded, abbreviation, image} = this.state;
      const {weatherAbbrMap, city, perfectDay, loadingText} = WeatherClass;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>{loadingText}</div>;
      } else {
        return (
          <div className="weather">

            <p>Today it's {weatherAbbrMap[abbreviation]} {image} in {city}.</p>
            <p>{perfectDay}</p>
          </div>
        );
      }
    }
}

export default Weather;
