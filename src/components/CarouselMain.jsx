import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselMain() {
    return (
        <Carousel autoPlay={true}
            showThumbs={false}
            showIndicators={false}
            infiniteLoop={true}
            showStatus={false}
            interval={5000}
            transitionTime={1500}
            stopOnHover={false}
            animationHandler="fade"
        >

            {/* 1번째 캐러셀 */}
            <div className="w-full">
                <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="main carousel1" />
            </div>
            {/* 2번째 캐러셀 */}
            <div className="w-full">
                <img src="https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="main carousel2" />
            </div>
            {/* 3번째 캐러셀 */}
            <div className="w-full">
                <img src="https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1629&q=80" alt="main carousel2" />
            </div>
        </Carousel>
    )
}