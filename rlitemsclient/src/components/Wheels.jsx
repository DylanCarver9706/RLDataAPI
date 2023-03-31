import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Card } from 'antd';

const { Meta } = Card;

const Wheels = () => {
    const [wheels, setWheels] = useState([]);
    const [form] = Form.useForm();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/wheels');
            const data = await response.json();
            setWheels(data);
        };

        fetchData();
    }, []);

    const onFinish = async (values) => {
        try {
            const response = await fetch('http://localhost:3000/wheels', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Failed to add wheel');
            }

            const newWheel = await response.json();
            setWheels([...wheels, newWheel]);
            form.resetFields();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center' }}>Wheels</h1>
            <Form form={form} onFinish={onFinish} style={{ marginBottom: '24px' }}>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter a name' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Color"
                    name="color"
                    rules={[{ required: true, message: 'Please enter a color' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add Wheel
                    </Button>
                </Form.Item>
            </Form>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gridGap: 20,
                    justifyContent: 'center',
                }}
            >
                {wheels.map((wheel) => (
                    <Card
                        key={wheel.id}
                        hoverable
                        style={{ width: '100%' }}
                        cover={
                            <img
                                alt={wheel.name}
                                src={`${wheel.image}`}
                                style={{ height: 200, objectFit: 'contain' }}
                            />
                        }
                    >
                        <Meta title={wheel.name} description={wheel.color} />
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Wheels;