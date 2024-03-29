import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const ItemList = ({ searchTerm }) => {
    const [items, setItems] = useState([]);
    const [displayedItems, setDisplayedItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMoreItems, setHasMoreItems] = useState(true);

    const itemsPerPage = 24;

    const fetchItems = async (endpoint) => {
        const response = await fetch(`http://localhost:3000/${endpoint}`);
        const data = await response.json();
        return data;
    };

    const fetchData = async () => {
        const endpoints = [
            'items',
            'antennas',
            'avatar_borders',
            'avatars',
            'banners',
            'boosts',
            'cars',
            'crates',
            'decals',
            'engine_sounds',
            'goal_exposions',
            'paint_finishes',
            'player_anthems',
            'stickers',
            'toppers',
            'trails',
            'wheels',
        ];
        const itemData = await Promise.all(endpoints.map(fetchItems));
        const flattenedData = itemData.flat();
        setItems(flattenedData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    useEffect(() => {
        const filteredItems = items.filter(
            (item) =>
                item.name &&
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setDisplayedItems(filteredItems.slice(0, currentPage * itemsPerPage));
        setHasMoreItems(filteredItems.length > currentPage * itemsPerPage);
    }, [items, searchTerm, currentPage]);

    const loadMore = () => {
        setDisplayedItems([
            ...displayedItems,
            ...items.slice(
                currentPage * itemsPerPage,
                (currentPage + 1) * itemsPerPage
            ),
        ]);
        setCurrentPage(currentPage + 1);
    };

    return (
        <>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gridGap: 20,
                    justifyContent: 'center',
                }}
            >
                {displayedItems.map((item) => (
                    <Card
                        key={item.id}
                        hoverable
                        style={{ width: '100%', maxWidth: '300px' }}
                        cover={
                            <img
                                alt={item.name}
                                src={`${item.image}`}
                                style={{ height: 'auto', width: '100%', objectFit: 'contain' }}
                            />
                        }
                    >
                        <Meta title={item.name} description={item.item_type} />
                    </Card>
                ))}
            </div>
            {hasMoreItems && (
                <button onClick={loadMore} style={{ marginTop: 20 }}>
                    Load more items
                </button>
            )}
        </>
    );
};

export default ItemList;