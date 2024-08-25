import React, { useState } from 'react'
import ReviewDetail from './ReviewDetail'

const Review = () => {
    const [reviews,setReviews] = useState([
        {
            name:"sachin kumar singh manhotra",
            date:"Tue, 16 july 2024",
            time:"6:55 pm",
            stars:2,
            message:"Amazing",
        },{
            name:"kunal kunkarni sharma",
            date:"Tue, 16 july 2024",
            time:"24:55 pm",
            stars:4,
            message:"Excellent",
            pic:"https://cdn-gatekeeper-uploads.fresha.com/avatars/29093621/medium/unnamed.jpg?v=63858876775&class=thumb"
        },{
            name:"rathor vikram",
            date:"Tue, 16 july 2024",
            time:"6:55 pm",
            stars:5,
            message:"Great experience at the Stars Barber Shop. Midhat is a highly skilled barber, understands hair types",
            pic:"https://cdn-gatekeeper-uploads.fresha.com/avatars/29093621/medium/unnamed.jpg?v=63858876775&class=thumb"
        },{
            name:"Aditya",
            date:"Tue, 16 july 2024",
            time:"6:55 pm",
            stars:5,
            message:"Excellent service, Very professional staff especially Richard "
        },{
            name:"Aditya",
            date:"Tue, 16 july 2024",
            time:"6:55 pm",
            stars:5,
            message:"Perfect haircut . /n Medhat is  ssuch an amazing barber."
        },,{
            name:"rathor vikram",
            date:"Tue, 16 july 2024",
            time:"6:55 pm",
            stars:5,
            message:"Great experience at the Stars Barber Shop. Midhat is a highly skilled barber, understands hair types",
            pic:"https://cdn-gatekeeper-uploads.fresha.com/avatars/29093621/medium/unnamed.jpg?v=63858876775&class=thumb"
        },{
            name:"Aditya",
            date:"Tue, 16 july 2024",
            time:"6:55 pm",
            stars:5,
            message:"Excellent service, Very professional staff especially Richard "
        }
    ])
  return (
    <div className='flex flex-wrap justify-between'>
        {reviews.map(review=><ReviewDetail prop={review}/>)}
    </div>
  )
}

export default Review