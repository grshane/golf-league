import React from 'react';
import { Hole } from '../interfaces';

const HoleDisplay = ({ holes }: {holes: Array<Hole>}) => holes.map((hole: Hole) => {
  const {
    number: holeNumber, handicap: holeHandicap, par: holePar, length: holeLength,
  } = hole;
  return (
    <div key={holeNumber} className="bg-green-700">
      <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6 odd:bg-green-300 even:text-white"
      >
        {holeNumber}
      </div>
      <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6 odd:bg-green-300 even:text-white"
      >
        {holePar}
      </div>
      <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6 odd:bg-green-300 even:text-white"
      >
        {holeHandicap}
      </div>
      <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6 odd:bg-green-300 even:text-white"
      >
        {holeLength}
      </div>
      <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6 bg-white"
      >
        {'\b'}
      </div>
    </div>
  );
});

export default HoleDisplay;
