import React from "react";
import ImageGallery from "react-image-gallery";
import { ImagesType } from "../../type/galleryType";

const GalleryCard: React.FC<{ images: ImagesType[] }> = ({ images }) => {
    return (
        <div className="bg-dark">
            <ImageGallery
                items={images}
                showPlayButton={true}
                showFullscreenButton={true}
                slideInterval={5000}
                slideOnThumbnailOver={true}
                showIndex={false}
                
            
            />
        </div>
    )
}

export default GalleryCard;
