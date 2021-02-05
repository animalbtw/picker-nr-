import * as React from 'react';
import st from './assets/styles/App.module.css';
import DraftComponent from './components/DraftComponent';
import Header from './components/Header';
import video from './assets/video/bp_aegis_header.mp4';

function App() {
  const [isPlaying, setIsPlaying] = React.useState(false)

  React.useEffect(() => {
    const bg_video = document.getElementById('bg_video')
    if (!isPlaying) {
      bg_video.pause()
    } else {
      bg_video.play()
    }
  }, [isPlaying])

  return (
    <div className={st.app}>
      <video
        id='bg_video'
        className={st.app_video}
        autoPlay
        muted
        loop
      >
        <source src={video}/>
      </video>
      <div className={st.app_header}>
        <Header
          setPlaying={setIsPlaying}
          isPlaying={isPlaying}/>
      </div>
      <div className={st.app_content}>
        <DraftComponent/>
      </div>
    </div>
  );
}

export default App;
