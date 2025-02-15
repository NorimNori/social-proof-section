const Rating = ({text}) => {
  return (
    <div className="rating">
      <div className="rating__stars"></div>
      <p className="rating__text">{text}</p>
    </div>
  )
}

export default Rating