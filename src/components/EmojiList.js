import React, { useState, useEffect } from 'react';
import emojis from 'emoji-datasource/emoji.json';

const EmojiList = () => {
    const [emojiList, setEmojiList] = useState([]);

    useEffect(() => {
        // Filter out only the base emojis (remove variations and aliases)
        const filteredEmojis = emojis.filter((emoji) => emoji.category === 'Smileys & Emotion');
        setEmojiList(filteredEmojis);
    }, []);

    const handleCopyEmoji = (emoji) => {
        navigator.clipboard.writeText(emoji.native);
        showToast();
    };

    const showToast = () => {
        // Code for displaying a toast notification
    };

    return (
        <div>
            <h1>Emoji List</h1>
            <ul>
                {emojiList.map((emoji, index) => (
                    <li key={index} onClick={() => handleCopyEmoji(emoji)}>
                        {emoji.native}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmojiList;
