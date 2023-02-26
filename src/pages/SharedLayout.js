import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      {/* do outlet se vždy dosadí componenta */}
      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayout;
