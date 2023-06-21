import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

const Layout = ({ search, setSearch }) => {
  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout