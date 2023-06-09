import axios from 'axios';
import PropTypes from 'prop-types';
import {UserContext} from '../../../UserContext';
import { useEffect, useState, useContext } from 'react';




    const StoreProductCard = (props) => {
    const {product,storeId} = props;
    const { user } = useContext(UserContext)
    
    
 

    const [isAdded,setIsAdd] = useState(null)

    useEffect(() => {
     
        async function checkIfAdded(){
            const res = await axios.get('/check_if_added',{params: {productId: product._id, storeId: storeId, userId: user._id}})
            setIsAdd(res.data)
        }
        checkIfAdded()
    },[product._id, storeId, user._id])

  

        async function addToBasket(){
            setIsAdd(true)
           await axios.post('/add_basket_product', {productId: product._id, storeId: storeId, userId: user._id, quantity: 1})
        }

        async function removeFromBasket(){
            setIsAdd(false)
            await axios.delete('/remove_basket_product',{params: {productId: product._id, storeId: storeId, userId: user._id}})

        }


    
  


    return (
        <div className="bg-white pl-2  py-5  rounded-xl">
        <div>
            <img className="object-cover pt-2 pb-2 w-full h-1/2  "
                src="https://media.istockphoto.com/id/1141708425/photo/red-apples.jpg?s=612x612&w=is&k=20&c=tDtPW8ASalDwaI35_95AFbxCURsP97HqsLmOKMOLQAE=" />

        </div>
        <div className="text-black text-xl font-semibold mb-2">{product.name}</div>
    
        <div className="inline-flex text-black font-semibold">
            <div className="text-3xl mb-1">{product.price}</div>
            <div className='text-xs font-normal pt-1 text-gray-500'>SAR</div>
            {/* <div className="text-xs pt-1">.99</div> */}
               
        </div>
        <div className='flex items-baseline justify-center'>
            {
            isAdded == null ? <div>loading...</div> : isAdded ?
            <button className="whitespace-nowrap bg-gray-500 hover:bg-gray-600 text-white text-l font-semibold  px-2 pb-1 rounded-3xl"
            onClick={removeFromBasket}>
                Added
            </button> :   <button className="whitespace-nowrap bg-blue-500 hover:bg-blue-600 text-white text-l font-semibold  px-2 pb-1 rounded-3xl"
            onClick={addToBasket}>
                Add to basket
            </button>
    }
          
            </div>
        </div>
    );

    }

StoreProductCard.propTypes = {
   
    storeId: PropTypes.string.isRequired,
    product: PropTypes.shape({

    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    }).isRequired,
};

export default StoreProductCard;