import { useState } from 'react';

function useRandom() {
  let [rand, setRand] = useState(Math.random())
  return [rand, () => setRand(Math.random())]
}

export default useRandom