import React from "react";
import { Howl } from "howler";
import { Link } from "react-router-dom";

const Podcast = ({ data, pathname }) => {
  //const [sound, setSound] = useState(null);
  //const [isPlay, setIsPlay] = useState(false);
  //const [playText, setPlayText] = useState("Play");

  let sound = null;
  let isPlay = false;

  //useEffect(() => {
  //  if (isPlay) {
  //    sound.play();
  //  } else if (!isPlay) {
  //    sound.pause();
  //  }
  //}, [sound, isPlay]);

  const soundStop = () => {
    if (sound != null) {
      sound.stop();
      sound.unload();
      sound = null;
      //setSound(null);
    }
  };

  const soundPlay = (src) => {
    //let index = i;
    //let key;

    //this.setState(
    //  (prevState) => {
    //    let sound = { ...prevState.sound };
    //    sound = new Howl({
    //      src,
    //      html5: true,
    //    });
    //   return { sound };
    //  },
    //  () => {
    //    key = this.state.sound.play();
    //    this.setState(
    //      (prevState) => ({
    //        keys: {
    //          ...prevState.keys,
    //          [index]: key,
    //        },
    //      }),
    //     () => {
    //        console.log(this.state.keys);
    //      }
    //    );
    //  }
    //);
    if (sound != null) {
      if (isPlay) {
        sound.pause();
        //setPlayText("Play");
        //setIsPlay(false);
        isPlay = false;
      } else {
        sound.play();
        //setPlayText("Pause");
        //setIsPlay(true);
        isPlay = true;
      }
    } else {
      //setSound(new Howl({ src, html5: true }));
      sound = new Howl({ src, html5: true });
      //setIsPlay(true);
      isPlay = true;
      sound.play();
      //setPlayText("Pause");
    }
  };

  return (
    <div>
      <h1>{data.title}</h1>
      <button onClick={() => soundPlay(data.enclosure.url)}>
        Play / Pause
      </button>
      <button onClick={soundStop}>Stop</button>
      <Link to="/">
        <button onClick={soundStop}>Home</button>
      </Link>
    </div>
  );
};

export default Podcast;
