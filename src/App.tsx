import React, { useCallback } from 'react';
import ALLCARDS from './methods/createCards';
import { PriFloModal } from './priFloModal';
import * as MSC from './styled-components/prifloModalStyled';

const App = React.memo(() => {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = useCallback(() => setIsOpen(true),[]);
  const closeModal = useCallback(() => setIsOpen(false),[]);
  return (
    <>
      <PriFloModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
      <MSC.PorkerGameContainer>
        <button onClick={openModal}>プリフロップレンジゲーム　START</button>
      </MSC.PorkerGameContainer>
    </>
  );
});

export default App;
