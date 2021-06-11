import React from 'react';
import ImageGallery from 'react-image-gallery';
import sponsor1 from '../images/8.jpeg';
import sponsor2 from '../images/bingo.jpeg';
import sponsor3 from '../images/byggcomfort.jpeg';
import sponsor4 from '../images/byggkretsen.jpeg';
import sponsor5 from '../images/cg.jpeg';
import sponsor6 from '../images/habasit.jpeg';
import sponsor7 from '../images/hindasbyggservice.jpeg';
import sponsor8 from '../images/justnu.jpeg';
import sponsor9 from '../images/strand.jpeg';
import sponsor10 from '../images/tripnet.jpeg';

const images = [
    {
        original: sponsor1
    },
    {
        original: sponsor2
    },
    {
        original: sponsor3
    },
    {
        original: sponsor4
    },
    {
        original: sponsor5
    },
    {
        original: sponsor6
    },
    {
        original: sponsor7
    },
    {
        original: sponsor8
    },
    {
        original: sponsor9
    },
    {
        original: sponsor10
    },
];

const SponsorGallery = () => {
    return(
        <ImageGallery 
            items={images} 
            lazyLoad={true} 
            showNav={false}
            showThumbnails={false}
            autoPlay={true}
            showPlayButton={false}
        />
    )
}

export default SponsorGallery; 