import React, { useEffect } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getFeature } from '../features/feature/featureSlice';

import Loader from '../components/Loader';

function FeaturePage() {
  const { isFeatureLoading, feature } = useSelector((store) => store.feature);
  console.log(isFeatureLoading);
  const { featureId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect run');
    dispatch(getFeature({ featureId }));
    console.dir('useEffect', { featureId, isFeatureLoading, feature });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, featureId]);

  // console.dir({ featureId, isFeatureLoading, feature });

  return (
    <section className="container mx-auto px-6 sm:px-0 2xl:max-w-7xl">
      {isFeatureLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row border border-[2rem] rounded-md border-slate-50">
          <div className="w-full md:w-2/5">
            <img
              src={feature.image}
              alt="Feature"
              className="w-full h-full bg-slate-50 object-contain"
            />
          </div>
          <div className="w-full md:w-3/5 flex justify-center items-center p-8 bg-slate-50 ">
            <div className="flex flex-col justify-center items-start space-y-5">
              <h1 className="uppercase text-2xl font-bold text-blueSapphire">
                {feature.title}
              </h1>
              <ul className="flex flex-col items-start space-y-3 py-4">
                {feature.facts.map((fact) => (
                  <li
                    className="flex justify-center items-center space-x-3"
                    key={fact}
                  >
                    <span className="text-cadetBlue">
                      <BsFillCheckCircleFill />
                    </span>
                    <span className="text-cadetBlue">{fact}</span>
                  </li>
                ))}
              </ul>
              <div className="flex">
                <button
                  type="button"
                  className="bg-blueSapphire text-white px-6 py-2 rounded-lg"
                >
                  Sign Up
                </button>
              </div>
              <div>
                <h5 className="text-blueSapphire capitalize font-semibold">
                  your pleasure is our treasure.
                </h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturePage;
