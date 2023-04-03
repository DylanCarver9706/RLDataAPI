import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Wheels = ({ searchTerm }) => {
    const [wheels, setWheels] = useState([]);
    const [displayedWheels, setDisplayedWheels] = useState([]);
    const [hasMoreWheels, setHasMoreWheels] = useState(true);

    const wheelsPerPage = 28;

    const fetchWheels = async () => {
        const response = await fetch('http://localhost:3000/wheels');
        const data = await response.json();
        return data;
    };

    const fetchData = async () => {
        const data = await fetchWheels();
        setWheels(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setDisplayedWheels([]);
        setHasMoreWheels(true);
    }, [searchTerm]);

    useEffect(() => {
        const filteredWheels = wheels.filter((wheel) =>
            wheel.name.toLowerCase().includes(searchTerm?.toLowerCase())
        );
        setDisplayedWheels(filteredWheels.slice(0, wheelsPerPage));
        setHasMoreWheels(filteredWheels.length > wheelsPerPage);
    }, [wheels, searchTerm]);

    const loadMore = () => {
        setDisplayedWheels([
            ...displayedWheels,
            ...wheels.slice(
                displayedWheels.length,
                displayedWheels.length + wheelsPerPage
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
                {displayedWheels.map((wheel) => (
                    <Card
                        key={wheel.id}
                        hoverable
                        style={{ maxWidth: '300px' }}
                        cover={
                            <img
                                alt={wheel.name}
                                src={`${wheel.image}`}
                                style={{ height: 'auto', width: '100%', objectFit: 'contain' }}
                            />
                        }
                    >
                        <Meta title={wheel.name} description={wheel.color} />
                    </Card>
                ))}
            </div>
            {hasMoreWheels && (
                <button onClick={loadMore} style={{ marginTop: 20 }}>
                    Load more wheels
                </button>
            )}
        </>
    );
};

export default Wheels;
