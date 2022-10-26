import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFileDownload, FaStar, FaUserGraduate, FaArrowCircleRight } from 'react-icons/fa';
import './CourseDetails.css'


const CourseDetails = () => {
    const data = useLoaderData()
    // console.log(data)
    const { id, courseTitle, image_url, rating, courseInfo, totalEnroll, trainer, details, courseContent } = data
    return (
        <div>
            <Card style={{ border: '1px solid white', height: '100%', width: '100%' }} className="bg-dark">
                <Card.Header style={{ borderBottom: '1px solid white' }}>
                    <Card.Title className='d-flex justify-content-between mb-0'>
                        <div>
                            <h3 className='mb-0'>{courseTitle}</h3>
                        </div>
                        <div title='Download' className='hoverEffect'>
                            <FaFileDownload></FaFileDownload>
                        </div>
                    </Card.Title>
                </Card.Header>
                <div>
                    <img style={{ height: '400px', width: '100%', borderRadius: '5px' }} className='img-fluid imgStyle' src={image_url} alt="" />
                </div>
                <Card.Body>
                    <div className='d-flex justify-content-between mb-2 '>
                        <p className='mb-0'><FaStar className='text-warning me-2 mb-1' />{rating.number}</p>
                        <p className='mb-0'><FaUserGraduate className='text-warning me-2 mb-1' /> {totalEnroll}</p>
                    </div>
                    <Card.Text>
                        <h4 className='text-warning text-center'>Course over-view</h4>
                        <p className='detailsStyle'>{details}</p>
                    </Card.Text>
                    <div>
                        <h4 className='text-warning text-center'>Course-Information</h4>
                        <div className='d-lg-flex d-md-flex justify-content-between '>
                            <ul>
                                <li>Time : {courseInfo.duration}</li>
                                <li>Total lecture : {courseInfo.totalLecture}</li>
                                <li>Quiz : {courseInfo.quiz}</li>
                                <li>Assignment : {courseInfo.assignment}</li>
                                <li>Videos : {courseInfo.totalVideos}</li>
                            </ul>
                            <ul className='mt-2'>
                                <li>Course Id : {id}</li>
                                <li>Trainer : {trainer.name}</li>
                                <li>Stuff : {trainer.totalStuff}</li>
                                <li>Institue : <span className='text-warning'>{trainer.institute}</span></li>


                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-warning text-center'>Course-Content</h4>
                        <div>
                            {
                                courseContent.map(c => <ul style={{ listStyleType: "square" }} className='my-0'><li>{c}</li></ul>)
                            }
                        </div>
                    </div>

                </Card.Body>
                <Card.Footer style={{ borderTop: '1px solid white' }} className="p-0">
                    <Link to={`/details/${id}`}>
                        <Button style={{ height: '100%', width: '100%', borderRadius: '3px', border: '0' }} variant="outline-warning">
                            Get premium access <FaArrowCircleRight className='ms-0 mb-1' />
                        </Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseDetails;