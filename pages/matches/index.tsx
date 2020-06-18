import React from 'react';
import matchesData from '../../lib/MATCHES-DATA';
import Layout from '../../components/Layout';

// type Match = {
//   firstPlayer: MatchPlayer;
//   secondPlayer: MatchPlayer;
//   nine: Nine;
// }

// enum Tee {
//   Men = 'MEN'
// }

// enum Nine {
//   Front = 'front',
//   Back = 'back'
// }

// interface PlayerInfo {
//   name: string;
//   firstname: string;
//   lastname: string;
//   handicap: string;
//   teeplayed: Tee;
//   id: string;
//   playerrank: string;
// }

// interface MatchPlayer {
//   player: PlayerInfo;
//   holes: object;
//   handicap: string;
//   strokesGetting: object | null;
// }
const matches: React.FC = () => (
  <Layout title="Match">
    {matchesData.map((match, index) => {
      const {
        player1: { player: firstPlayer, holes: holes1 },
        player2: { player: secondPlayer },
      } = match;
      return (
        <div className="grid grid-col-match grid-flow-row match">
          <h2 className="text-3xl col-span-10">
            Match
            {' '}
            {index + 1}
          </h2>
          <div className="col-span-2">
            {firstPlayer.firstname}
            {' '}
            {firstPlayer.lastname}
          </div>
          <div className="col-span-2">
            <span>Handicap: </span>
            {firstPlayer.handicap}
          </div>
          <div className="col-span-2">
            <span>Tee: </span>
            {firstPlayer.teeplayed}
          </div>


          <div className="col-start-1 col-span-2">
            {secondPlayer.firstname}
            {' '}
            {secondPlayer.lastname}
          </div>
          <div className="col-span-2">
            <span>Handicap: </span>
            {secondPlayer.handicap}
          </div>
          <div className="col-span-2">
            <span>Tee: </span>
            {secondPlayer.teeplayed}
          </div>
          <div className="col-start-1">
            <div className="h-8 border-2 bg-green-500 text-white px-4">Hole</div>
            <div className="h-8 border-2 border-t-0 bg-green-500 text-white px-4">Handicap</div>
            <div className="h-8 border-2 border-t-0 bg-green-500 text-white px-4">Par</div>
            <div className="h-8 border-2 border-t-0 bg-green-500 text-white px-4">Length</div>
            <div className="h-8 border-2 border-t-0 text-right px-4">
              {firstPlayer.firstname}
              {' '}
              {firstPlayer.lastname}
            </div>
            <div className="h-8 border-2 border-t-0 text-right px-4">
              {secondPlayer.firstname}
              {' '}
              {secondPlayer.lastname}
            </div>
          </div>
          {holes1.map((h) => (
            <div className="flex flex-col align-center text-center">
              <div className="h-8 border-l-0 border-2">{h.number}</div>
              <div className="h-8 border-r-2 border-b-2">{h.handicap}</div>
              <div className="h-8 border-r-2 border-b-2">{h.par}</div>
              <div className="h-8 border-r-2 border-b-2">{h.length}</div>
              <div className="h-8 border-r-2 border-b-2" />
              <div className="h-8 border-r-2 border-b-2" />
            </div>
          ))}
        </div>
      );
    })}

  </Layout>
);

export default matches;
