import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const GoalExplosions = ({ searchTerm }) => {
    const [goalExplosions, setGoalExplosions] = useState([]);
    const [displayedGoalExplosions, setDisplayedGoalExplosions] = useState([]);
    const [hasMoreGoalExplosions, setHasMoreGoalExplosions] = useState(true);

    const goalExplosionsPerPage = 28;

    const fetchGoalExplosions = async () => {
        const response = await fetch('http://localhost:3000/goal_explosions');
        const data = await response.json();
        return data;
    };

    const fetchData = async () => {
        const data = await fetchGoalExplosions();
        setGoalExplosions(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setDisplayedGoalExplosions([]);
        setHasMoreGoalExplosions(true);
    }, [searchTerm]);

    useEffect(() => {
        const filteredGoalExplosions = goalExplosions.filter((goalExplosion) =>
            goalExplosion.name.toLowerCase().includes(searchTerm?.toLowerCase())
        );
        setDisplayedGoalExplosions(filteredGoalExplosions.slice(0, goalExplosionsPerPage));
        setHasMoreGoalExplosions(filteredGoalExplosions.length > goalExplosionsPerPage);
    }, [goalExplosions, searchTerm]);

    const loadMore = () => {
        setDisplayedGoalExplosions([
            ...displayedGoalExplosions,
            ...goalExplosions.slice(
                displayedGoalExplosions.length,
                displayedGoalExplosions.length + goalExplosionsPerPage
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
                {displayedGoalExplosions.map((goalExplosion) => (
                    <Card
                        key={goalExplosion.id}
                        hoverable
                        style={{ maxWidth: '300px' }}
                        cover={
                            <img
                                alt={goalExplosion.name}
                                src={`${goalExplosion.image}`}
                                style={{ height: 'auto', width: '100%', objectFit: 'contain' }}
                            />
                        }
                    >
                        <Meta title={goalExplosion.name} description={goalExplosion.color} />
                    </Card>
                ))}
            </div>
            {hasMoreGoalExplosions && (
                <button onClick={loadMore} style={{ marginTop: 20 }}>
                    Load more goal explosions
                </button>
            )}
        </>
    );
};

export default GoalExplosions;
