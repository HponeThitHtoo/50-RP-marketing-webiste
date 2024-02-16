import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';

function SharedLayout() {
  return (
    <div className="bg-white">
      <Navbar />
      <Outlet />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default SharedLayout;
