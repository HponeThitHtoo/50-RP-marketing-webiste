import { useState } from 'react';
import { AiFillWechat } from 'react-icons/ai';
import { ImLocation2, ImPhone } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import { sendContact } from '../features/contact/contactSlice';

// https://dribbble.com/shots/20082214-Contact-page-Untitled-UI

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // eslint-disable-next-line no-unused-vars
  const { isLoading, contact } = useSelector((store) => store.contact);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !name || !message) {
      toast.warn('Please fill all fields');
    } else {
      const id = uuidv4();
      dispatch(sendContact({ id, name, email, message }));
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section className="container mx-auto px-6 sm:px-0 2xl:max-w-7xl mt-8">
      <div className="flex flex-col md:flex-row p-9 space-y-5 md:space-y-0 md:space-x-10 border-4 border-black rounded-3xl">
        <div className="w-full md:w-1/4 space-y-12">
          <div className="flex items-start space-x-5">
            <div className="border-2 border-gray-300 p-2 rounded-md">
              <AiFillWechat />
            </div>
            <div className="flex flex-col justify-start space-y-1">
              <h5 className="text-lg font-semibold">Chat to us</h5>
              <p className="text-gray-600">
                Our friendly team is here to help.
              </p>
              <p>hi@itgarden.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-5">
            <div className="border-2 border-gray-300 p-2 rounded-md">
              <ImLocation2 />
            </div>
            <div className="flex flex-col justify-start space-y-1">
              <h5 className="text-lg font-semibold">Visit us</h5>
              <p className="text-gray-600">Come say hello at our office HQ.</p>
              <p>100 Smith Street</p>
              <p>Collingwood VIC 3066 AU</p>
            </div>
          </div>
          <div className="flex items-start space-x-5">
            <div className="border border-2 border-gray-300 p-2 rounded-md">
              <ImPhone />
            </div>
            <div className="flex flex-col justify-start space-y-1">
              <h5 className="text-lg font-semibold">Call us</h5>
              <p className="text-gray-600">Mon-Fri from 8am to 5pm.</p>
              <p>+1 (555) 000-0000</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 w-full md:w-3/4 px-16 py-10 rounded-xl">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold capitalize text-cadetBlue">
              any question? feel free to contact us.
            </h1>
            <p className="text-lg text-cadetBlue">
              Your pleasure is our treasure.
            </p>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your name"
                className="bg-slate-50 border-b-2 border-cadetBlue placeholder:text-cadetBlue focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="you@company.com"
                className="bg-slate-50 border-b-2 border-cadetBlue placeholder:text-cadetBlue focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                id="message"
                rows="3"
                placeholder="Let us know what you want to enquiry"
                className="resize-none bg-slate-50 border-b-2 border-cadetBlue placeholder:text-cadetBlue focus:outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="p-2 rounded-md bg-darkSalmon text-blueSapphire text-center font-bold uppercase"
              >
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
