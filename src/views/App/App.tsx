import styles from './App.module.scss';
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Welcome from "../Welcome/Welcome";
import Login from "../Login/Login";
import Footer from "../../components/Footer/Footer";
import classNames from "classnames";
import { useEffect, useState } from 'react';
import Signin from '../Signin/Signin';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';

export default function App() {
  let location = useLocation();
  const [backgroundDefault, setBackgroundDefault] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      setBackgroundDefault(false);
    } else {
      setBackgroundDefault(true);
    }
  }, [location])

  return (
    <section className={classNames({
      [styles["main_background__welcome"]]: !backgroundDefault,
      [styles["main_background__default"]]: backgroundDefault
    })}>
      <Header />
      <main className={styles.main_container}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact-owner/:id' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}
