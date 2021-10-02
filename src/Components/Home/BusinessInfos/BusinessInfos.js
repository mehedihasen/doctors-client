import React from 'react';
import BusinessCard from '../BusinessCard/BusinessCard';
import { faClock, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const BusinessInfos = () => {

    const BusinessInfos =[

        {
            title:"Opening Hours",
            descripction: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            icon : faClock,
            background:'primary' 
        },

        {
            title:"Visite Oure Loction",
            descripction: "Kelung Meru, Kl 457612, Malaysia.",
            icon :faMapMarkerAlt,
            background: 'dark',
        },

        {
            title:"Contuct us",
            descripction: "+0000123456789",
            icon :faPhone,
            background: "primary",
        }
    ]

    return (
        <section className ='d-flex justify-content-center'>
          <div className = 'row w-75%'>
          {
                BusinessInfos.map(info => <BusinessCard info= {info}> </BusinessCard>)
            }
          </div>
        </section>
    );
};

export default BusinessInfos;