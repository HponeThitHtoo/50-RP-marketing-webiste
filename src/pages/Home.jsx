import React from 'react';

import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';

function Home() {
  return (
    <>
      <Hero />

      <section
        id="info"
        className="container mx-auto px-6 sm:px-0 2xl:max-w-7xl mt-8"
      >
        <div className="p-5 border-2 rounded-md border-cadetBlue">
          <h1 className="text-center capitalize text-2xl text-blueSapphire font-semibold">
            New Released Gaming PC
          </h1>

          <p className="text-slate-700 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            culpa. Perferendis maxime autem obcaecati sapiente, dicta nemo
            commodi id ratione cum, corporis quasi veniam rerum sit, possimus
            quisquam ducimus quo. Similique provident in unde officia
            praesentium exercitationem recusandae qui corporis, velit, soluta
            optio deserunt ipsa vitae asperiores reiciendis esse ullam!
          </p>
        </div>
      </section>

      <Features />
    </>
  );
}

export default Home;
