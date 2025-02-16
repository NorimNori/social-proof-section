import './rating.scss'
import starIcon from '../../assets/images/icon-star.svg';

const Rating = ({text}) => {
  return (
    <div className="rating" aria-labelledby="rating-text">
      <div className="rating__stars" role="img" aria-label="5-star rating">
      {Array(5).fill().map((_, i) => (
        <img key={i} src={starIcon} alt="" />
      ))}
      </div>
      <blockquote id="rating-text" className="rating__text">{text}</blockquote>
    </div>
  )
}

export default Rating