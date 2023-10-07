'use client'
import React, { useState } from 'react'
// import Video from '@mux/next-video';y
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import { Carousel } from 'react-bootstrap';
// import AliceCarousel from 'react-alice-carousel'
// import 'react-alice-carousel/lib/alice-carousel.css'
import Carousel2 from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Img1 from '@/public/category-01.png';
import Img2 from '@/public/category-02.png';
import Img3 from '@/public/category-03.png';
import Img4 from '@/public/category-04.png';
import Img5 from '@/public/category-05.png';
import Modal from 'react-modal'
import Image from 'next/image'
// import ReactPlayer from 'react-player';


// import vid1 from '@/public/videos/Course.mp4';




const storiesImg = [
  {
    _id: 1,
    title: "loren ipsum",
    img: Img1,
  },
  {
    _id: 2,
    title: "loren ipsum",
    img: Img2,
  },
  {
    _id: 3,
    title: "loren ipsum",
    img: Img3,
  },
  {
    _id: 4,
    title: "loren ipsum",
    img: Img4,
  },
  {
    _id: 5,
    title: "loren ipsum",
    img: Img5,
  },
  {
    _id: 6,
    title: "loren ipsum",
    img: Img1,
  },
  {
    _id: 7,
    title: "loren ipsum",
    img: Img2,
  },
  {
    _id: 8,
    title: "loren ipsum",
    img: Img3,
  },
  {
    _id: 9,
    title: "loren ipsum",
    img: Img4,
  },
  {
    _id: 10,
    title: "loren ipsum",
    img: Img5,
  },
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Stories = () => {
  const [isOpen, setIsOpen] = useState(false)
  const videos = [
    // { id: 1, url: vid1 },
    // { id: 1, url: "https://www.youtube.com/shorts/bqF5oBbOTU4?feature=share" }
    // { id: 2, url: "https://www.youtube.com/shorts/VBhPWehg3dg?feature=share" }
    // { id: 3, url: "https://www.youtube.com/shorts/VBhPWehg3dg?feature=share" }
  ]
  const storyModalOpen=()=>{
 
    setIsOpen(true)
  }


  return (
    <>

      <Modal ariaHideApp={false} isOpen={isOpen} onRequestClose={() => setIsOpen(false)} className='stories-carosuel'>
        <div onClick={() => setIsOpen(false)}>
          <div className='story-item'>
            {/* <AliceCarousel >
              {videos.map((element) => {
                return (
                  <div key={element.id} className='alice-carousel__stage-item'>
                    <ReactPlayer pip={true} controls={true} width="100%" height="100%" url={element.url} className="react-player" loop />
                  </div>
                )
              })}
            </AliceCarousel> */}
            {/* <video src={(require("../../../public/videos/Course.mp4"))} autoPlay style={{ width: '500px', height: '500px' }}> */}
            {/* <source type="video/mp4"/> */}
            {/* </video> */}
            {/* <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a> */}

          </div>
        </div>
        {/* <button onClick={() => setIsOpen(false)}>Close Modal</button> */}
      </Modal>

      <div className='category-section'>
        <Carousel2
          responsive={responsive}
          itemClass="carouselItem"
          autoPlay={true}
          swipeable={true}
          draggable={true}
          // showDots={true}
          infinite={true}
          partialVisible={true}
          arrows={false}
          style={{textAlign:"center"}}
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {storiesImg.map(element => {
            return (
              <div key={element._id} >
                <Image src={element.img} width={200} height={200} alt="story" onClick={storyModalOpen} style={{ cursor: "pointer", padding:"5px"}} />
              </div>
            )
          })}
        </Carousel2>
      </div>
    </>
  )
}

export default Stories;