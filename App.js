import React, {useState, useRef} from 'react';
import Swiper from 'react-native-deck-swiper';
import Card from './components/Card';
import OverlayLike from './components/OverlayLike';
import OverlayDislike from './components/OverlayDislike';
import styles from './App.styles';

const App = () => {
  const useSwiper = useRef(null).current;
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const handleOnSwipedLeft = () => {
    setLike(true);
    setTimeout(() => {
      setLike(false);
    }, 1000);
  };
  const handleOnSwipedRight = () => {
    setDislike(true);
    setTimeout(() => {
      setDislike(false);
    }, 1000);
  };

  const pokemon = [
    {
      name: 'Squirtle',
      photo:
        'https://vignette.wikia.nocookie.net/fantendo/images/e/ec/SquirtleSSBC.png/revision/latest?cb=20170905004354',
    },
    {
      name: 'Charizard',
      photo: 'https://www.smashbros.com/images/character/lizardon/main.png',
    },
    {
      name: 'Pikachu',
      photo:
        'https://vignette.wikia.nocookie.net/p__/images/9/93/Pikachu_SSBU.png/revision/latest?cb=20180613150000&path-prefix=protagonist',
    },
    {
      name: 'Ivysaur',
      photo:
        'https://i.pinimg.com/originals/da/37/70/da377089ac6fa73600f9bb3263e1e025.png',
    },
    {
      name: 'Dragonite',
      photo:
        'https://vignette.wikia.nocookie.net/pokemon/images/1/1a/Support_Dragonite.png/revision/latest?cb=20160115234030',
    },
  ];
  return (
    <>
      {like && <OverlayLike />}
      {dislike && <OverlayDislike />}

      <Swiper
        onSwipedLeft={handleOnSwipedLeft}
        onSwipedRight={handleOnSwipedRight}
        ref={useSwiper}
        animateCardOpacity
        containerStyle={styles.container}
        cards={pokemon}
        renderCard={card => <Card item={card} />}
        cardIndex={0}
        backgroundColor="white"
        stackSize={2}
        infinite
      />
    </>
  );
};

export default App;
