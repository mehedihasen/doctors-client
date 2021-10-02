
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './businessCard.css'


const BusinessCard = ({info}) => {
    return (
       <div className="col-md-4 text-white info-card">
      <div className = {`d-flex info-${info.background} info-container `}>
        <div className="me-3">
           <FontAwesomeIcon icon={info.icon} className='info-icon' />
          </div>

           <div>
               <h6>{info.title}</h6>
               <small>{info.descripction}</small>     
           </div>
      </div>
       </div>
    );
};

export default BusinessCard;