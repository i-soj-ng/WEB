import React from 'react';

export function Feed(props) {
    return (
        <div style={styles.feed}>
            <div>작성자 {props.name}</div>
            <div>내용 {props.body}</div>
        </div>
    );
}

const styles = {
    feed: {
        border: '2px solid gray',
        padding:'15px',
        margin: '10px',
    },
};