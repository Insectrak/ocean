import Counter from "@/src/components/Counter";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
const Index3 = () => {
  return (
    <Layout header={3} footer={3}>
      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
        {/*====== Hero Wrapper ======*/}
        <div className="hero-wrapper-three">
          <div className="hero-waves">
            <img src="assets/images/hero/bg-2.png" className="waves one" alt />
            <img src="assets/images/hero/bg.png" className="waves two" alt />
          </div>
          {/*====== Hero Slider ======*/}
          <Slider {...sliderProps.heroSliderTwo} className="hero-slider-two">
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_two-slider-1.png)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content text-center">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Ocean
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                         Tu hogar con vista al mar te espera
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Vive rodeado de exclusividad, comodidad y una vista inigualable en Camaná.
                      </p>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        {/*<Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link>
                        <Link legacyBehavior href="/">
                          <a className="main-btn filled-btn filled-white mb-10">
                            How It Work
                          </a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_two-slider-2.png)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content text-left">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Ocean
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                         Tu hogar con vista al mar te espera
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Vive rodeado de exclusividad, comodidad y una vista inigualable en Camaná.
                      </p>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        {/*<Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link>
                        <Link legacyBehavior href="/">
                          <a className="main-btn filled-btn filled-white mb-10">
                            How It Work
                          </a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_two-slider-3.png)",
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content text-right">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Ocean
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                         Tu hogar con vista al mar te espera
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".6s">
                      Vive rodeado de exclusividad, comodidad y una vista inigualable en Camaná.
                      </p>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".7s"
                      >
                        {/*<Link legacyBehavior href="/about">
                          <a className="main-btn golden-btn mb-10">
                            Explore More
                          </a>
                        </Link>
                        <Link legacyBehavior href="/">
                          <a className="main-btn filled-btn filled-white mb-10">
                            How It Work
                          </a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section pt-95" id="about">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              <div className="section-title mb-55 wow fadeInLeft">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Tu hogar con vista al mar te espera
                </span>
                <h2>Ocean</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-content-box mb-55 wow fadeInRight">
                <p>
                Ocean Condominios es un exclusivo desarrollo frente al mar que ofrece terrenos desde 189 m² hasta 484 m². Su ubicación privilegiada en la Panamericana, frente a Cerrillos, lo convierte en la mejor opción para invertir o vivir rodeado de naturaleza y confort.
                </p>
                {/*<Link legacyBehavior href="/about">
                  <a className="btn-link">
                    Learn More
                    <i className="far fa-angle-double-right" />
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/ubicacion.png"
                    alt="Image"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-landscape-1" />
                  </div>
                  <h5 className="title">Ubicación</h5>
                  <p>Ubicación estratégica en Camaná</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/club.png"
                    alt="Image"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-watering-can" />
                  </div>
                  <h5 className="title">Club Privado</h5>
                  <p>Acceso a club privado</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/infraestructura.png"
                    alt="Image"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-lawnmower" />
                  </div>
                  <h5 className="title">Infraestructura</h5>
                  <p>Infraestructura moderna y segura</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="thumb">
                  <img
                    src="assets/images/features/piscina2.png"
                    alt="Image"
                  />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-spider-plant" />
                  </div>
                  <h5 className="title">Plusvalía</h5>
                  <p>Plusvalía garantizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-bg-section">
        {/*====== About BG ======*/}
        <div
          className="about-bg bg_cover wow fadeInLeft"
          style={{ backgroundImage: "url(assets/images/bg/about-bg-1.jpg)" }}
        />
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-6">
              {/*====== About Content Box ======*/}
              <div className="about-two_content-box pb-80 wow fadeInRight">
                <div className="section-title">
                  <div className="section-title mb-50">
                    <span className="sub-title">
                      <i className="flaticon-plant" />
                      Ocean
                    </span>
                    <h2>Seguridad y Exclusividad</h2>
                  </div>
                  <p className="mb-45">
                    Ocean Condominios es un desarrollo exclusivo en Camaná, diseñado como una mini ciudad privada con condominios, un club exclusivo y una zona comercial. Es una inversión de alta plusvalía para disfrutar todo el año-
                  </p>
                  <div className="about-inner-content d-flex justify-content-between">
                    <div className="inner-content">
                      <ul className="check-style-one mb-45">
                        <li>
                          <i className="far fa-check" />
                          Condominios Privados: Con urbanización de primer nivel.
                        </li>
                        <li>
                          <i className="far fa-check" />
                          Club Ocean: El Mas Grande de Arequipa, con piscina, spa y canchas deportivas.
                        </li>
                        <li>
                          <i className="far fa-check" />
                          Zona Comercial con tiendas, restaurantes y cine.
                        </li>
                        <li>
                          <i className="far fa-check" />
                          Áreas Recreativas: Parques , zona de parrillas y fogatas.
                        </li>
                      </ul>
                      {/*<Link legacyBehavior href="/about">
                        <a className="main-btn primary-btn">Learn More Us</a>
                      </Link> */}
                    </div>
                    <div className="experience-box-two">
                      <h2 className="number">
                        <Counter end={5000} />m2 +
                      </h2>
                      <h6>De áreas verde</h6>
                      {/*<Link legacyBehavior href="/about">
                        <a className="icon-btn">
                          <i className="far fa-arrow-right" />
                        </a>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-bgc-section p-r z-1 main-bg pt-150 pb-70" id="service">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/shape/leaf-1.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/shape/leaf-2.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="shape shape-three">
          <span>
            <img src="assets/images/shape/leaf-3.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              {/*====== Section Title ======*/}
              <div className="section-title text-white text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Servicios y Amenidades
                </span>
                <h2>Lo que te espera en Ocean</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-agriculture" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Club Privado</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-1.png"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInDown"
                data-wow-delay=".25s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-field-1" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-field-1" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Piscina</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-2.png"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-farming" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-farming" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Parques recreativos</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-3.png"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInDown"
                data-wow-delay=".35s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-park" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-park" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Canchas deportivas</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-4.png"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-rake" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-rake" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Vías afirmadas</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-5.png"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInDown"
                data-wow-delay=".45s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-growth-1" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-growth-1" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Zona de descanso</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-6.png"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Skills Section  ======*/}
      {/*<section className="skills-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-xl-6 col-lg-12">
              {/*====== Skill Content Box ======
              <div className="skill-content-box mb-35 mr-lg-50 wow fadeInLeft">
                {/*====== Section-title ======
                <div className="section-title mb-25">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    We’re Skilled Full
                  </span>
                  <h2>Experience Gardening &amp; Landscape Center</h2>
                </div>
                <p className="mb-30">
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantiue doloremque laudantium totam rem aperiam, eaque
                  ipsa quae abilloy inventore veritatis et quasi architecto
                  beatae vitae dicta sunt
                </p>
                {/*====== Skills List ======
                <ul className="skills-list">
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Gardening</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "89%" }}
                        />
                      </div>
                      <span className="number">89%</span>
                    </div>
                  </li>
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Landscape</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "83%" }}
                        />
                      </div>
                      <span className="number">83%</span>
                    </div>
                  </li>
                  <li>
                    <div className="single-skill-bar mb-15">
                      <h5 className="title">Maintenance</h5>
                      <div className="progress-bar">
                        <div
                          className="progress wow slideInLeft"
                          style={{ width: "93%" }}
                        />
                      </div>
                      <span className="number">93%</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*====== Skills Image Box ======
              <div className="skill-two_image-box mb-20 p-r z-1 wow fadeInRight">
                <img
                  src="assets/images/skill/skill-4.jpg"
                  className="skill-img-one"
                  alt="Skill Image"
                />
                <img
                  src="assets/images/skill/skill-5.jpg"
                  className="skill-img-two"
                  alt="Skill Image"
                />
                <div className="circle-logo">
                  <div className="inner-circle">
                    <i className="flaticon-carnivorous-plant" />
                    <h5>Gadden</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Skills Section  ======*/}
      {/*====== Start CTA Section ======*/}
      <section className="cta-section">
        <div className="container">
          {/*====== CTA Wrapper ======*/}
          <div className="cta-wrapper pt-60 border-top-1">
            <div className="row align-items-center">
              <div className="col-lg-9">
                {/*====== CTA Content Box ======*/}
                <div className="cta-content-box d-flex align-items-center mb-40 wow fadeInLeft">
                  <img
                    src="assets/images/gallery/circle-logo.png"
                    className="circle-logo"
                    alt="Circle Logo"
                  />
                  <h2>Testimonios</h2>
                </div>
              </div>
              <div className="col-lg-3">
                {/*====== CTA Button ======*/}
                {/*<div className="cta-button float-lg-right mb-40 wow fadeInRight">
                  <Link legacyBehavior href="/team">
                    <a className="main-btn golden-btn">Find Specialist</a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <section className="gallery-section">
        <div className="container-fluid">
          {/*====== Gallery Slider ======*/}
          <Slider
            {...sliderProps.projectsSliderTwo}
            className="projects-slider-two wow fadeInDown"
          >
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery/gl-4.jpg" alt="Gallery Image" />
                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="/product-details">
                        <a>Garden Caring</a>
                      </Link>
                    </h3>
                    <p>Water The Plants</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery/gl-5.jpg" alt="Gallery Image" />
                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="/product-details">
                        <a>Garden Caring</a>
                      </Link>
                    </h3>
                    <p>Water The Plants</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery/gl-6.jpg" alt="Gallery Image" />
                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="/product-details">
                        <a>Garden Caring</a>
                      </Link>
                    </h3>
                    <p>Water The Plants</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery/gl-7.jpg" alt="Gallery Image" />
                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="/product-details">
                        <a>Garden Caring</a>
                      </Link>
                    </h3>
                    <p>Water The Plants</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery/gl-6.jpg" alt="Gallery Image" />
                <div className="project-overlay">
                  <a href="#" className="icon-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                  <div className="hover-content text-white text-center">
                    <h3 className="title">
                      <Link legacyBehavior href="/product-details">
                        <a>Garden Caring</a>
                      </Link>
                    </h3>
                    <p>Water The Plants</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Gallery Section ======*/}
      {/*====== Start Pricing Section ======*/}
      {/*<section className="pricing-section pt-95 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              {/*====== Section-title ======
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Pricing Plan
                </span>
                <h2>Smart Pricing Package</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Pricing Item ======
              <div
                className="single-pricing-item mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="pricing-img">
                  <img
                    src="assets/images/pricing/pricing-1.jpg"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">Residential Package</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      <i className="fas fa-badge-check" />
                      Install a Patio or Pathway
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Install Landscaping
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Waterproof a Deck Costs
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Remove a Tree Stump
                    </li>
                  </ul>
                  <h2 className="price">
                    <span className="currency">$</span>19.36
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Get 23% Save For Services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Pricing Item ======
              <div
                className="single-pricing-item mb-40 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="pricing-img">
                  <img
                    src="assets/images/pricing/pricing-2.jpg"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">Commercial Package</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      <i className="fas fa-badge-check" />
                      Install a Patio or Pathway
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Install Landscaping
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Waterproof a Deck Costs
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Remove a Tree Stump
                    </li>
                  </ul>
                  <h2 className="price">
                    <span className="currency">$</span>39.47
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Get 23% Save For Services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Pricing Item ======
              <div
                className="single-pricing-item mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="pricing-img">
                  <img
                    src="assets/images/pricing/pricing-3.jpg"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">Industrial Package</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      <i className="fas fa-badge-check" />
                      Install a Patio or Pathway
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Install Landscaping
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Waterproof a Deck Costs
                    </li>
                    <li>
                      <i className="fas fa-badge-check" />
                      Remove a Tree Stump
                    </li>
                  </ul>
                  <h2 className="price">
                    <span className="currency">$</span>92.36
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Get 15% Save For Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Pricing Section ======*/}
      {/*====== Start Testimonial Section  ======*/}
      <section className="testimonial-section" id="testimonios">
        <div className="container-fluid">
          {/*====== Testimonial Wrapper ======*/}
          <div className="testimonial-wrapper main-bg wow fadeInDown">
            <div className="shape shape-one">
              <span>
                <img src="assets/images/testimonial/img-1.jpg" alt="image" />
              </span>
            </div>
            <div className="shape shape-two">
              <span>
                <img src="assets/images/testimonial/img-2.jpg" alt="image" />
              </span>
            </div>
            <div className="shape shape-three">
              <span>
                <img src="assets/images/testimonial/img-3.jpg" alt="image" />
              </span>
            </div>
            <div className="shape shape-four">
              <span>
                <img
                  src="assets/images/testimonial/tree.png"
                  alt="Tree image"
                />
              </span>
            </div>
            <div className="shape shape-five">
              <span>
                <img
                  src="assets/images/testimonial/tree2.png"
                  alt="Tree image"
                />
              </span>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  {/*====== Testimonial Slider  ======*/}
                  <Slider
                    {...sliderProps.testimonialSliderTwo}
                    className="testimonial-slider-two"
                  >
                    {/*====== Single Testimonial Item  ======*/}
                    <div className="single-testimonial-item-two">
                      <div className="quote-rating-box">
                        <div className="icon">
                          <img
                            src="assets/images/testimonial/quote2.png"
                            alt="quote icon"
                          />
                        </div>
                        <div className="ratings-box">
                          <h3>Quality Services</h3>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Sed persiciatis unde omnis iste natus voluptatem
                        accusantium doloremquey laudantium totam rem aperiam
                        eaque psa quae abillo inventore veritatis quas
                        architecto beatae dicta explicabo
                      </p>
                      <div className="author-thumb-title">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h6 className="title">Douglas D. Hall</h6>
                          <p className="position">CEO &amp; Founder</p>
                        </div>
                      </div>
                    </div>
                    {/*====== Single Testimonial Item  ======*/}
                    <div className="single-testimonial-item-two mb-60">
                      <div className="quote-rating-box">
                        <div className="icon">
                          <img
                            src="assets/images/testimonial/quote2.png"
                            alt="quote icon"
                          />
                        </div>
                        <div className="ratings-box">
                          <h3>Quality Services</h3>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Sed persiciatis unde omnis iste natus voluptatem
                        accusantium doloremquey laudantium totam rem aperiam
                        eaque psa quae abillo inventore veritatis quas
                        architecto beatae dicta explicabo
                      </p>
                      <div className="author-thumb-title">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h6 className="title">Douglas D. Hall</h6>
                          <p className="position">CEO &amp; Founder</p>
                        </div>
                      </div>
                    </div>
                    {/*====== Single Testimonial Item  ======*/}
                    <div className="single-testimonial-item-two mb-60">
                      <div className="quote-rating-box">
                        <div className="icon">
                          <img
                            src="assets/images/testimonial/quote2.png"
                            alt="quote icon"
                          />
                        </div>
                        <div className="ratings-box">
                          <h3>Quality Services</h3>
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Sed persiciatis unde omnis iste natus voluptatem
                        accusantium doloremquey laudantium totam rem aperiam
                        eaque psa quae abillo inventore veritatis quas
                        architecto beatae dicta explicabo
                      </p>
                      <div className="author-thumb-title">
                        <div className="author-thumb">
                          <img
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h6 className="title">Douglas D. Hall</h6>
                          <p className="position">CEO &amp; Founder</p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section  ======*/}
      {/*====== Start Blog Section  ======*/}
      {/*<section className="blog-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  News &amp; Blog
                </span>
                <h2>Read Latest News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*====== Single Blog Post  ======
              <div
                className="single-blog-post-two mb-40 wow wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="entry-content">
                  <div className="post-meta">
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2022</a>
                      </Link>
                    </span>
                    <span className="comment">
                      <Link legacyBehavior href="/blog-details">
                        <a>5 Comments</a>
                      </Link>
                    </span>
                  </div>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Progressively and Enhanced Accessible Filterable</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img
                      src="assets/images/blog/author-thumb-4.jpg"
                      alt="Author Image"
                    />
                    <h6>
                      <span>By</span>
                      <Link legacyBehavior href="/blog-details">
                        <a>Michael</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-4.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*====== Single Blog Post  ======
              <div
                className="single-blog-post-two mb-40 wow fadeInDown"
                data-wow-delay=".25s"
              >
                <div className="entry-content">
                  <div className="post-meta">
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2022</a>
                      </Link>
                    </span>
                    <span className="comment">
                      <Link legacyBehavior href="/blog-details">
                        <a>5 Comments</a>
                      </Link>
                    </span>
                  </div>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>High Contrast Mod Forceedy Colors Mode Custom</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img
                      src="assets/images/blog/author-thumb-5.jpg"
                      alt="Author Image"
                    />
                    <h6>
                      <span>By</span>
                      <Link legacyBehavior href="/blog-details">
                        <a>Michael</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-5.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              {/*====== Single Blog Post  ======
              <div
                className="single-blog-post-two mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="entry-content">
                  <div className="post-meta">
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2022</a>
                      </Link>
                    </span>
                    <span className="comment">
                      <Link legacyBehavior href="/blog-details">
                        <a>5 Comments</a>
                      </Link>
                    </span>
                  </div>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Enough Requirements For Accessible Components</a>
                    </Link>
                  </h4>
                  <div className="author">
                    <img
                      src="assets/images/blog/author-thumb-6.jpg"
                      alt="Author Image"
                    />
                    <h6>
                      <span>By</span>
                      <Link legacyBehavior href="/blog-details">
                        <a>Michael</a>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-6.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Blog Section  ======*/}
      <section className="contact-info-section pt-100">
        <div className="container">
          <div className="contact-info-wrapper wow fadeInUp">
            <div className="row no-gutters justify-content-center">
              <div className="col-lg-4 col-md-6">
                {/*====== Contact Info Item ======*/}
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img src="assets/images/icon/icon-1.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Ubicación</span>
                    <h6>Av. Víctor Andrés Belaúnde 526, Umacollo - Yanahuara</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/*====== Contact Info Item ======*/}
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img src="assets/images/icon/icon-2.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Email</span>
                    <h6>
                      <a href="mailto:support@gmail.com">comercial@ocean.com.pe</a>
                    </h6>
                    <h6>
                      <a href="mailto:infogarden.net">infogarden.net</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/*====== Contact Info Item ======*/}
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img src="assets/images/icon/icon-3.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Teléfono</span>
                    <h6>
                      <a href="tel:+000(123)45688">+51 905 446 254</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Info section ======*/}
      {/*====== Start Contact section ======*/}
      <section className="contact-section pt-95 pb-50" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*====== Section-title ======*/}
              <div className="section-title wow fadeInRight mb-50">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Contáctanos
                </span>
                <h2>Tu hogar ideal te espera</h2>
              </div>
            </div>
          </div>
          <div className="contact-wrapper">
            <div className="row">
              <div className="col-lg-6">
                {/*=== Map Box ===*/}
                <div className="map-box wow fadeInLeft mb-50">
                  <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                </div>
              </div>
              <div className="col-lg-6">
                {/*====== Contact Form Wrapper ======*/}
                <div className="contact-form-wrapper mb-50 wow fadeInRight">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="contact-form"
                  >
                    <div className="form_group">
                      <label>
                        <i className="far fa-user" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Nombre"
                        name="name"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <label>
                        <i className="far fa-envelope" />
                      </label>
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <label>
                        <i className="far fa-phone-plus" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Num. Teléfono"
                        name="number"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <label>
                        <i className="far fa-map-marker-exclamation" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Título"
                        name="subject"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <label>
                        <i className="far fa-pen-fancy" />
                      </label>
                      <textarea
                        className="form_control"
                        rows={3}
                        placeholder="Mensaje"
                        name="message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form_group">
                      <button className="main-btn primary-btn">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact section ======*/}
      {/*====== Start Partners Section ======*/}
      <Partners />
      {/*====== End Partners Section ======*/}
    </Layout>
  );
};
export default Index3;
