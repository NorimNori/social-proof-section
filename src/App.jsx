import './App.scss'
import Hero from '@/components/hero/index'
import { ratings, reviews } from '@/assets/variables/variables'
import Rating from '@/components/rating/Rating'
import Card from '@/components/card'

function App() {


  return (
    <main>
      <Hero />
      <section className="ratings" role="region" aria-labelledby="ratings-title">
      <h2 id="ratings-title" className="sr-only">User Ratings</h2>
      {ratings.map((rating, index) => (
        <Rating key={index} text={rating.text} />
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
  )
}

export default App
