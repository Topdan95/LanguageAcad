import React, {useEffect, useState} from 'react';
import "./Card.css";

import { CardData } from '../../data';
import PackagesCard from './PackagesCard';

const Card = () => {
        const [data, setData] = useState([]) 
      
        useEffect(() => {
          setData(CardData);
        },[])

  return (
    <>
    <section className="ambassador">
        <div className="packages">
            <p>Our approach to teaching is unique and our teachers are extremely highly rated. We<br />
            are affordable, simple, effective and very intensive </p>
            <h5>AMBASSADOR PACKAGES</h5>
        </div>
        <div className="carrds">
            {data.map((datum) => (<PackagesCard iconImage={datum.iconImage} name={datum.name} quality={datum.quality} grade={datum.grade} icon1Image={datum.icon1Image}/>))}
        </div>
    </section>
    </>
  )
}

export default Card