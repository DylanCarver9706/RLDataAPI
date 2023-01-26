import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
// import cheerio from 'cheerio';

function Scraper() {
    const [html, setHtml] = useState('');

    useEffect(() => {
        axios.get('https://rocket-league.com/items/shop')
            .then(response => {
                setHtml(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <div>{parse(html)}</div>
        </div>
    );
}

export default Scraper;