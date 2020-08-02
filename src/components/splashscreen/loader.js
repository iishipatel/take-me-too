import React from 'react'
import "./loader.scss"

const loader = () => {
    return (
        <div>
            <div className='loader__wrapper'>
                <div className='loader__text'>LOADING...</div>
                <div className='loader__background'></div>
                <div className='ufo__wrapper'>
                    <div className='ufo__cockpit'></div>
                    <div className='ufo__body'>
                    <div className='ufo__rivet'></div>
                    <div className='ufo__rivet'></div>
                    <div className='ufo__rivet'></div>
                    <div className='ufo__rivet'></div>
                    </div>
                    <div className='ufo__trails-wrapper'>
                    <div className='ufo__trail'></div>
                    <div className='ufo__trail'></div>
                    <div className='ufo__trail'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default loader
