import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './cardData'

function App() {
  const cardElements = cardData.map(item => {
    return <Card
      key={item.id}
      item={item}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards">
        {cardElements}
      </div>
    </div>
  );
}

export default App;
