import React from 'react';
import './App.css';
import {Weather, Form} from './component/weather';

//const API_key = "0570acc2213956480a12f9247333282b";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            city: undefined,
            country: undefined,
            icon: undefined,
            main: undefined,
            celsius: undefined,
            temp_max: undefined,
            temp_min: undefined,
            description: "",
        };

        this.weatherIcon = {
            Thunderstorm: "https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            Drizzle: "https://images.unsplash.com/uploads/14116603688211a68546c/30f8f30b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
            Rain: "https://images.unsplash.com/photo-1486016006115-74a41448aea2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80",
            Snow: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1083&q=80",
            Atmosphere: "https://images.unsplash.com/photo-1524435497396-7bc897fa8d97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            Clear: "https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
            Clouds: "https://images.unsplash.com/photo-1500740516770-92bd004b996e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
        };
    }

    calCelsius(temp) {
        let cell = Math.floor(temp - 273.15);
        return cell;
    }

    get_WeatherIcon(icons, rangeID) {
        switch(true) {
            case rangeID >= 200 && rangeID <= 232:
                this.setState({icon: this.weatherIcon.Thunderstorm});
                break;
            case rangeID >= 300 && rangeID <= 321:
                this.setState({icon: this.weatherIcon.Drizzle});
                break;
            case rangeID >= 500 && rangeID <= 531:
                this.setState({icon: this.weatherIcon.Rain});
                break;
            case rangeID >= 600 && rangeID <= 622:
                this.setState({icon: this.weatherIcon.Snow});
                break;
            case rangeID >= 701 && rangeID <= 781:
                this.setState({icon: this.weatherIcon.Atmosphere});
                break;
            case rangeID === 800:
                this.setState({icon: this.weatherIcon.Clear});
                break;
            case rangeID >= 801 && rangeID <= 804:
                this.setState({icon: this.weatherIcon.Clouds});
                break;
            default:
                this.setState({icon:this.weatherIcon.Clouds})
        }
    }

    getWeather = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&appid=0570acc2213956480a12f9247333282b');

        const response = await api_call.json();
        console.log(response);

        this.setState({
            city: response.name,
            country: response.sys.country,
            celsius: this.calCelsius(response.main.temp),
            temp_max: this.calCelsius(response.main.temp_max),
            temp_min: this.calCelsius(response.main.temp_min),
            description: response.weather[0].description,
        });

        this.get_WeatherIcon(this.weatherIcon,response.weather[0].id);
    }

    render() {
        return (
            <div className="App">
                <Form loadWeather={this.getWeather}/>
                <Weather
                    city={this.state.city}
                    country={this.state.country}
                    temp_celsius={this.state.celsius}
                    temp_max={this.state.temp_max}
                    temp_min={this.state.temp_min}
                    description={this.state.description}
                    weatherIcon={this.state.icon}
                />
            </div>
        );
    }
}

export default App;
