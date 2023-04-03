import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const GoalExplosions = () => {
    const [goalExplosions, setGoalExplosions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/goal_explosions');
            const data = await response.json();
            setGoalExplosions(data);
        };

        fetchData();
    }, []);

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center' }}>Goal Explosions</h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gridGap: 20,
                    justifyContent: 'center',
                }}
            >
                {goalExplosions.map((goalExplosion) => (
                    <Card
                        key={goalExplosion.id}
                        hoverable
                        style={{ width: '100%' }}
                        cover={
                            <img
                                alt={goalExplosion.name}
                                src={`${goalExplosion.image}`}
                                style={{ height: 200, objectFit: 'contain' }}
                            />
                        }
                    >
                        <Meta title={goalExplosion.name} description={goalExplosion.color} />
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default GoalExplosions;
