import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums/Breadcrums';
import Productdisplay from '../components/ProductDisplay/Productdisplay';
import Descriptionbox from '../components/Descriptionbox/Descriptionbox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {

    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();

    const product = all_product.find((i)=> i.id === Number(productId));



  return (
    <div>
        <Breadcrums product={product}/>
        <Productdisplay product={product}/>
        <Descriptionbox/>
        <RelatedProducts/>
      
    </div>
  )
}

export default Product
