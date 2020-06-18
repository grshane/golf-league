import React from 'react';
import Layout from '../../components/Layout';
import { data } from '../../lib/DATA';

interface Tee {
  name: string;
  rating?: number;
  par: number;
  length: number;
  f9length: number;
  b9length: number;
  readonly id: number;
  readonly courseId: number;
  holes: Array<Hole>;
}

type iTees = Array<Tee>

interface Course {
  readonly id: number;
  name: string;
}

interface Hole {
  number: number;
  handicap: number;
  par: number;
  length: number;
}

const Course: React.FC = () => {
  const { name, tees }: {name: string; tees: iTees} = data;
  // const renderTees = tees.map;
  const reducer = (accumulator: number, item: number): number => accumulator + item;
  return (
    <Layout title={`${name} Course`}>
      <h2>{name}</h2>
      {tees.map((tee: Tee) => {
        const {
          name: teeName, par, holes, length, f9length, b9length,
        } = tee;
        const hdisplay = holes.map((hole: Hole) => {
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
        const pars = holes.map((hole: Hole) => (hole.par));
        const f9par = pars.slice(0, 9).reduce(reducer, 0);
        const b9par = pars.slice(9).reduce(reducer, 0);
        return (
          <div key={teeName}>
            <h3>{teeName}</h3>

            <div>
              Par:
              {par}
            </div>
            <div>
              Length:
              {length}
            </div>
            <div className="flex">
              <div className="flex flex-col bg-green-700 text-white font-bold">
                <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6"
                >
                  Hole
                </div>
                <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6"
                >
                  Par
                </div>
                <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6"
                >
                  Handiap
                </div>
                <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6"
                >
                  Length
                </div>
                <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6"
                >
                  Strokes
                </div>
              </div>

              {hdisplay.slice(0, 9)}
              <div className="flex flex-col bg-green-700 text-white font-bold">
                <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6"
                >
                  OUT
                </div>
                <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6"
                >
                  {f9par}
                </div>
                <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6"
                >
                  {'\b'}
                </div>
                <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6"
                >
                  {f9length}
                </div>
                <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6"
                >
                  {'\b'}
                </div>
              </div>
              {hdisplay.slice(9)}
              <div className="flex flex-col bg-green-700 font-bold text-white">
                <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6"
                >
                  IN
                </div>
                <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6"
                >
                  {b9par}
                </div>
                <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6"
                >
                  {'\b'}
                </div>
                <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6"
                >
                  {b9length}
                </div>
                <div className="border-2 border-orange-500 border-solid justify-center text-center
  px-2 py-6"
                >
                  {'\b'}
                </div>
              </div>
            </div>

          </div>
        );
      })}
    </Layout>
  );
};
export default Course;
