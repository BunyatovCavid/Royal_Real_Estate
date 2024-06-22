import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import { Alert } from 'react-bootstrap';

const Footer = () => {
  const { t } = useTranslation();
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = () => {
    setSubscribed(true);
  };
  return (
    <>
        <Container>
        <footer className="text-white py-5">
  <div className="row">
    <div className="col-6 col-md-2 mb-3 ">
      <h5 className='text-white'>{t("header.22")}</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <LinkContainer to="/">
                  <Nav.Link className='text-white'>
                    {t("header.0")}
                  </Nav.Link>
                </LinkContainer>
                </li>
        <li className="nav-item">
        <LinkContainer to="/about">
                  <Nav.Link className='text-white'>
                    {t("header.1")}
                  </Nav.Link>
                </LinkContainer>
        </li>
        <li className="nav-item"><LinkContainer to="/about">
                  <Nav.Link className='text-white'>
                    {t("header.2")}
                  </Nav.Link>
                </LinkContainer></li>
        <li className="nav-item"><LinkContainer to="/about">
                  <Nav.Link className='text-white'>
                    {t("header.3")}
                  </Nav.Link>
                </LinkContainer></li>
        <li className="nav-item"><LinkContainer to="/about">
                  <Nav.Link className='text-white'>
                    {t("header.4")}
                  </Nav.Link>
                </LinkContainer></li>
      </ul>
    </div>
    <div className="col-6 col-md-2 mb-3">
      <h5>{t("header.23")}</h5>
      <ul className="nav flex-column">
        <li className="nav-item"><LinkContainer to="/basket">
                  <Nav.Link className='text-white'>
                  {t("header.24")}
                  </Nav.Link>
                </LinkContainer></li>
                <li className="nav-item"><LinkContainer to="/wish">
                  <Nav.Link className='text-white'>
                  {t("header.25")}
                  </Nav.Link>
                </LinkContainer></li>
                <li className="nav-item"><LinkContainer to="/login">
                  <Nav.Link className='text-white'>
                  {t("header.5")}
                  </Nav.Link>
                </LinkContainer></li>
        <li className="nav-item"><LinkContainer to="/register">
                  <Nav.Link className='text-white'>
                  {t("header.27")}
                  </Nav.Link>
                </LinkContainer></li>
      </ul>
    </div>
    <div className="col-6 col-md-2 mb-3">
      <h5>{t("header.28")}</h5>
      <ul className="nav flex-column">
      <li className="nav-item"><LinkContainer to="/">
                  <Nav.Link className='text-white'>
                  {t("header.29")}
                  </Nav.Link>
                </LinkContainer></li>
                <li className="nav-item"><LinkContainer to="/">
                  <Nav.Link className='text-white'>
                  {t("header.30")}
                  </Nav.Link>
                </LinkContainer></li>
      </ul>
    </div>
    <div className="col-md-5 offset-md-1 mb-3">
    <form>
            <h5>{t('header.31')}</h5>
            <p>{t('header.32')}</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                {t('header.32')}
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleSubscribe}
              >
                {subscribed ? t('header.39') : t('header.33')}
              </button>
            </div>
            {subscribed && (
              <Alert className='my-3' key="success" variant='success'>
              {t('header.35')}
            </Alert>
            )}
          </form>
    </div>
  </div>
  <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
    <p>© 2022 Company, Inc. All rights reserved.</p>
    <ul className="list-unstyled d-flex">
      <li className="ms-3 "><a className="link-dark " href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
      <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
      <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
    </ul>
  </div>
</footer>
        </Container>

    </>
  )
}

export default Footer