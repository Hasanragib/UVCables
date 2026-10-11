import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import "../styles/hero.css";

export default function HeroSlider() {
  const { HERO_SLIDES, heroSlide, nextSlide, prevSlide, goToSlide } = useApp();
  const slide = HERO_SLIDES[heroSlide];

  // Preload Slide 1 ONLY when the HeroSlider actually mounts
  useEffect(() => {
    if (HERO_SLIDES && HERO_SLIDES.length > 0) {
      const firstImg = HERO_SLIDES[0].image;

      // Inject preload link using Vite's exact resolved image URL
      let link = document.querySelector(
        `link[rel="preload"][href="${firstImg}"]`,
      );
      if (!link) {
        link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.type = "image/webp";
        link.href = firstImg;
        document.head.appendChild(link);
      }
    }
  }, [HERO_SLIDES]);

  // Auto-advance every 3 seconds.
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
            // Slide 1 loads eagerly; Slides 2 & 3 load lazily
            loading={i === 0 ? "eager" : "lazy"}
            // Signals high priority download for the 1st image to boost LCP
            fetchpriority={i === 0 ? "high" : "low"}
            // Prevents main-thread blocking on decoding
            decoding={i === 0 ? "sync" : "async"}
            // Explicit dimensions prevent Cumulative Layout Shift (CLS)
            width="1920"
            height="1080"
          />
          <div className="hero__slide-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="hero__content">
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
