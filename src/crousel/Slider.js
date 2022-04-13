import React from 'react';
import Images from './SliderData';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useState } from 'react';


const Slider = () => {
    const [count, setCount] = useState(0);
    const length = Images.length;

    const leftClick = () => {
        setCount(count === 0 ? length - 1 : count - 1);
    }

    const rightClick = () => {
        setCount(count === length - 1 ? 0 : count + 1);
    }
    return (
        <>
            <div className="w-full relative flex justify-center">
                <BsChevronRight className="absolute top-1/2 right-5 bg-white text-4xl cursor-pointer p-1 rounded-sm text-black" onClick={rightClick} />
                <BsChevronLeft className="absolute top-1/2 left-5 bg-white text-4xl cursor-pointer p-1 rounded-sm text-black" onClick={leftClick} />
                {
                    Images.map((val, index) => {
                        return (<>
                        {
                            count === index && (<img className="w-full h-96" src={val.image} alt="Slider" />)
                        }
                            
                        </>);
                    })
                }
            </div>

        </>
    )
}

export default Slider
