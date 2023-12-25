import './Hero.css'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'
const Hero = () => {
  return (
    <div>

        {/* <h1>Hero</h1> */}
        <div className='hero'>

            <div className='hero-left'>

                <h2>NEW ARRIVALS ONLY</h2>
                <div>

                    <div className='hand-hand-icon'>
                        <p>new</p>
                        <img src={hand_icon}/>
                    </div>
                    <p>Collections</p>
                    <p>For everyone</p>


                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Collection</div>
                    <img src={arrow_icon}/>
                </div>
                {/* <p>new</p>
                <img src={hand_icon} width={25} height={25}/> */}

            </div>

            <div className='hero-right'>
                <img src={hero_image}/>
            </div>

        </div>
      
    </div>
  )
}

export default Hero
