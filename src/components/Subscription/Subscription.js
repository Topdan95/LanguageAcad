import React from 'react';
import './Subscription.css';
import handsome from '../../images/handsome.svg'
import check from '../../images/check.svg'
import client from '../../images/client.png'
import doing from '../../images/doing.svg'
import lady from '../../images/lady.png'

const Subscription = () => {
  return (
    <section>
        <div className="sub">
            <div className="plan plans">
                <h6>SUBSCRIPTION PLAN AND BENEFITS</h6>
            </div>
            <div className="plan planns">
                <img src={handsome} alt="a man" />
                <p>Easier decision making for</p>
                <h6>ENTERPRISE AMBASSADOR</h6>
            </div>
            <div className="plan plannss">
                <img src={check} alt="checkbox" />
                <p>Learn one language free</p>
                <img src={check} alt="checkbox" />
                <p>Earn 10 dollars on every Diamond Plus<br />Ambassador registered</p>
                <img src={check} alt="checkbox" />
                <p>Earn 5  dollars on every Premium<br />Ambassador registered </p>
                <img src={check} alt="checkbox" />
                <p>Earn 3 dollars on every Enterprise Ambassador<br />registered </p>
                <img src={check} alt="checkbox" />
                <p>Earn 0 dollars on every Access Pro Ambassador<br />registered </p>
                <img src={check} alt="checkbox" />
                <p>Earn 10 dollars on every student you bring to<br />language academy </p>
                <img src={check} alt="checkbox" />
                <p>Earn 5 dollars each from all students your down<br />line register every month</p>
                <button className="button">Subscribe</button>
            </div>
        </div>
        <div className="sub">
            <div className="plan subs">
                <img src={client} alt="a woman" />
                <p>Easier decision making for</p>
                <h6>ACCESS PRO AMBASSADORS</h6>
            </div>
            <div className="plan subbs">
                <img src={check} alt="checkbox" />
                <p>Learn a language at 60% discount</p>
                <img src={check} alt="checkbox" />
                <p>Earn 0 dollars on every Diamond Plus<br />Ambassador registered</p>
                <img src={check} alt="checkbox" />
                <p>Earn 0  dollars on every Premium<br />Ambassador registered </p>
                <img src={check} alt="checkbox" />
                <p>Earn 0 dollars on every Enterprise Ambassador<br />registered </p>
                <img src={check} alt="checkbox" />
                <p>Earn 0 dollars on every Access Pro Ambassador<br />registered </p>
                <img src={check} alt="checkbox" />
                <p>Earn 10 dollars on every student you bring to<br />language academy </p>
                <img src={check} alt="checkbox" />
                <p>Earn 5 dollars each from all students your down<br />line register every month</p>
                <button className="button">Subscribe</button>
            </div>
        </div>
        <div className="sub">
        <div className="plan diamond">
                <img src={doing} alt="a man" />
                <p>Easier decision making for</p>
                <h6>DIAMOND AMBASSADORS</h6>
            </div>
            <div className="plan diamonds">
                <img src={check} alt="checkbox" />
                <p>Learn Two languages free</p>
                <img src={check} alt="checkbox" />
                <p>Earn 20 dollars on every Diamond Plus<br />Ambassador registered</p>
                <img src={check} alt="checkbox" />
                <p>Earn 10  dollars on every Premium<br />Ambassador registered </p>
                <img src={check} alt="checkbox" />
                <p>Earn 6 dollars on every Enterprise Ambassador<br />registered </p>
                <img src={check} alt="checkbox" />
                <p>Earn 0 dollars on every Access Pro Ambassador<br />registered </p>
                <img src={check} alt="checkbox" />
                <p>Earn 10 dollars on every student you bring to<br />language academy </p>
                <img src={check} alt="checkbox" />
                <p>Earn 5 dollars each from all students your down<br />line register every month</p>
                <button className="button">Subscribe</button>
            </div>
        </div>
        <div className="sub">
            <div className="plan premium">
                <img src={lady} alt="a lady" />
                <p>Easier decision making for</p>
                <h6>PREMIUM AMBASSADORS</h6>
            </div>
            <div className="plan premiums">
                <img src={check} alt="checkbox" />
                <p>Learn one language free</p>
                <img src={check} alt="checkbox" />
                <p>Earn 15 dollars on every Diamond Plus<br />Ambassador registered</p>
                <img src={check} alt="checkbox" />
                <p>Earn 10  dollars on every Premium<br />Ambassador registered </p>
                <img src={check} alt="checkbox" />
                <p>Earn 7.5 dollars on every Enterprise<br />Ambassador registered </p>
                <img src={check} alt="checkbox" />
                <p>Earn 0 dollars on every Access Pro Ambassador<br />registered </p>
                <img src={check} alt="checkbox" />
                <p>Earn 10 dollars on every student you bring to<br />language academy </p>
                <img src={check} alt="checkbox" />
                <p>Earn 5 dollars each from all students your down<br />line register every month</p>
                <button className="button">Subscribe</button>
            </div>
        </div>    
    </section>
  )
}

export default Subscription