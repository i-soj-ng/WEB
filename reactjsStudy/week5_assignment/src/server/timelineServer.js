import React from 'react';

export async function createFeed(name, body) {
    const result = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/', {
        method: 'post',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            owner: name,
            content: body
        }),
    });
    return await result.json();
}

export async function readFeed() {
    const readResult = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/', {
        method: 'get',
    });
    const readJson = await readResult.json();
    const propsData = readJson.map(read => {
        return {
            name: read.owner,
            body: read.content,
        }
    });
    return propsData;
}