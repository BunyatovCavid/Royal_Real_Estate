import React from 'react'
import '../assets/sass/style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
    <main className='my-5'>
  <div className="position-relative abt">
  <div class="position-absolute top-50 start-50 translate-middle abtus">
  <h1 className='text-white'>{t("header.1")}</h1>
  </div>
  </div>
  <div className="container marketing">
    <h1 class="text-center text-white my-5">{t("header.34")}</h1>
    <div className="row">
      <div className="col-lg-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <Col xs={6} md={4}>
          <Image width={140} height={140} src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" roundedCircle />
        </Col>
        <h2 className="fw-normal text-white">John Smith</h2>
        <p className='text-white'>{t("header.36")}</p>
        <p className='text-white'><a className="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div className="col-lg-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <Col xs={6} md={4}>
          <Image width={140} height={140} src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" roundedCircle />
        </Col>
        <h2 className="fw-normal text-white">Michael Williams</h2>
        <p className='text-white'>{t("header.37")}</p>
        <p className='text-white'><a className="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div className="col-lg-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <Col xs={6} md={4}>
          <Image width={140} height={140} src="https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" roundedCircle />
        </Col>
        <h2 className="fw-normal text-white">Emily Johnson</h2>
        <p className='text-white'>{t("header.38")}</p>
        <p className='text-white'><a className="btn btn-secondary" href="#">View details »</a></p>
      </div>
    </div>


    <h1 className='text-white my-5 text-center'>Our Services</h1>

    <hr className="featurette-divider" />
    <div data-aos="fade-right" className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal text-white lh-1">First featurette heading. <span className="text-white">It’ll blow your mind.</span></h2>
        <p className="lead text-white">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div className="col-md-5">
      <svg className="img-fluid mx-auto" width={500} height={500} style={{backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1663054295283-637bf8d03ca9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} role="img" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>
      </div>
    </div>
    <hr className="featurette-divider" />
    <div className="row featurette" data-aos="zoom-in">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal text-white lh-1">Oh yeah, it’s that good. <span className="text-white">See for yourself.</span></h2>
        <p className="lead text-white">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
      </div>
      <div className="col-md-5 order-md-1">
        <svg className="img-fluid mx-auto" width={500} height={500} style={{backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1678208881799-de004d307379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} role="img" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>
      </div>
    </div>
    <hr className="featurette-divider" />
    <div className="row featurette" data-aos="fade-right">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal text-white lh-1">And lastly, this one. <span className="text-white">Checkmate.</span></h2>
        <p className="lead text-white">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
      </div>
      <div className="col-md-5">
      <svg className="img-fluid mx-auto" width={500} height={500} style={{backgroundImage: 'url("https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} role="img" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>
      </div>
    </div>
    <hr className="featurette-divider" />
  
  </div>
 
  <footer className="container">
    <p className="float-end"><a href="#">Back to top</a></p>
  </footer>
</main>

    </>
  )
}

export default About