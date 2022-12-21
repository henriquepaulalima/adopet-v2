import styles from './App.module.scss';
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Welcome from "../Welcome/Welcome";
import Login from "../Login/Login";
import Footer from "../../components/Footer/Footer";
import classNames from "classnames";
import { useEffect, useState } from 'react';

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
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}
