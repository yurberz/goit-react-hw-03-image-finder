import Li from "./ImageGalleryItemStyled";

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onOpenModal,
}) => {
  return (
    <Li>
      <img
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        className="ImageGalleryItem-image"
        onClick={onOpenModal}
      />
    </Li>
  );
};

export default ImageGalleryItem;
