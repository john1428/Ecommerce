import {useContext, useState} from 'react'
import './Productdisplay.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'
import { Link } from 'react-router-dom'


const Productdisplay = (props) => {

    const {product} = props
    const {addToCart} = useContext(ShopContext);

    const [ispressed,setispressed] = useState(false);

    const handleCartClick = () =>{
        addToCart(product.id)
        setispressed(true);
    }


    





  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt=""/>
            </div>
        </div>  

        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_dull_icon} alt=""/>
                <p>(122)</p>
            </div>

            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-prices-old'>
                    ${product.old_price}
                </div>
                <div className='productdisplay-right-prices-new'>
                    ${product.new_price}
                </div>
            </div>  
            <div className='productdisplay-right-description'>
                A lightweight usually knitted pullover shirt close-fitting and with a round neckline and short sleeves 
            </div>
            <div className='productdisplay-right-size'>
                <h1>Select Size</h1>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button className={ispressed ? 'clickaction' : 'button-add-to-cart'} onClick = {handleCartClick}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>CATEGORY: </span>Women Tshirt Crop top</p>
            <p className='productdisplay-right-category'><span>Tags: </span>Modern Latest</p>

        </div>
      
    </div>
  )
}

// () =>{addToCart(product.id)}

export default Productdisplay
