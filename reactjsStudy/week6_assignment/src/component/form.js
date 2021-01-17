import React from 'react';
import './form.css';

const Form = props => {
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

export default Form;