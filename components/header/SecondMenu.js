import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 3000, min: 1200 },
        items: 12
    },
    desktop: {
        breakpoint: { max: 1200, min: 900 },
        items: 7
    },
    tablet: {
        breakpoint: { max: 900, min: 600 },
        items: 5
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 3
    }
};
const SecondMenu = ({ data }) => {

    return (
        <div className='w-[90%] h-[60%] flex justify-center items-center mt-[70px] mx-auto mb-[10px]'>
            <div className='w-[20%] mr-0'>
                <span className='text-white bg-[#007bff] block text-center py-[10px] px-auto h-[30px]'>ALL Categories</span></div>
            <div className='w-[80%]'><Carousel
                itemClass="p-[5px] text-left justify-start"
                partialVisible={false}
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={true}
                // showDots={true}
                infinite={false}
                arrows={true}>
                {data.map((element, index) => {
                    return (
                        <div key={index}> <Link href="#"><span className='text-white bg-[#007bff] block py-2.5 px-auto h-[30px]' key={element.id}>{element.name}</span></Link></div>
                    )
                })}
            </Carousel></div>
        </div>
    )
}

export default SecondMenu