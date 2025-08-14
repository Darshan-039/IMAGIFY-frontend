import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='flex item-center justify-between gap-4 py-3 mt-20'>

            <img src={assets.logo} width={150} alt="" />

            <p className='flex-1 mt-3 border-l pl-4 text-sm text-gray-500 max-sm:hidden'>
                All rights reserved. © {new Date().getFullYear()} Imagify
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <a href="/privacy-policy" className="text-sm text-gray-600 hover:text-black">Privacy Policy</a>
                <a href="/terms" className="text-sm text-gray-600 hover:text-black">Terms & Conditions</a>
                <a href="/contact" className="text-sm text-gray-600 hover:text-black">Contact Us</a>
            </div>

            <div className='flex gap-2.5'>
                <img src={assets.facebook_icon} alt="" width={35} />
                <img src={assets.twitter_icon} alt="" width={35} />
                <img src={assets.instagram_icon} alt="" width={35} />
            </div>

        </div>
    )
}

export default Footer
