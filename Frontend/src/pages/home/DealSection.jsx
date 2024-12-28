import React from 'react'
import dealsImg from '../../assets/deals.png'

const DealSection = () => {
  return (
    <section className='section__container deals__container'>
      <div className='deals__image'>
        <img src={dealsImg} alt="" />
      </div>
      <div className='deals__content'>
<h5>Get Upto 20% Discount </h5>
<h4>Deals of the Month</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores possimus fugit vitae eligendi accusantium molestiae culpa aspernatur dolorem! Odit.</p>
<div className='deals__countdown flex-wrap'>
    <div className='deals__countdown__card'>
        <h4>14</h4>
        <p>Days</p>

    </div>
    <div className='deals__countdown__card'>
        <h4>20</h4>
        <p>Hrs</p>

    </div>
    <div className='deals__countdown__card'>
        <h4>15</h4>
        <p>Mins</p>

    </div>
    <div className='deals__countdown__card'>
        <h4>10</h4>
        <p>Secs</p>

    </div>

</div>
      </div>
    </section>
  )
}

export default DealSection
