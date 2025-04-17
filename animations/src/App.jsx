import { useCallback, useState } from 'react';
import './App.css';
import ItemToRemove from './ItemToRemove';
import Modal from './Modal';
import Tabs from './Tabs';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const [isShown, setShown] = useState(true);

  const removeHandler = useCallback(() => {
    setShown(false)
  }, [])

  return (
    <>
      <h1>Hello animations</h1>
      <hr />
      <h2>Simple transitions</h2>
      <input type="text" className="search-input" placeholder="Search..." />
      <button className="demo-button">Hover me</button>
      <hr />
      {isShown && <ItemToRemove removeHandler={removeHandler} />}

      <hr />
      <h2>UseState + transistions</h2>
      <Tabs />
      <hr />
      <h2>Keyframes</h2>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  )
}

export default App
