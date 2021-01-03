import React from 'react';
import './mypage.css';

export function Mypage() {
    return <>
        <div className="entire">
            <h1 id='myinfo'>My Info</h1>
            <div className="info">
                <p id='name'>Name: 이소정</p>
                <p id='birth'>Birth: 2001.02.16</p>
                <p id='school'>School: Kookmin Univ.</p>
                <p id='insta'>Instagram: isojng</p>
                <p id='etc'>Please follow me ^__^</p>
            </div>
        </div>
    </>;
}