
function Card({image, name, review}) {
  return (
    <article className="review-card">
      <div className="review-card__header">
        <img className="review-card__image" src={image} alt={`${name}'s profile`} />
        <div className="review-card__info">
          <p className="review-card__name">{name}</p>
          <span className="review-card__badge">Verified Buyer</span>
        </div>
      </div>
      <p className="review-card__text">{review}</p>
    </article>
  )
}

export default Card