import './card.scss'

function Card({image, name, review}) {
  return (
    <article className={`review-card review-card__${name.replace(/ /g, "-")}`} aria-labelledby={`review-title-${name.replace(/ /g, "-")}}`}>
      <div className="review-card__header">
        <img className="review-card__image" src={image} alt={`Profile picture of ${name.replace(/ /g, "-")}}`} />
        <div className="review-card__info">
          <p id={`review-title-${name.replace(/ /g, "-")}}`} className="review-card__name">{name}</p>
          <span className="review-card__badge" aria-label="Verified Buyer">Verified Buyer</span>
        </div>
      </div>
      <p className="review-card__text">{review}</p>
    </article>
  )
}

export default Card