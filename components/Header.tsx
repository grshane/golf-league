import React from 'react';
import Link from 'next/link';


const Header = () => (
  <div id="header" className="flex flex-row w-full px-4 py-8 bg-green-300">
    <div className="px-4">Golf League</div>
    <nav className="flex flex-row">
      <Link href="/scorecard">
        <a className="px-4 hover:underline">Scorecard</a>
      </Link>
      <Link href="/course">
        <a className="px-4 hover:underline">Course</a>
      </Link>
      <Link href="/matches">
        <a className="px-4 hover:underline">Matches</a>
      </Link>
    </nav>
  </div>
);

export default Header;
