import './MainSlideshow.scss'
import { useState, useEffect } from 'react'
import img1 from '/images/slideshow/slideshow_img_1.png'
import img2 from '/images/slideshow/slideshow_img_2.png'
import img3 from '/images/slideshow/slideshow_img_3.png'

const images = [img1, img2, img3]

function MainSlideshowLayout() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 10000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="main-slideshow">
            <div className="slideshow">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide ${
                            index === currentImageIndex ? 'active' : ''
                        }`}
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default MainSlideshowLayout
