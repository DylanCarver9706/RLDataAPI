import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Boosts = ({ searchTerm }) => {
    const [boosts, setBoosts] = useState([]);
    const [displayedBoosts, setDisplayedBoosts] = useState([]);
    const [hasMoreBoosts, setHasMoreBoosts] = useState(true);

    const boostsPerPage = 24;

    const fetchBoosts = async () => {
        const response = await fetch('http://localhost:3000/boosts');
        const data = await response.json();
        return data;
    };

    const fetchData = async () => {
        const data = await fetchBoosts();
        setBoosts(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setDisplayedBoosts([]);
        setHasMoreBoosts(true);
    }, [searchTerm]);

    useEffect(() => {
        const filteredBoosts = boosts.filter((boost) =>
            boost.name.toLowerCase().includes(searchTerm?.toLowerCase())
        );
        setDisplayedBoosts(filteredBoosts.slice(0, boostsPerPage));
        setHasMoreBoosts(filteredBoosts.length > boostsPerPage);
    }, [boosts, searchTerm]);

    const loadMore = () => {
        setDisplayedBoosts([
            ...displayedBoosts,
            ...boosts.slice(
                displayedBoosts.length,
                displayedBoosts.length + boostsPerPage
            ),
        ]);
    };

    return (
        <>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gridGap: 20,
                    justifyContent: 'center',
                }}
            >
                {displayedBoosts.map((boost) => (
                    <Card
                        key={boost.id}
                        hoverable
                        style={{ maxWidth: '300px' }}
                        cover={
                            <img
                                alt={boost.name}
                                src={`${boost.image}`}
                                style={{ height: 'auto', width: '100%', objectFit: 'contain' }}
                            />
                        }
                    >
                        <Meta title={boost.name} description={boost.color} />
                    </Card>
                ))}
            </div>
            {hasMoreBoosts && (
                <button onClick={loadMore} style={{ marginTop: 20 }}>
                    Load more boosts
                </button>
            )}
        </>
    );
};

export default Boosts;