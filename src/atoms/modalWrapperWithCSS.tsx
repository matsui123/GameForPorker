import ReactModal from 'react-modal';
import { memo, useCallback, useState } from 'react';

export const ModalWrapperWithCSS: React.FC<any>= memo(({children}) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = useCallback(() => setIsOpen(true),[]);
    const closeModal = useCallback(() => setIsOpen(false),[]);

    return(
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
        >
            {children}
        </ReactModal>
    );

});