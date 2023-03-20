import React, { useState, useEffect } from 'react';
import { Card, Input } from 'antd';

const { Meta } = Card;
const { Search } = Input;

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [displayedItems, setDisplayedItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMoreItems, setHasMoreItems] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const itemsPerPage = 24;

    const fetchData = async () => {
        const response = await fetch('http://localhost:3000/items');
        const data = await response.json();
        setItems(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    useEffect(() => {
        const filteredItems = items.filter((item) =>
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

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <Search
                placeholder="Search by item name"
                onChange={handleSearch}
                style={{ width: 300, marginBottom: 20 }}
            />
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
                        style={{ width: '100%' }}
                        cover={
                            <img
                                alt={item.name}
                                src={`${item.image}`}
                                style={{ height: 200, objectFit: 'contain' }}
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