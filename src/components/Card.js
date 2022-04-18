import star from '../images/Star1.png';

export default function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.country === "online") {
    badgeText = "ONLINE"
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={props.item.img} alt="althete" />
      <div className="card--rating">
        <img className="card--rating-star" src={star} alt="star"></img>
        <p className="card--rating-number">{props.item.rating}</p>
        <p className="card--rating-amount">({props.item.reviewCount}) • </p>
        <p className="card--rating-location">{props.item.country}</p>
      </div>
      <p className="card--content">{props.item.title}</p>
      <p className="card--price"><span className="card--price-bold">From {props.item.price} </span>/ person</p>
    </div>
  )
}
