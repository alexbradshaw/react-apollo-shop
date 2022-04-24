import './Carousel.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { carouselImgs } from './Images';

const Carousel = () => {

    const [ imgIndex, setImgIndex ] = useState(0);

    return ( 
        <div className='carousel'>
            <img src={`../images/${carouselImgs[imgIndex].path}`} alt="Random photo carousel of random user listings" />
            {imgIndex > 0 && <button 
                className='left'
                onClick={() => setImgIndex(imgIndex - 1)}
            >
                left 
            </button>}
            {imgIndex < carouselImgs.length - 1 && <button 
                className='right'
                onClick={() => setImgIndex(imgIndex + 1)}
            > 
                right 
            </button>}
        </div>
        
     );
}
 
export default Carousel;