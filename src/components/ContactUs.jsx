import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <section
      id="cta"
      className="container mx-auto px-6 sm:px-0 2xl:max-w-7xl mt-10"
    >
      <div className="flex flex-col justify-center items-center">
        <Link
          to="/contact"
          className="bg-blueSapphire md:w-1/3 rounded-md p-3 text-center text-2xl font-semibold text-white capitalize"
        >
          contact us
        </Link>
      </div>
    </section>
  );
}

export default ContactUs;
