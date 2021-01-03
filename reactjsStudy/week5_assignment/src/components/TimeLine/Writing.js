import React from 'react';
import './writing.css';

export function Writing(props){
    return <>
        <input id='name1' type="text" value={props.inputNameValue} onChange={props.changeName} placeholder="Name"/>
        <textarea id='textarea' value={props.inputContentValue} onChange={props.changeContent} cols="30" rows="10" placeholder="Content"></textarea>
        <input id='button' type="button" value="post" onClick={props.onClickPostValue}/>
        </>;
}