import './App.scss'
import Hero from '@/components/hero/index'
import { ratings, reviews } from './assets/variables/variables'
import Rating from './components/rating/Rating'
import Card from './components/card'

function App() {


  return (
    <main>
      <Hero />
      <section className="ratings">
      {ratings.map((rating, index) => (
        <Rating key={index} text={rating.text} />
      ))}
    </section>
    <section className="reviews">
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
