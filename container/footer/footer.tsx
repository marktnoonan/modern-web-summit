import React, { useState } from 'react'
import NotifyForm from '../../components/notify'
import FooterLink from '../../components/footerLinks'

const Footer = () => {
  const [NotifyModal, setShowNotifyModal] = useState(false)

  const openNotifyModal = () => {
    setShowNotifyModal(true)
  }

  const closeNotifyModal = () => {
    setShowNotifyModal(false)
  }

  return (
    <div className="bg-gray-400 md:p-10 sm:p-5 flex relative flex-wrap">
      {/* {NotifyModal &&
        <div className="p-5 bg-white absolute md:w-2/5 sm:w-full top-0 left-1/2 shadow-xs transform md:-translate-y-40 sm:-translate-y-56 -translate-x-1/2">
          <div className="relative">
            <div onClick={() => closeNotifyModal()} className="absolute top-0 right-0 cursor-pointer">
              <img className="" src="/images/close.svg" />
            </div>
            <h4 className="text-2xl font-extrabold text-black uppercase">Notify me</h4>
            <p className="text-base text-gray-300">We’ll send you an email when ticket sales open up!</p>
            <div className="flex mt-8 sm:flex-wrap md:flex-no-wrap">
              <input
                className="py-2 px-6 md:mr-2 h-16 flex-grow border-solid border-2 text-xl border-black focus:outline-none"
                value=""
                placeholder="Your Email"
              />
              <button className="sm:mx-auto sm:mt-3 md:mt-0 bg-black text-white py-2 px-12 uppercase text-xl focus:outline-none">NOTIFY ME</button>
            </div>
          </div>
        </div>
      } */}
      <div className="md:w-2/5 sm:w-full justify-center text-center flex-col flex">
        <img className="md:h-20 sm:h-24" src="/images/mws-logo.svg" />
        <div className="mt-10 flex justify-center">
          {/* <button onClick={() => openNotifyModal()} className="custom-btn focus:outline-none" type="button">Notify me when tickets go on sale</button> */}
          <NotifyForm buttonClass="sm:text-lg md:text-xl" />
        </div>
        <div className="mb-10 mt-5 text-center sm:block md:hidden">
          <a className="text-white font-medium text-sm text-opacity-50" href="https://www.google.co.in/">Terms of Service • </a>
          <a className="text-white font-medium text-sm text-opacity-50" href="https://www.google.co.in/">Privacy Policy • </a>
          <a className="text-white font-medium text-sm text-opacity-50" href="https://www.google.co.in/">Code of Conduct</a>
        </div>
      </div>
      <div className="md:w-3/5 sm:w-full flex-col flex">
        <FooterLink />
        <div className="md:items-end sm:items-center flex flex-col mt-10 md:mr-12">
          <img className="h-10" src="/images/event-loop-footer.svg" />
          <p className="mt-5 text-gray-200 text-sm">Copyright 2020 Event Loop, Inc.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
