import React from 'react'

const PackagesCard = ({iconImage, name, quality, grade, icon1Image}) => {
    return (
        <div className="carrd">
              <div className="icon">
                <img src={iconImage} alt="one" />
              </div>
              <div>
                <h3>{name}</h3>
                <p>{quality}</p>
                <h6><span>{grade}</span></h6>
              </div>
              <div className="icon1">
                <img src={icon1Image} alt="one" />
              </div>
        </div>
  )
}

export default PackagesCard