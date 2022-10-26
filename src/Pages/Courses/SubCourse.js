import React from 'react';
import { Button, Card, } from 'react-bootstrap';
import { FaStar, FaUserGraduate, FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SubCourse = ({ dInfo }) => {
    // console.log(dInfo)
    const { id, courseTitle, image_url, rating, courseInfo, totalEnroll, trainer } = dInfo
    return (
        <div className='col-lg-6 col-sm-12 col-md-6'>
            <Card style={{ border: '1px solid white', height: '435px' }} className="bg-dark">
                <div>
                    <img style={{ height: '200px', width: '100%', borderRadius: '5px' }} className='img-fluid' src={image_url} alt="" />
                </div>
                <Card.Body className='pb-0' >
                    <Card.Title>{courseTitle}</Card.Title>
                    <Card.Text >
                        <div className='mt-3 text-muted'>
                            <p className='mb-2'>Trained by: {trainer.name} </p>

                        </div>
                        <div>
                            <p className='mb-0'>Total lecture: <span className='text-warning'>{courseInfo.totalLecture} ++</span></p>
                            <p className='mb-0 mt-2'>Time duration: <span className='text-warning'>{courseInfo.duration} ++</span></p>
                            {/* <p className='mb-0 mt-2'>Quiz: {courseInfo.quiz} ++</p> */}
                        </div>
                        <div className='d-flex justify-content-between mb-0 mt-3'>
                            <p className='mb-0'><FaStar className='text-warning me-2 mb-1' />{rating.number}</p>
                            <p className='mb-0'><FaUserGraduate className='text-warning me-2 mb-1' /> {totalEnroll}</p>
                        </div>

                    </Card.Text>

                </Card.Body>
                <Card.Footer style={{ borderTop: '1px solid white' }} className="p-0">
                    <Link to={`/details/${id}`}>
                        <Button style={{ height: '100%', width: '100%', borderRadius: '0', border: '0' }} variant="outline-warning">
                            Details <FaArrowCircleRight className='ms-0 mb-1' />
                        </Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div >
    );
};

export default SubCourse;