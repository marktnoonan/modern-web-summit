import React from 'react'

const logo = () => {
    return <div className="logo">
        <img className="inline w-450 sm:hidden md:inline mb-10 -m-12" src="/images/mws-logo-new.svg" alt="logo" />
        <img className="inline w-full sm:inline md:hidden" src="/images/logo-mobile.svg" alt="logo" />
    </div>
}

export default logo
