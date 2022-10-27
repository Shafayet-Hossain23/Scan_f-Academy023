import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const PremiumAccess = () => {
    const data = useLoaderData()
    const { id, courseTitle, image_url, rating, courseInfo, totalEnroll, trainer, details, courseContent } = data
    return (
        <div>
            <Card className='bg-dark ' style={{ margin: "20px auto", width: '75%', height: '100%', border: '1px solid orange' }}>
                <Card.Body>
                    <Card.Title>{courseTitle}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Course Id: {id}</Card.Subtitle>
                    <Card.Text>
                        Thank you for purchasing Premium course. Our team contact with you within 12-Hours.
                    </Card.Text>
                    <div>
                        <p className='text-center'>Your Information</p>

                        <p>Name : </p>
                        <p>Email-Id :</p>
                    </div>
                    <Card.Link href="#">Scanf Academy</Card.Link>
                    <Card.Link href="#">All courses</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PremiumAccess;