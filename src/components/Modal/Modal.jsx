import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBасkdrор, ModalContent } from './Modal.style';
const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseBackdrop();
    }
  };

  onClickBackdrop = e => {
    const currentEl = e.currentTarget;
    const targettEl = e.target;

    if (currentEl === targettEl) {
      this.props.onCloseBackdrop();
    }
  };
  render() {
    return createPortal(
      <>
        <ModalBасkdrор onClick={this.onClickBackdrop}>
          <ModalContent>{this.props.children}</ModalContent>
        </ModalBасkdrор>
      </>,
      modalRoot
    );
  }
}
// портал(createPortal) для модалки вместо z-index
