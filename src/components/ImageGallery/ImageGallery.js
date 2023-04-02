import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ items }) => {
  return (
    <>
      <ul className={css.imageGallery}>
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.array,
};
