import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <img src={webformatURL} alt={tags} className={css.ImageGalleryItemImage} />
  );
};