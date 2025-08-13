import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='flex item-center justify-between gap-4 py-3 mt-20'>

            <img src={assets.logo} width={150} alt="" />

            <p className='flex-1 mt-3 border-l pl-4 text-sm text-gray-500 max-sm:hidden'>All right reserved. Copyright @imagify</p>

                <a
                    href="https://merchant.razorpay.com/policy/R2encVHzX96nmR/refund"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition-colors duration-200 shadow"
                >
                    Refund Policy
                </a>

            <div className='flex gap-2.5'>
                <img src={assets.facebook_icon} alt="" width={35} />
                <img src={assets.twitter_icon} alt="" width={35} />
                <img src={assets.instagram_icon} alt="" width={35} />
            </div>

        </div>
    )
}

export default Footer
