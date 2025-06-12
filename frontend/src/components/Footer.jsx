import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div >
            <div className="flex flex-xol sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div className="">
                    <img className='mb-5 w-32' src={assets.logo} alt="" />
                    <p className="w-full md:w-2/3 text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sint quis ipsa repudiandae voluptas rem maxime esse magni ea! Laboriosam illo, accusantium sit dicta distinctio omnis ab nulla beatae modi.
                    </p>
                </div>
                <div className="">
                    <p className="text-xl font-medium mb-5">
                        COMPANY
                    </p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>

                    </ul>
                </div>

                <div >
                    <p className="text-xl font-mono mb-5">
                        GET IN TOUCH
                    </p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+212-456-7890</li>
                        <li>contact@royalking.com</li>
                    </ul>
                </div>
            </div>
            <div className="">
                <hr />
                <p className="py-5 text-sm text-center">Copyright 2025@ royalking.com - All Rights  Reserved.</p>
            </div>

        </div>
    )
}

export default Footer
