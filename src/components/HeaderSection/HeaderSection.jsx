import React from 'react'
import './HeaderSection.css'

import Image1 from '../../assets/images/component-HeaderSection/Image-01.jpg'
import Image1Lg from '../../assets/images/component-HeaderSection/Image-01@2x.jpg'
import Image2 from '../../assets/images/component-HeaderSection/Image-02.jpg'
import Image2Lg from '../../assets/images/component-HeaderSection/Image-02@2x.jpg'
import Image3 from '../../assets/images/component-HeaderSection/Image-03.jpg'
import Image3Lg from '../../assets/images/component-HeaderSection/Image-03@2x.jpg'

function HeaderSection() {
    return (
        <div className='section-container'>
            <div className='grid-container'>
                <div className="grid-item big-image">
                    <img src={Image1} alt="image 1"></img>
                </div>
                <div className="grid-item">
                    <img src={Image2} alt="image 2"></img>
                </div>
                <div className="grid-item">
                    <img src={Image3} alt="image 3"></img>
                </div>
                <div className='grid-tem text-container'>

                    <div className='main-container'>
                        <div className='main-title'>
                            <h2>ANSWER YOUR BODY'S NEEDS</h2>
                        </div>
                        <div className='main-text'>
                            <h4>The way ingredients are sourced affects the way we nourish our bodies.
                                Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy,
                                but that artificial flavourings are getting in the way.
                                This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides your
                                to consume according to your body's needs.
                            </h4>
                        </div>
                    </div>

                    <div className='tips-container'>
                        <div className='tips-title'>
                            <h3 className='red-font'>BE MINDFUL</h3>
                        </div>
                        <div className='tips-text'>
                            <h3>Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating</h3>
                        </div>
                    </div>


                </div>
            </div>


        </div>

    )
}

export default HeaderSection