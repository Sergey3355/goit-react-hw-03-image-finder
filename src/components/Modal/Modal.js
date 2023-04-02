import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const ModalRoot = document.querySelector('#ModalRoot');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  onBackdropClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { largeImageURL } = this.props.image;
    return createPortal(
      <div onClick={this.onBackdropClose} className={css.Modal_backdrop}>
        <div className={css.Modal_content}>
          <img src={largeImageURL} alt="img" />
        </div>
      </div>,
      ModalRoot
    );
  }
}
