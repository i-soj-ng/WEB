import React from 'react';
import './weather.css';

export const Weather = (props) => {
    return (
        <div className="container2">
            <img src={props.weatherIcon} alt=""/>
            <div className="cards">
                <h1 id='cityName'>{props.city}, {props.country}</h1>
                <h1 id='currTemp'>{props.temp_celsius}&deg;</h1>
                <h3 id='minmaxTemp'>min: {props.temp_min}&deg;, max: {props.temp_max}&deg;</h3>
                <h4 id='descrip'>{props.description}</h4>
            </div>
        </div>
    );
};

export const Form = props => {
    return (
        <div className="container1">
            <form onSubmit={props.loadWeather}>
                <div className="row">
                    <input id='cityBlank' type="text" className="form-control" name="city" autoComplete="off" placeholder="City"/>
                    <input id='countryBlank' type="text" className="form-control" name="country" autoComplete="off" placeholder="Country"/>
                    <input id='button' type="submit" value="Get Weather"/>
                </div>
            </form>
        </div>
    );
};