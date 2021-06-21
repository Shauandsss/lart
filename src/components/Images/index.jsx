import React from 'react';
import './images.scss'
import { useState } from 'react';
import infoIcon from './baseline_info_white_24dp.png'

export default () => {

    let images = []

    images.push('https://wallpaperaccess.com/full/1221809.jpg',
    'https://wallpaperaccess.com/full/1197513.jpg', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg/1280px-Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg'
    );

    const [scrollX, setScrollX] = useState(0);
    
    const handleLeftArrow = () => {
        let x = scrollX + window.innerWidth;
        if(x > 0) {
            x = 0;
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth)
        let listW = images.length * window.innerWidth
        if((window.innerWidth - listW) > x ){
            x = (window.innerWidth - listW)
        }
        setScrollX(x)
    }

    return (         
        <div className="movieRow--listarea">

            <img className="Icon--info" src={infoIcon} alt=""/>

            <div className="movieRow--list" style={{
                marginLeft :scrollX,
                transition: 'all ease 2s'
            }}>

                {images.map((val)=>{
                    return(<img src={val} alt="" /> )
                })}
                
             </div>
            <div class="buttons">    
                <button class="next" onClick={handleRightArrow}></button>
                <button class="prev" onClick={handleLeftArrow}></button>
            </div>
            
        </div>
    )

}