import React, {useEffect, useState} from 'react';
import {Writing} from '../components/TimeLine/Writing';
import {Timeline} from '../components/TimeLine/Timeline';
import {createFeed, readFeed} from '../server/timelineServer';

export function TimeLinePage(props) {
    const [feeds, setFeeds] = useState([]);
    const [inputName, setName] = useState([]);
    const [inputContent, setContent] = useState([]);

    const ChangeName = e => {
        setName(e.target.value);
    }
    const ChangeContent = e => {
        setContent(e.target.value);
    }

    async function onClickPost() {
        console.log(inputName, inputContent);
        await createFeed(inputName, inputContent);
        setFeeds(await readFeed());
    }

    useEffect(() => {
        const server = async () => {
            setFeeds(await readFeed());
            console.log(feeds)
        };
        server();
    }, []);

    return <>
        <Writing
            inputNameValue={inputName}
            inputContentValue={inputContent}
            readFeed={readFeed}
            setFeeds={setFeeds}
            createFeed={createFeed}
            onClickPostValue={onClickPost}
            changeContent={ChangeContent}
            changeName={ChangeName}
        />
        <Timeline
            feeds = {feeds}
        />
    </>;
}