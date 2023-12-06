import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ arrayData, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {arrayData.length !== 0 &&
        arrayData.map(item => {
          return (
            <li key={item.id} onClick={() => openModal(item.largeImageURL)}>
              <ImageGalleryItem
                webformatURL={item.webformatURL}
                tags={item.tags}
              />
            </li>
          );
        })}
    </ul>
  );
};