import { ReactElement, useState } from 'react';
import './App.css';

type Item = {
  title: string;
  content: ReactElement;
}

type Items = Item[]

const items: Items = [
  { title: 'Pizzas', content: <ul><li>Reine</li><li>Chorizo</li><li>Saumon</li></ul> },
  { title: 'Beers', content: <ul><li>IPA</li><li>Guinness</li><li>Tripel Karmeliet</li></ul> },
  { title: 'Extras', content: <ul><li>Extra pizza</li><li>Extra beer</li><li>Extra pizza + beer</li></ul> }
];

function CollapsableItems({ items }: { items: Items }) {
  const [currentItem, setCurrentItem] = useState(-1)

  const handleItemClicked = (index: number) => {
    setCurrentItem(currentItem === index ? -1 : index)
  }

  return (
    <div className="collapsable-items">
      {items.map((item, index) => (
        <div key={index} className='collapsable-item'>
          <div onClick={() => handleItemClicked(index)} className="collapsable-item-header">
            <span className={index === currentItem ? 'opened' : 'closed'}>🡆</span> {item.title}
          </div>
          <div className="collapsable-item-content">
            {index === currentItem && item.content}
          </div>
        </div>
      ))}
    </div>
  )
}

function App() {
  return (
    <>
      <CollapsableItems items={items} />
    </>
  )
}

export default App
