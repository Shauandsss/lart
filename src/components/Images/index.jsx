import React from 'react';
import './images.scss'
import { useState } from 'react';
import infoIcon from './baseline_info_white_24dp.png'

export default () => {

    let images = []

    images.push(['Michelangelo: The Creation of Adam', 'The Creation of Adam (Italian: Creazione di Adamo) is a fresco painting by Italian artist Michelangelo, which forms part of the Sistine Chapel"s ceiling, painted c. 1508–1512. It illustrates the Biblical creation narrative from the Book of Genesis in which God gives life to Adam, the first man. The fresco is part of a complex iconographic scheme and is chronologically the fourth in the series of panels depicting episodes from Genesis. \n The painting has been reproduced in countless imitations and parodies.[2] Michelangelo"s Creation of Adam is one of the most replicated religious paintings of all time.', 'https://wallpaperaccess.com/full/1221809.jpg']);
    images.push(['The Birth of Venus', 'The Birth of Venus (Italian: Nascita di Venere [ˈnaʃʃita di ˈvɛːnere]) is a painting by the Italian artist Sandro Botticelli, probably made in the mid 1480s. It depicts the goddess Venus arriving at the shore after her birth, when she had emerged from the sea fully-grown (called Venus Anadyomene and often depicted in art). The painting is in the Uffizi Gallery in Florence, Italy.', 'https://wallpaperaccess.com/full/1197513.jpg']);
    images.push(['The Course of Empire', 'The Course of Empire is a series of five paintings created by Thomas Cole in the years 1833–1836. It is notable in part for reflecting popular American sentiments of the times, when many saw pastoralism as the ideal phase of human civilization, fearing that empire would lead to gluttony and inevitable decay. The theme of cycles is one that Cole returned to frequently, such as in his The Voyage of Life series. The Course of Empire comprises the following works: The Course of Empire – The Savage State; The Arcadian or Pastoral State; The Consummation of Empire; Destruction; and Desolation. All the paintings are oil on canvas, and all are 39.5 inches by 63.5 inches (100 cm by 161 cm) except The Consummation of Empire which is 51″ by 76″ (130 cm by 193 cm).', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg/1280px-Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg']);
    images.push(['The Fallen Angel', 'The L’Ange Dechu, or Fallen Angel, may be one of the hottest artworks ever made. A winged nude shields his face behind flexed arms. His mane of hair snaps in the wind, and brows curl over red-rimmed eyes and a tear of anger. His body, of course, is perfect. His posture appears reposed, but each muscle is flexed with potential energy. Cast from heaven—this is the moment before he rises again.', 'https://arthistoryproject.com/site/assets/files/11712/alexandre_cabanel-fallen_angel-1847-obelisk-art-history.webp'])
    images.push(['The Consummation of Empire', "Cole's 1833 sketch for the arrangement of the paintings around Reed's fireplace: the sketch also shows above the paintings three aspects of the sun: left (rising); center (zenith); right (setting) The Savage State The Consummation Destruction The Arcadian or Pastoral State Desolation", 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Cole_Thomas_The_Consummation_The_Course_of_the_Empire_1836.jpg/1920px-Cole_Thomas_The_Consummation_The_Course_of_the_Empire_1836.jpg'])

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
        console.log(images)
    }

    return (         
        <div className="Row--listarea">

            <img className="Icon--info" src={infoIcon} alt=""/>

            <div className="Row--list" style={{
                marginLeft :scrollX,
                transition: 'all ease 2s'
            }}>

                {images.map((val)=>{
                    return(
                    <div className="Main">
                        <img src={val[2]} alt="" />
                        <div className="Text">
                            <h1 className="Text--Title">{val[0]}</h1>
                            <h3 className="Text--Content">{val[1]}</h3>
                        </div>
                    </div> 
                    )
                })}
                
              

            </div>
            <div class="buttons">    
                <button class="next" onClick={handleRightArrow}></button>
                <button class="prev" onClick={handleLeftArrow}></button>
            </div>
            
        </div>
    )

}