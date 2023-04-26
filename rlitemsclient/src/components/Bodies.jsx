import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Cars = ({ searchTerm }) => {
    const [cars, setCars] = useState([]);
    const [displayedCars, setDisplayedCars] = useState([]);
    const [hasMoreCars, setHasMoreCars] = useState(true);

    const carsPerPage = 24;

    const fetchCars = async () => {
        const response = await fetch('http://localhost:3000/cars');
        const data = await response.json();
        return data;
    };

    const fetchData = async () => {
        const data = await fetchCars();
        setCars(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setDisplayedCars([]);
        setHasMoreCars(true);
    }, [searchTerm]);

    useEffect(() => {
        const filteredCars = cars.filter((car) =>
            car && car.name && car.name.toLowerCase().includes(searchTerm?.toLowerCase())
        );
        setDisplayedCars(filteredCars.slice(0, carsPerPage));
        setHasMoreCars(filteredCars.length > carsPerPage);
    }, [cars, searchTerm]);

    const loadMore = () => {
        setDisplayedCars([
            ...displayedCars,
            ...cars.slice(
                displayedCars.length,
                displayedCars.length + carsPerPage
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
                {displayedCars.map((car) => (
                    <Card
                        key={car.id}
                        hoverable
                        style={{ maxWidth: '300px' }}
                        cover={
                            <img
                                alt={car.name}
                                src={`${car.image}`}
                                style={{ height: 'auto', width: '100%', objectFit: 'contain' }}
                            />
                        }
                    >
                        <Meta title={car.name} description={car.color} />
                    </Card>
                ))}
            </div>
            {hasMoreCars && (
                <button onClick={loadMore} style={{ marginTop: 20 }}>
                    Load more cars
                </button>
            )}
        </>
    );
};

export default Cars;
