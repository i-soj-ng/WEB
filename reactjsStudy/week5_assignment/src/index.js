import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MainPage} from './pages/MainPage';
import {Mypage} from './pages/MyPage';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';

function Pages() {
    return (
        <div>
            <Route path="/"><MainPage></MainPage></Route>
            <Route path="/timeline"><App></App></Route>
            <Route path="/mypage"><Mypage></Mypage></Route>
        </div>
    )
}
ReactDOM.render(
  <BrowserRouter>
    <Pages />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
