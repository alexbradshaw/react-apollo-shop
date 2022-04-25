import './Carousel.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { carouselImgs } from './Images';

const Carousel = () => {

    const [ imgIndex, setImgIndex ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        imgIndex < carouselImgs.length - 1 ? setImgIndex(imgIndex + 1) : setImgIndex(0);
    }, 3000);
        return () => clearInterval(interval);
    }, [imgIndex]);

    // create curried function for cleaner onClick events
    // avoids the need for arrow functions in the jsx
    const decrementIndex = (num) => () => setImgIndex(imgIndex - num);
    const incrementIndex = (num) => () => setImgIndex(imgIndex + num);

    return ( 
        <div className='carousel'>

            <img 
                src={`../images/${carouselImgs[imgIndex].path}`} 
                alt="Random photo carousel of random user listings" 
            />
            
            {imgIndex > 0 && <button 
                className='left'
                onClick={decrementIndex(1)}
            >
                left 
            </button>}

            {imgIndex < carouselImgs.length - 1 && <button 
                className='right'
                onClick={incrementIndex(1)}
            > 
                right 
            </button>}

        </div>
        
     );
}
 
export default Carousel;