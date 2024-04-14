import React from 'react'
import Crousel from '../components/Crousel'

const Home = () => {
    const images = [
        '/slider_images/crousel-image-1.jpg',
        '/slider_images/crousel-image-2.jpg',
    ];
    return (
        <>
            <div className='overflow-hidden'><Crousel images={images} /></div>
        </>
    )
}

export default Home
