import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const ScorecardForm: React.FC = (props) => (
  <ScorecardWrapper>
    <Items>Hole</Items>
    <Items>1</Items>
    <Items>2</Items>
    <Items>3</Items>
    <Items>4</Items>
    <Items>5</Items>
    <Items>6</Items>
    <Items>7</Items>
    <Items>8</Items>
    <Items>9</Items>
    <Items>Total</Items>
    <Spacer />
    <Items>Men</Items>
    <Items>316</Items>
    <Items>294</Items>
    <Items>309</Items>
    <Items>144</Items>
    <Items>490</Items>
    <Items>245</Items>
    <Items>361</Items>
    <Items>184</Items>
    <Items>473</Items>
    <Items>2816</Items>
    <Spacer />
    <Items>Par</Items>
    <Items>4</Items>
    <Items>4</Items>
    <Items>4</Items>
    <Items>3</Items>
    <Items>5</Items>
    <Items>4</Items>
    <Items>4</Items>
    <Items>3</Items>
    <Items>5</Items>
    <Items>36</Items>
    <Spacer />
    <Items>Handicap</Items>
    <Items>7</Items>
    <Items>11</Items>
    <Items>5</Items>
    <Items>15</Items>
    <Items>13</Items>
    <Items>17</Items>
    <Items>1</Items>
    <Items>9</Items>
    <Items>3</Items>
    <Items />
    <Spacer />
    <Team>#1 Team 1</Team>
    <Items>Total</Items>
    <Items>Hcp</Items>
    <Items>Net</Items>
    <Items>Points</Items>
    <Items>Name</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>27</Items>
    <Items>27</Items>
    <Items>Points</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items />
    <Items>27</Items>
    <Items>27</Items>
    <Items>Gold</Items>
    <Items>249</Items>
    <Items>238</Items>
    <Items>224</Items>
    <Items>140</Items>
    <Items>456</Items>
    <Items>241</Items>
    <Items>282</Items>
    <Items>181</Items>
    <Items>392</Items>
    <Items>2403</Items>
    <Spacer />
    <Items>Handicap</Items>
    <Items>11</Items>
    <Items>7</Items>
    <Items>13</Items>
    <Items>17</Items>
    <Items>3</Items>
    <Items>15</Items>
    <Items>5</Items>
    <Items>9</Items>
    <Items>1</Items>
    <Items />
    <Spacer />
    <Team>#1 Team 1</Team>
    <Items>Total</Items>
    <Items>Hcp</Items>
    <Items>Net</Items>
    <Items>Points</Items>
    <Items>Name</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>27</Items>
    <Items>27</Items>
    <Items>Points</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items>3</Items>
    <Items />
    <Items>27</Items>
    <Items>27</Items>
    <Items>Gold</Items>
    <Items>249</Items>
    <Items>238</Items>
    <Items>224</Items>
    <Items>140</Items>
    <Items>456</Items>
    <Items>241</Items>
    <Items>282</Items>
    <Items>181</Items>
    <Items>392</Items>
    <Items>2403</Items>
    <Spacer />
    <Items>Handicap</Items>
    <Items>11</Items>
    <Items>7</Items>
    <Items>13</Items>
    <Items>17</Items>
    <Items>3</Items>
    <Items>15</Items>
    <Items>5</Items>
    <Items>9</Items>
    <Items>1</Items>
    <Items />
    <Spacer />

  </ScorecardWrapper>
);

const ScorecardWrapper = styled.div`
  ${tw`grid border-2 border-green-500 w-full`};
  grid-template-columns: 3fr repeat(9, 1fr) 1.5fr 1fr 1fr 2fr;
`;

const Items = styled.div`
  ${tw`border-2 border-orange-500 border-solid justify-center text-center`}
`;

const Spacer = styled.div`
  ${tw`col-start-12 col-span-3`}
`;

const Team = styled.div`
  ${tw`col-span-10`}
`;

export default ScorecardForm;
