// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import s from './css/HomePage.module.css';
<Link></Link>;

export default function HomePageViews() {
  return (
    <section className={s.section}>
      <div>
        <h1 className={s.title}>Welcome!</h1>
        <p className={s.text}>Service - You phonebook</p>
      </div>
      <div className={s.box}>
        <p className={s.box_text}>Please enter your login or register to use the application:</p>
        <Link to="/register">
          <button type="button" className={s.box_btn}>
            Registration
          </button>
        </Link>
        <Link to="/login">
          <button type="button" className={s.box_btn}>
            Login{' '}
          </button>
        </Link>
        ;
      </div>
    </section>
  );
}
