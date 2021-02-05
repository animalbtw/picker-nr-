import React from 'react';
import logo from '../assets/img/logo.png';
import st from '../assets/styles/Header.module.css';
import play from '../assets/img/play-solid.svg'
import pause from '../assets/img/pause-solid.svg'

function Header({isPlaying, setPlaying}) {
  return (
    <div className={st.header}>
      <div className={st.header_shadow} />
      <div className={st.header_bg_navbar}>
        <a href="https://blog.dota2.com/" className={st.header_bg_navbar_logo_link}>
          <img
            className={st.header_bg_navbar_logo_link_img}
            src={logo}
            alt="logo"
          />
        </a>
      </div>
      <div className={st.header_actions}>
        {
          isPlaying ? (
            <button
              className={st.header_actions_checker}
              onClick={() => setPlaying(!isPlaying)}>
              <img
                className={st.header_actions_checker_ico}
                src={pause}
                alt="pause"/>
            </button>
          ) : (
            <button
              className={st.header_actions_checker}
              onClick={() => setPlaying(!isPlaying)}>
              <img
                className={st.header_actions_checker_ico}
                src={play}
                alt="play"/>
            </button>
            )
        }
      </div>
    </div>
  );
}

export default Header;
