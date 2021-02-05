import * as React from 'react';
import st from '../assets/styles/DraftComponent.module.css';
import Store from '../store/Store';
import {observer} from "mobx-react-lite";
import HeroesBlock from "./HeroesBlock";
import int from '../assets/img/overviewicon_int.png';
import str from '../assets/img/overviewicon_str.png';
import agi from '../assets/img/overviewicon_agi.png';
import PickLane from "./PickLane";

const DraftComponent = observer(() => {
  const [startDraft, setStartDraft] = React.useState(false);
  const [renderOnes, setRenderOnes] = React.useState(true);
  const [chosenHero, setChosenHero] = React.useState({})

  const handleClick = () => {
    setStartDraft(true);
    if (renderOnes) {
      Store.get();
      setRenderOnes(false)
    }

    window.scroll({
      left: 0,
      top: 400,
      behavior: 'smooth',
    });

  };

  return (
    <div className={st.draftComponent_wrapper}>
      <div className={st.draftComponent}>
        <div className={st.draftComponent_content}>
          <div className={st.draftComponent_content_header}>
            Welcome to the Dota 2 Draft Simulator.
          </div>
          Here you can improve the skills of
          your picks in Captain Mod.
          <br/>
          Good luck!
        </div>
        <div className={st.draftComponent_action}>
          <button
            className={st.draftComponent_action_submit}
            type="button"
            onClick={handleClick}
          >
            Start drafts
          </button>
        </div>
      </div>
      {
        startDraft ? (
          <div className={st.wrapper}>
            <div className={st.draftComponent_heroes}>
              <div className={`${st.draftComponent_heroes_features} ${st.draftComponent_heroes_feature}`}>
                <div className={st.draftComponent_heroes_feature_header}>
                  <img src={str} alt="strength"/>
                  Strength
                </div>
                <div className={st.draftComponent_heroes_feature_items}>
                  {
                    Store.heroes
                      .filter(hero => hero.feature === 'Strength')
                      .map(hero => (
                        <button
                          onClick={() => setChosenHero(hero)}
                          className={st.draft_comp_button}
                          key={hero.createdAt}>
                          <HeroesBlock heroes={hero}/>
                        </button>
                      ))
                  }
                </div>
              </div>
              <div className={`${st.draftComponent_heroes_featurea} ${st.draftComponent_heroes_feature}`}>
                <div className={st.draftComponent_heroes_feature_header}>
                  <img src={agi} alt="agility"/>
                  Agility
                </div>
                <div className={st.draftComponent_heroes_feature_items}>
                  {
                    Store.heroes
                      .filter(hero => hero.feature === 'Agility')
                      .map(hero => (
                        <button
                          onClick={() => setChosenHero(hero)}
                          className={st.draft_comp_button}
                          key={hero.createdAt}>
                          <HeroesBlock heroes={hero}/>
                        </button>
                      ))
                  }
                </div>
              </div>
              <div className={`${st.draftComponent_heroes_featurei} ${st.draftComponent_heroes_feature}`}>
                <div className={st.draftComponent_heroes_feature_header}>
                  <img src={int} alt="intelligence"/>
                  Intelligence
                </div>
                <div className={st.draftComponent_heroes_feature_items}>
                  {
                    Store.heroes
                      .filter(hero => hero.feature === 'Intelligence')
                      .map(hero => (
                        <button
                          onClick={() => setChosenHero(hero)}
                          className={st.draft_comp_button}
                          key={hero.createdAt}>
                          <HeroesBlock heroes={hero}/>
                        </button>
                      ))
                  }
                </div>
              </div>
            </div>
            <div>
              <PickLane chosenHero={chosenHero}/>
            </div>
          </div>
        ) : null
      }
    </div>
  );
})

export default DraftComponent;
