import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import FeaturePage from './pages/FeaturePage';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="features">
          <Route path=":featureId" element={<FeaturePage />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default WrappedApp;
