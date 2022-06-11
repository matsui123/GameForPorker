import Modal, { Styles } from 'react-modal';
import { memo } from 'react';
import { ModalProps } from '../priFloModal';

type Props = ModalProps & any;
export const ModalWrapper: React.FC<Props>= memo(({modalIsOpen, children, closeModal}) => {

    const modalCSS = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'gray'
            },
        content: {
            position: 'absolute',
            top: '10px',
            left: '10px',
            right: '10px',
            bottom: '10px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '10px'
        }
        } as Styles;

    return(
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={modalCSS}
        >
            {children}
        </Modal>
    );

});