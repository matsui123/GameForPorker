import React, { useCallback, useState } from 'react';
import ALLCARDS from './methods/createCards';
import { PriFloModal } from './modal/priFloModal';
import * as MSC from './styled-components/prifloModalStyled';

const App = React.memo(() => {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = useCallback(() => setIsOpen(true),[]);
  const closeModal = useCallback(() => setIsOpen(false),[]);
  const [clickedCard, setClickedCard] = useState<string | undefined>();

  const CARDS = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

  const onclick = (card: string) => {
    setClickedCard(card);
    openModal();
  }
  return (
    <>
      <PriFloModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        clickedCard={clickedCard}
      />
      <MSC.PorkerGameContainer>
        <button onClick={openModal}>ALLプリフロップレンジゲーム　START</button>
        {CARDS.map(ca =>
          <button  key={ca} onClick={() => onclick(ca)}>{ca}の段:プリフロップレンジゲーム　START</button>
        )}


      </MSC.PorkerGameContainer>
    </>
  );
});

export default App;
