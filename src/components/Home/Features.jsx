import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFeatures } from '../../features/feature/featureSlice';

import Loader from '../Loader';
import Feature from './Feature';

// https://dribbble.com/shots/15012941-Landing-Page-Hero-2

function Features() {
  const { features, isFeaturesLoading } = useSelector((store) => store.feature);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeatures());
  }, [dispatch]);

  return (
    <section
      id="features"
      className="container mx-auto px-6 sm:px-0 2xl:max-w-7xl mt-10"
    >
      <h1 className="text-center capitalize text-2xl text-blueSapphire font-semibold">
        Features
      </h1>
      <div className="border border-b-4 border-b-darkSalmon w-16 mx-auto mt-2 mb-6" />
      {isFeaturesLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          {features.map((feature) => (
            <Feature
              key={feature.id}
              img={feature.image}
              title={feature.title}
              id={feature.id}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Features;
