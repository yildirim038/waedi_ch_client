import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getImageData } from '../../services/galleryService';
import { ImagesType, ImageType } from '../../type/galleryType';
import GalleryCard from '../Gallery/GalleryCard';

const HomeGalleryComponent: React.FC = () => {
  const [imageList, setImageList] = useState<ImageType[]>([]);


  useEffect(() => {
    getImageData(setImageList);
  }, []);

  const galleryNumbers: string[] = Array.from(
    new Set(imageList.map((image) => image.photoGalleryId))
  );

  const navigate = useNavigate();
  const goGallery = () => navigate('/gallery');

  const gallerys: ImageType[][] = galleryNumbers.map((galleryNumber) =>
  imageList.filter((image) => image.photoGalleryId === galleryNumber)
);

const latestGallery = gallerys.reverse()[0];

const images: ImagesType[] = latestGallery
  ? latestGallery.map((image) => ({
      original: `http://localhost:3001/images/${image.image}`,
      thumbnail: `http://localhost:3001/images/${image.image}`,
      id:image.photoGalleryId,
      header:""
    }))
  : [];

return (
    <div className='row'>
      <div className='col-12 col-sm-2  gallery-left-container'>
        <h2>Fotogalerie</h2>
        <button className='all-gallery-button all-homePage-button' onClick={()=>goGallery()}>All Gallerys</button>
        <div>
     
        </div>
      </div>
      <div className='col-12 col-sm-8 col-md-6 m-auto'>
      <GalleryCard  images={images} />
      </div>
    </div>
  );
};

export default HomeGalleryComponent;
