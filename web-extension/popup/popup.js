import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './popup.css';

function Popup() {
    const [heading, setHeading] = useState('');

    useEffect(() => {
        const getHeading = async () => {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

            chrome.scripting.executeScript(
                {
                    target: { tabId: tab.id },
                    files: ['popup/inject.js'],
                },
                (results) => {
                    if (results && results[0] && results[0].result) {
                        setHeading(results[0].result);
                    } else {
                        setHeading("Aucun <h1> trouvé");
                    }
                }
            );
        };

        getHeading();
    }, []);

    return (
        <div>
            <h2>Contenu du &lt;h1&gt; :</h2>
            <div id='heading-content'>{heading}</div>
        </div>
    );
}

ReactDOM.render(<Popup />, document.getElementById('popup-container'));
