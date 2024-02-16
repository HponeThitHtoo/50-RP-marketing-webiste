import { useState, useRef } from 'react';
import { IoAtSharp } from 'react-icons/io5';
import { BiLockAlt } from 'react-icons/bi';
import { BsGoogle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { toast } from 'react-toastify';
import { registerUser } from '../features/user/useSlice';
import { useNonInitialEffect } from '../utils/useNonInitialEffect';

import { SingUpSVG } from '../assets/index';

// <a href="https://storyset.com/document">Document illustrations by Storyset</a>
// https://storyset.com/illustration/consent/rafiki
// https://dribbble.com/shots/14455889-Sign-Up-Form

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAgree, setTermsAgree] = useState(false);

  const { existedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAgree) {
      toast.warning(
        'You need to agree terms and conditions to create an account!'
      );
    } else if (!email || !password) {
      console.log({ email, password });
      toast.warning('You must fill all fields!');
    } else {
      const id = uuidv4();
      dispatch(registerUser({ id, email, password }));
    }
  };

  /* const initialRender = useRef(true);

  useEffect(() => {
    console.log('firstTime');
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      console.log('Second Time');
      console.log('useEffect existed user', existedUser);
      if (existedUser.length === 1) {
        setEmail(existedUser[0].email);
        setPassword(existedUser[0].password);
      } else {
        setEmail('');
        setPassword('');
        setTermsAgree(true);
      }
    }
  }, [existedUser]); */

  const cleanUp = () => {
    if (existedUser?.length === 1) {
      setEmail(existedUser[0].email);
      setPassword(existedUser[0].password);
      emailRef.current.focus();
    } else {
      setEmail('');
      setPassword('');
      setTermsAgree(true);
    }
  };

  useNonInitialEffect(cleanUp, [existedUser]);

  return (
    <section className="container mx-auto px-6 sm:px-0 2xl:max-w-7xl mt-8">
      <div className="flex flex-col md:flex-row">
        <div className="hidden md:block w-full md:w-1/2 xl:max-h-[75vh] bg-slate-50">
          <img
            src={SingUpSVG}
            alt="sign up"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 md:mx-16 space-y-3">
          <h5 className="text-gray-500">Start for free</h5>
          <h1 className="text-2xl font-bold">Sign up to IT Garden</h1>
          <p className="text-gray-500">
            already a member?{' '}
            <a href="/" className="text-blue-500">
              Log In
            </a>
          </p>

          <form action="" className="space-y-4" onSubmit={handleSubmit}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="email">E-mail</label>
            <div className="flex items-center border-2 rounded-md">
              <input
                type="email"
                name="email"
                id="email"
                className="flex-1 p-2 focus:outline-none"
                ref={emailRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="flex-none p-2">
                <IoAtSharp className="text-xl text-gray-400" />
              </span>
            </div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="password">Password</label>
            <div className="flex items-center border-2 rounded-md">
              <input
                type="password"
                name="password"
                id="password"
                className="flex-1 p-2 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="flex-none p-2">
                <BiLockAlt className="text-xl text-gray-400" />
              </span>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-blueSapphire text-cultured hover:brightness-75"
            >
              Create an account
            </button>
            <button
              type="submit"
              className="flex justify-center items-center w-full py-3 space-x-2 border-2 rounded-md hover:brightness-75"
            >
              <BsGoogle className="text-blue-600" />
              <span>Sign up with Google</span>
            </button>
            <div className="flex items-baseline space-x-2">
              <input
                type="checkbox"
                name="term"
                id="term"
                checked={termsAgree}
                onChange={() => setTermsAgree((agree) => !agree)}
              />
              <p>By signing up you agreed our terms and conditions</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
