import React from 'react';
import './mainpage.css';

export function MainPage() {
    return (
        <header>
            <h1 id='title'>HAPPY WINK..^^</h1>
            <div id='main'><a href="/">Main</a></div>
            <div id='timeline'><a href="/timeline">Timeline</a></div>
            <div id='mypage'><a href="/mypage">My page</a></div>
        </header>
    );
}