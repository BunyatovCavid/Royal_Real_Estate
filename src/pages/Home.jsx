import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import Card from 'react-bootstrap/Card';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/sass/style.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t } = useTranslation();
  return (
    <main className='home-section'><Swiper 
    navigation={true}
    modules={[Navigation]} 
    className="mySwiper">
        <SwiperSlide className='dovn'>
        <Card className="bg-none text-white border-0">
      <Card.Img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Card image" />
      <Card.ImgOverlay>
        <div className="texbox">
        <div className="boxcontent">
        <div className="boxthings">
        <Card.Title>{t("header.41")}</Card.Title>
        <Card.Text>
        {t("header.42")}
        </Card.Text>
        </div>
        </div>
        </div>
      </Card.ImgOverlay>
    </Card>
        </SwiperSlide>
        
        <SwiperSlide>
        <Card className="bg-none text-white border-0">
      <Card.Img src="https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Card image" />
      <Card.ImgOverlay>
        <div className="texbox1">
        <div className="boxcontent">
        <div className="boxthings">
        <Card.Title>{t("header.43")}</Card.Title>
        <Card.Text>
        {t("header.44")}
        </Card.Text>
        </div>
        </div>
        </div>
      </Card.ImgOverlay>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className="bg-none text-white border-0">
      <Card.Img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Card image" />
      <Card.ImgOverlay>
        <div className="texbox2">
        <div className="boxcontent">
        <div className="boxthings">
        <Card.Title>{t("header.45")}</Card.Title>
        <Card.Text>
        {t("header.46")}
        </Card.Text>
        </div>
        </div>
        </div>
      </Card.ImgOverlay>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className="bg-none text-white border-0">
      <Card.Img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80" alt="Card image" />
      <Card.ImgOverlay>
        <div className="texbox3">
        <div className="boxcontent">
        <div className="boxthings">
        <Card.Title>{t("header.47")}</Card.Title>
        <Card.Text>
        {t("header.48")}
        </Card.Text>
        </div>
        </div>
        </div>
      </Card.ImgOverlay>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className="bg-none text-white border-0">
      <Card.Img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Card image" />
      <Card.ImgOverlay>
        <div className="texbox4">
        <div className="boxcontent">
        <div className="boxthings">
        <Card.Title className='boxcontent'>{t("header.49")}</Card.Title>
        <Card.Text>
        {t("header.50")}
        </Card.Text>
        </div>
        </div>
        </div>
      </Card.ImgOverlay>
    </Card>
        </SwiperSlide>
      </Swiper>
      
      {/* HERO START */}
      <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
  <div className="col-10 col-sm-8 col-lg-6" data-aos="flip-down">
  <Swiper pagination={true} direction={'vertical'} modules={[Pagination, Autoplay, Navigation]} autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }} className="mySwiper1">
        <SwiperSlide><img src="https://images.unsplash.com/photo-1574852859542-1b41217a7815?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1590650213165-c1fef80648c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://plus.unsplash.com/premium_photo-1664298490124-0f80a720b3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" /></SwiperSlide>
      </Swiper>
  </div>
    <div className="col-lg-6" data-aos="fade-right">
      <h1 className="display-5 fw-bold lh-1 mb-3 text-white">{t("header.6")}</h1>
      <p className="lead text-white">{t("header.7")}</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <h1  className=" me-md-2 text-white">{t("header.8")}</h1>
        <h1  className="px-4 text-white">{t("header.9")}</h1>
      </div>
    </div>
  </div>
</div>

          {/* HERO END */}

          <div className="container px-4 py-5 text-white" id="hanging-icons">
  <h2 className="pb-2 border-bottom">{t("header.10")}</h2>
  <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
    <div className="col d-flex align-items-start" data-aos="zoom-in">
      <div className="icon-square text-bg-transparent d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
      <i class="fa-solid fa-house bg-transparent fs-1"></i>
      </div>
      <div>
        <h3 className="fs-2">{t("header.11")}</h3>
        <p>{t("header.12")}</p>
        <a href="#" className="btn btn-primary">
        {t("header.17")}
        </a>
      </div>
    </div>
    <div className="col d-flex align-items-start" data-aos="zoom-in">
    <div className="icon-square text-bg-transparent d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
    <i class="fa-solid fa-couch fs-1"></i>
      </div>
      <div>
        <h3 className="fs-2">{t("header.13")}</h3>
        <p>{t("header.14")}</p>
        <a href="#" className="btn btn-primary">
        {t("header.17")}
        </a>
      </div>
    </div>
    <div className="col d-flex align-items-start" data-aos="zoom-in">
    <div className="icon-square text-bg-transparent d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
    <i class="fa-solid fa-swatchbook fs-1"></i>
      </div>
      <div>
        <h3 className="fs-2">{t("header.15")}</h3>
        <p>{t("header.16")}</p>
        <a href="#" className="btn btn-primary">
        {t("header.17")}
        </a>
      </div>
    </div>
  </div>
</div>




<div className="container px-4 py-5" id="custom-cards">
  <h2 className="pb-2 border-bottom text-white">{t("header.18")}</h2>
  <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
    <div className="col">
      <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" data-aos="flip-left" data-aos-delay="100" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1471306224500-6d0d218be372?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" )', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{t("header.19")}</h3>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Bootstrap" width={32} height={32} className="rounded-circle border border-white" />
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
              <small>Earth</small>
            </li>
            <li className="d-flex align-items-center">
              <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
              <small>3d</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" data-aos="flip-left" data-aos-delay="200" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1628744876497-eb30460be9f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{t("header.20")}</h3>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80" alt="Bootstrap" width={32} height={32} className="rounded-circle border border-white" />
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
              <small>Pakistan</small>
            </li>
            <li className="d-flex align-items-center">
              <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
              <small>4d</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" data-aos="flip-left" data-aos-delay="300" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
          <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{t("header.21")}</h3>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Bootstrap" width={32} height={32} className="rounded-circle border border-white" />
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
              <small>California</small>
            </li>
            <li className="d-flex align-items-center">
              <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
              <small>5d</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

      </main>
  )
}

export default Home