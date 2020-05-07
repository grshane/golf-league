import React from 'react';
import { number } from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
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
  holes: Hole[];
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
  const renderTees = tees.map;
  const reducer = (accumulator, item) => accumulator + item;
  return (
    <div>
      <h2>{name}</h2>
      {tees.map((tee: Tee) => {
        const {
          name: teeName, par, rating, holes, length, f9length, b9length,
        } = tee;
        const hdisplay = holes.map((hole: Hole) => {
          const {
            number: holeNumber, handicap: holeHandicap, par: holePar, length: holeLength,
          } = hole;
          return (
            <Hole key={holeNumber}>
              <Items>{holeNumber}</Items>
              <Items>{holePar}</Items>
              <Items>{holeHandicap}</Items>
              <Items>{holeLength}</Items>
              <Items>{'\b'}</Items>
            </Hole>
          );
        });
        console.log(holes);
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
            <Grid>
              <Hole>
                <Items>Hole</Items>
                <Items>Par</Items>
                <Items>Handiap</Items>
                <Items>Length</Items>
                <Items>Strokes</Items>
              </Hole>

              {hdisplay.slice(0, 9)}
              <Hole>
                <Items>OUT</Items>
                <Items>{f9par}</Items>
                <Items>{'\b'}</Items>
                <Items>{f9length}</Items>
                <Items>{'\b'}</Items>
              </Hole>
              {hdisplay.slice(9)}
              <Hole>
                <Items>IN</Items>
                <Items>{b9par}</Items>
                <Items>{'\b'}</Items>
                <Items>{b9length}</Items>
                <Items>{'\b'}</Items>
              </Hole>
            </Grid>

          </div>
        );
      })}
    </div>
  );
};

const Hole = styled.div`
  ${tw`flex flex-col`}
`;

const Grid = styled.div`
  ${tw`flex`}
`;

const Items = styled.div`
  ${tw`border-2 border-orange-500 border-solid justify-center text-center 
  px-2 py-6 bg-green-400 odd:bg-green-200`}
`;
export default Course;
