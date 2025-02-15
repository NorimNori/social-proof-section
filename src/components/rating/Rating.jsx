const Rating = ({text}) => {
  return (
    <div className="rating" role="region" aria-labelledby="rating-text">
      <div className="rating__stars" role="img" aria-label="5-star rating"></div>
      <p id="rating-text" className="rating__text">{text}</p>
    </div>
  )
}

export default Rating