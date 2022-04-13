import heroImage from '../images/group77.png'

export default function Hero() {
  return (
    <section>
      <div className="hero--image">
        <img src={heroImage} alt="hero"></img>
      </div>
      <div className="hero--experiences">
        <h1 className="hero--title">
          Online Experiences
        </h1>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </section>
  )
}
