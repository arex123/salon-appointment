import React, { useState } from 'react'
import ServiceCardInfo from './ServiceCardInfo'

const Services = () => {
    const [servicesInfo,setServicesInfo]=useState([
        {
            key:"Srv1",
            title:'Combo 1',
            time:'3hr, 15 min',
            benefits:['Haircut','Hair Wash','Beared Details Fix Up']
        },
        {
            key:"Srv2",
            title:'Combo 2',
            time:'3hr, 15 min',
            benefits:['Haircut','Hair Wash','Beared Details Fix Up']
        },
        {
            key:"Srv3",
            title:'Combo 3',
            time:'3hr, 15 min',
            benefits:['Haircut','Hair Wash','Beared Details Fix Up']
        },
        {
            key:"Srv4",
            title:'Combo 4',
            time:'3hr, 15 min',
            benefits:['Haircut','Hair Wash','Beared Details Fix Up']
        },
    ])
  return (
    <>
    {servicesInfo.map(service=><ServiceCardInfo prop={service}/>)}</>
  )

}

export default Services