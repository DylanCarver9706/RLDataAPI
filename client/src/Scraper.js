import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import parse from 'html-react-parser';
import cheerio from 'cheerio';

function Scraper() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://rocket-league.com/items/shop')
            .then(response => {
                const $ = cheerio.load(response.data);
                let data = [];
                $('.rlg-item-shop__featured').each((i, el) => {
                    const text = $(el).text();
                    data.push(text);
                });
                setData(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            {data.map((text, index) => <div key={index}>{text}</div>)}
        </div>
    )
}

export default Scraper;