import React from 'react'
import style from './Subscription.module.css';

export default function Subscription() {
  return (
    <>
    <div className={` ${style.Subscription}`}>
      <h3>Subscribe our newsletter to be notified when it’ll be live.</h3>
      <div className={` ${style.Subscription_body}`} >
            <input className='w-100' type="email" required="" placeholder="Email address" />
            <button type='submit'>Subscribe</button>
      </div>
    </div>
    </>
  )
}
