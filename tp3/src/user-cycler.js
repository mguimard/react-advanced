import { useState } from 'react';

function useCycler(array) {

  let [currentIndex, setCurrentIndex] = useState(0)
  let [currentValue, setCurrentValue] = useState(array[currentIndex]);

  return [currentValue,
    () => {
      let nextIndex = (array.length + currentIndex - 1) % array.length;
      let nextValue = array[nextIndex]

      setCurrentIndex(nextIndex)
      setCurrentValue(nextValue)
    },
    () => {
      let nextIndex = (currentIndex + 1) % array.length;
      let nextValue = array[nextIndex]

      setCurrentIndex(nextIndex)
      setCurrentValue(nextValue)
    }]
}

export default useCycler