import './hero.scss'

const Hero = () => {
  return (
    <section className="header-section" aria-labelledby="header-title">
      <h1 id="header-title" className="header-section__title">
        10,000+ of our users love our products.
      </h1>
      <p className="header-section__description">
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
    </section>
  )
}

export default Hero