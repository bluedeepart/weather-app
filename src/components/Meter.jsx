import React from 'react'

const Meter = ({value}) => {
  return (
    <div className='meter-wrapper'>
        <div className="meter-range">
            <div className="meter-range-value">0</div>
            <div className="meter-range-value">50</div>
            <div className="meter-range-value">100</div>
        </div>
        <div className="meter-outer">
            <div className="meter-inner" style={{width: `${value}%`}}></div>
        </div>
        <div className='meter-unit'>%</div>
    </div>
  )
}

export default Meter