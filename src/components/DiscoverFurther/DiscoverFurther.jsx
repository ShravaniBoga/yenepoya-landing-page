import card1 from '../../assets/images/card-1.jpg'
import card2 from '../../assets/images/card-2.jpg'
import card3 from '../../assets/images/card-3.jpg'
import './DiscoverFurther.css'

const CARDS = [
  { title: 'Gallery', text: 'A Glimpse into TYW', image: card1 },
  { title: 'News', text: 'Latest News and Updates', image: card2 },
  { title: 'Blogs', text: 'Latest News and Updates', image: card3 },
]

function DiscoverFurther() {
  return (
    <section className="discover">
      <div className="section-eyebrow">
        <h2>Discover Further</h2>
        <p>Explore More of The Yenopoya School Offerings</p>
      </div>

      <div className="container discover__grid">
        {CARDS.map((card) => (
          <div className="discover__card" key={card.title}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      <div className="discover__cta">
        <button className="btn-outline">Learn More</button>
      </div>
    </section>
  )
}

export default DiscoverFurther
