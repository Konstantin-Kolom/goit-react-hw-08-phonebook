// import { useEffect, useState } from 'react';

import s from './css/HomePage.module.css';

export default function HomePageViews() {
  return (
    <section className={s.section}>
      <div>
        <h1 className={s.title}>Welcome!</h1>
        <p className={s.text}>Service - You phonebook</p>
      </div>
      <div className={s.box}>
        <p className={s.box_text}>Please enter your login or register to use the application:</p>
        <button type="button" className={s.box_btn}>
          Registration
        </button>
        <button type="button" className={s.box_btn}>
          Login{' '}
        </button>
      </div>
    </section>
  );
}
