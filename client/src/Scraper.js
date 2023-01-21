import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

function Scraper() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://rocket-league.com/items/shop')
            .then(response => {
                const $ = cheerio.load(response.data);
                const items = [];

                $('.rlg-item-shop__item-image').each((i, el) => {
                    const imgSrc = $(el).find('img').attr('src');
                    const itemName = $(el).find('.rlg-item-shop__name').text();
                    items.push({ itemName, imgSrc });
                });
                $('.rlg-item-shop__item-image. --daily').each((i, el) => {
                    const imgSrc = $(el).attr('src');
                    items.push({ imgSrc });
                });
                setItems(items);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            {items.map((item, i) => (
                <div key={i}>
                    <h1>{item.itemName}</h1>
                    <p>Image URL: {item.imgSrc}</p>
                </div>
            ))}
        </div>
    );
}

export default Scraper;