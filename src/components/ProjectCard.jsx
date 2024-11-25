//rafce
import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'

const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} className='btn shadow'>
        <Card.Img height={'200px'} variant="top" src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>

      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h3>Title</h3>
              <h6>Languages Used: <span className='text-danger'>language</span> </h6>
              <p style={{textAlign:'justify'}}> <span className="fw-bolder">Project Overview : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptate ipsam quae dolor sequi aliquam dolorem omnis, blanditiis cum, harum molestias quo quaerat ea ex culpa, laboriosam voluptates natus delectus! </p>
            </div>
          </div>
          <div className="mt-2 float-start">
            <a href="https://github.com/Luminar-Technolab/Calculator-JS-Jun23" target='_blank' className="btn btn-secondary me-2"><i className="fa-brands fa-github"></i></a>
            <a href="https://calculator-js-jun23.vercel.app/" target='_blank' className="btn btn-secondary"><i className="fa-solid fa-link"></i></a>
          </div>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default ProjectCard