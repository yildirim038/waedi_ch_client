import React from "react";
import ImageGallery from "react-image-gallery";
import { ImagesType } from "../../type/galleryType";

const GalleryCard: React.FC<{ images: ImagesType[] }> = ({ images }) => {
    return (
        <>
            <ImageGallery
                items={images}
                showPlayButton={true}
                showFullscreenButton={true}
                slideInterval={1000}
                slideOnThumbnailOver={true}
                showIndex={true}
                onPlay={() => {
                    alert("slideshow is now playing!");
                }}
            />
        </>
    )
}

export default GalleryCard;
