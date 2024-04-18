import React, {useEffect, useState} from 'react';
import Logo from '../../img/logo7.png'
import HamburgerLogo from '../../img/menu-icon-min.svg'
import AccountIcon from '../../img/account_icon_138984 1.png'
import SearchIcon from '../../img/suche.png'
import LanguageSwitcher from './LanguageSwitcher';
import {useTranslation} from 'react-i18next';
import HamburgerMenu from './HamburgerMenu';
import { EventFormState, isAuthenticated } from '../../type/dataType';
import './Header.css'
import Login from './Login'
import { getEventData } from '../../services/eventService';
import { getDirectoryData } from '../../services/directoryService';
import { getGalleryData, getImageData } from '../../services/galleryService';
import { getInterviewData } from '../../services/interviewService';
import { DirectoryFormState } from '../../type/directoryTypes';
import { GalleryDataType, ImageType, ImagesType, ImgType } from '../../type/galleryType';
import { InterviewFormState } from '../../type/interviewTypes';
import Event from '../../components/Event/Event';
import CompanyCardUser from '../Directory/CompanyCardUser';
import InterviewUserCard from '../Interview/InterviewUserCard';
import GalleryCard from '../Gallery/GalleryCard';
import { token } from '../../untils/untils';
import { useNavigate } from 'react-router-dom';


const Header: React.FC<isAuthenticated> = ({ isAuthenticated,isModalOpen, onLogout, handleSomeAction,openModal,closeModal }) => {
  const role = JSON.parse(token).role;
  const [isOpen, setOpen] = useState(false);
  const onHamburgerMenu = () => setOpen(isOpen ? false : true);
  const {t} = useTranslation();
  const [allEvent, setAllEvent] = useState <EventFormState[]>([]);
  const [allDirectory, setAllDirectory] = useState<DirectoryFormState[]>([]);
  const [allGallery, setAllGallery] = useState<GalleryDataType[]>([]);
  const [allInterview,setAllInterview] = useState<InterviewFormState[]>([]);
  const [search ,setSearch] = useState("")
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  useEffect(()=>{
    getEventData(setAllEvent)
    getDirectoryData(setAllDirectory)
    getGalleryData(setAllGallery)
    getInterviewData(setAllInterview)
  },[])

  const [filterEvent, setFilterEvent] = useState<EventFormState[]>([])
  const [filterDirectory, setFilterDirectory] = useState<DirectoryFormState[]>([]);
  const [filterGallery, setFilterGallery] = useState<GalleryDataType[]>([]);
  const [filterInterview,setFilterInterview] = useState<InterviewFormState[]>([]);
  const [imageList, setImageList] = useState<ImageType[]>([]);

  useEffect(()=> {
    getImageData(setImageList);

  },[])

  const handelFilter =(event:any) => {
    setIsSearchModalOpen(true)
   if(search.length >1){
    event.preventDefault();
    const filterEvent = allEvent.filter(event => event.name.toUpperCase().includes( search.toUpperCase()) || 
                                                 event.adresse.toUpperCase().includes( search.toUpperCase()) || 
                                                 event.eventType.toUpperCase().includes( search.toUpperCase()) || 
                                                 event.ort.toUpperCase().includes( search.toUpperCase()) || 
                                                 event.text.toUpperCase().includes( search.toUpperCase())
                                        )
    setFilterEvent(filterEvent)

    const filterDirectory = allDirectory.filter(element => element.organization.toUpperCase().includes( search.toUpperCase()) || 
                                                           element.category.toUpperCase().includes( search.toUpperCase()) || 
                                                           element.companyType.toUpperCase().includes( search.toUpperCase()) || 
                                                           element.contactFirstname.toUpperCase().includes( search.toUpperCase()) || 
                                                           element.contactLastname.toUpperCase().includes( search.toUpperCase()) || 
                                                           element.ort.toUpperCase().includes( search.toUpperCase())
                                                           )
    setFilterDirectory(filterDirectory)

    const filterGallery = allGallery.filter(element => element.name.toUpperCase().includes( search.toUpperCase()) ||
                                                       element.description.toUpperCase().includes( search.toUpperCase()) 
                                                       )
    setFilterGallery(filterGallery)
    const filterInterview = allInterview.filter(element => element.title.toUpperCase().includes( search.toUpperCase()) || 
                                                           element.author.toUpperCase().includes( search.toUpperCase()) || 
                                                           element.coverText.toUpperCase().includes( search.toUpperCase()) || 
                                                           element.descriptionOfImage.toUpperCase().includes( search.toUpperCase()))
    setFilterInterview(filterInterview)
   } else {
    alert("Bitte schreiben Sie mindestens 2 Buchstaben.")
   }
  }
  const galleryAllData: GalleryDataType[] = filterGallery.map(gallery => {
    const images: ImgType[] = imageList.filter(image => image.photoGalleryId === gallery.id)
    const newImages: ImagesType[] = images.map(image => ({
       original: `http://localhost:3001/images/${image.image}`,
       thumbnail: `http://localhost:3001/images/${image.image}`
    }))
    return { ...gallery, images, newImages };
 });
 const navigate = useNavigate();
 const handelAdmin = () => {
  navigate('/userUpdate');
 }

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light">
          <a className="navbar-brand col-5 col-sm-3 col-md-2" href="/"><img src={Logo} alt="waedi_ch" className=" col-12 offset-md-1"/></a>
          <button className="hamburger-menu-button"onClick={onHamburgerMenu} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <img className="hamburger-menu" src={HamburgerLogo} alt='hamburger-menu' />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <form className="d-flex form-container offset-sm-3  col-4">
              <input className="me-2 search-input" placeholder="Search" aria-label="Search" value={search} onChange={e => setSearch(e.target.value )}/>
              <button className="btn search-icon-button" onClick={(event) => handelFilter(event)} type="submit"><img src={SearchIcon} alt="search" className='search-icon'/></button>
            </form>
            <span className="col-4  offset-4 offset-sm-1 d-flex justify-content-end align-items-center">
              <LanguageSwitcher/>
              {role === "admin" ? ( <><img src={AccountIcon} onClick={handelAdmin} alt="AccountIcon" className="offset-1 col-1 col-md-1"/></>):
              (<> <img src={AccountIcon} alt="AccountIcon" className="offset-1 col-1 col-md-1"/></>)}
              {role !== "" ? (<button onClick={onLogout}className="login header-button">{t('header_logout')}</button>) 
              : (<button onClick={openModal}  className='login'>{t('header_login')}</button>)}
              {isModalOpen && (
                <div>
                  <Login closeModal= {closeModal} handleSomeAction={handleSomeAction|| (() => {})} />
                </div>
              )}
            </span>
          </div>
      </nav>
      {isOpen && <HamburgerMenu isAuthenticated={isAuthenticated} onLogout={onLogout}/>}
      <div className='page-navigation'>
        <nav className="nav justify-content-center">
            <a className="navigation-element" href="/">{t('nav_home')}</a>
            <a className="navigation-element" href="/events">{t('nav_event')}</a>
            <a className="navigation-element" href="/directory">{t('nav_directories')}</a>
            <a className="navigation-element" href="/gallery">{t('nav_photo_gallery')}</a>
            <a className="navigation-element" href="/interviews">Interviews</a>
            <a className="navigation-element" href="/advert">Werbung</a>
            <a className="navigation-element" href="/contact">Kontakt</a>
            <a className="navigation-element" href="/market">Markt</a>
            <a className="navigation-element" href="/info">Info</a>
            <a className="navigation-element" href="/history">{t('nav_history')}</a>
          </nav>
      </div>
      {isSearchModalOpen && (
          <div className='search-list-container'>
        {filterEvent.length > 0 && ( <div className='row'> <h2 className='text-center'>Event</h2> { filterEvent.map(event => <Event data = {event}/> )}</div>)}
        {filterDirectory.length > 0 && (<div> <h2 className='text-center'>Company</h2>{ filterDirectory.map(company => <CompanyCardUser data = {company}/>)}</div>)}
        {filterInterview.length>0 && (<div><h2 className='text-center'>Interview</h2> { filterInterview.map(interview => <InterviewUserCard interview = {interview}/>)}</div>)}
        {filterGallery.length>0 && (
            <div>
              <h2 className='text-center'>Gallery</h2>
                {galleryAllData.map((gallery, index) => (
                  <div className="col-12 sm col-sm-5 col-md-4 m-auto px-3 py-5" key={index}>
                      <div className="gallery-header-container ">
                        <h4 className="gallery-header mb-3">{gallery.name}</h4>
                      </div>
                      <GalleryCard images={gallery.newImages} />
                  </div>
                ))}
            </div>
          )
        }
        {filterGallery.length === 0 && filterDirectory.length === 0 && filterEvent.length===0 && filterInterview.length===0 &&
          (<h3 className='text-center m-5 '>Für das gesuchte „{search}“ wurden keine Daten gefunden</h3>)}
        <button onClick={() => setIsSearchModalOpen(false)}>Close</button>
      </div>
      )}
    </header>
  );
};
export default Header;