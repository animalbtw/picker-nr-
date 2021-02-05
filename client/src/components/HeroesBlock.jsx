import * as React from 'react';
import st from '../assets/styles/StrengthHeroes.module.css'

function HeroesBlock({heroes}) {

  return (
    <div className={st.HeroesTable}>
      <img
        className={st.HeroesTable_img}
        src={process.env.REACT_APP_API_URL + heroes.img}
        alt={heroes.name}/>
    </div>
  );
}

export default HeroesBlock;
