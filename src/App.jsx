import './App.scss'
import Hero from '@/components/hero/index'
import { ratings, reviews } from '@/assets/variables/variables'
import Rating from '@/components/rating/Rating'
import Card from '@/components/card'

function App() {


  return (
    <>
    <main>
      <Hero />
      <section className="ratings" role="region" aria-labelledby="ratings-title">
      <h2 id="ratings-title" className="sr-only">User Ratings</h2>
      {ratings.map((rating, index) => (
        <Rating key={index} text={rating.text} index={index}/>
      ))}
    </section>
    <section className="reviews" role="region" aria-labelledby="reviews-title">
    <h2 id="reviews-title" className="sr-only">Customer Reviews</h2>
      {reviews.map((review, index) => (
        <Card 
          key={index}
          image={review.image}
          name={review.name}
          review={review.review}
        />
      ))}
    </section>
    </main>
    <footer className="footer" role="contentinfo">
      <p className="footer__text">
        Challenge by <a className="footer__link" href="https://www.frontendmentor.io?ref=challenge" target="_blank" title="Visit Frontend Mentor">Frontend Mentor</a>. 
        Coded by <a className="footer__link" href="https://www.frontendmentor.io/profile/NorimNori" title="Visit Gloria Rangel's profile">Gloria Rangel</a>.
      </p>
    </footer>
    </>
  )
}

export default App
