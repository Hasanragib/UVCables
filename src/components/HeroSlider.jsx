import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import "../styles/hero.css";

export default function HeroSlider() {
  const { HERO_SLIDES, heroSlide, nextSlide, prevSlide, goToSlide } = useApp();
  const slide = HERO_SLIDES[heroSlide];

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="hero" aria-label="Hero banner">
      {/* Slides */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`hero__slide${i === heroSlide ? " hero__slide--active" : ""}`}
          aria-hidden={i !== heroSlide}
        >
          <img
            src={s.image}
            alt={s.imageAlt}
            className="hero__slide-img"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="hero__slide-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="hero__content">
        <div className="hero__badge">
          🏭 Delhi NCR · B2B Cable Manufacturer · Custom MOQ
        </div>
        <h1 className="hero__h1" key={heroSlide}>
          {slide.headline.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="hero__accent">
            {slide.headline.split(" ").slice(-1)}
          </span>
        </h1>
        <p className="hero__tagline">{slide.sub}</p>
        <p className="hero__desc">{slide.desc}</p>
        <div className="hero__ctas">
          <Link
            to={slide.ctaLink}
            className="btn btn--primary hero__btn-primary"
          >
            {slide.cta} →
          </Link>
          <Link to="/contact" className="btn hero__btn-ghost">
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button
        className="hero__arrow hero__arrow--prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="hero__arrow hero__arrow--next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots */}
      <div className="hero__dots" role="tablist" aria-label="Slides">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero__dot${i === heroSlide ? " hero__dot--active" : ""}`}
            onClick={() => goToSlide(i)}
            role="tab"
            aria-selected={i === heroSlide}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
