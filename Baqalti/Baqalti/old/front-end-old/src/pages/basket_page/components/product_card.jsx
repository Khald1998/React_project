import axios from 'axios';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../UserContext';




    const ProductCard = (props) => {
    const {itemData} = props;
    const { user } = useContext(UserContext)
    const [quantity, setQuantity] = useState(itemData.quantity)

    const increaseQuantity = async () => {
    setQuantity(quantity + 1)
    await axios.put("/increase_quantity", {productId: itemData._id,storeId: itemData.storeId, userId:user._id, quantity: quantity+1})

    }

    const decreaseQuantity = async () => {

    if (quantity > 1){
    setQuantity(quantity - 1)
    await axios.put("/decrease_quantity", {productId: itemData._id,storeId: itemData.storeId, userId:user._id, quantity: quantity-1})

    }
    }



    return (
    <div className="bg-white pl-2">
        <div>
            <img className="object-cover pt-2 pb-2 w-full h-1/2  "
                src="https://media.istockphoto.com/id/1141708425/photo/red-apples.jpg?s=612x612&w=is&k=20&c=tDtPW8ASalDwaI35_95AFbxCURsP97HqsLmOKMOLQAE=" />

        </div>
        <div className="text-black text-xl font-semibold">{itemData.name}</div>
        <div className="text-gray-400">{itemData.storeName}</div>
        <div className="inline-flex text-black font-semibold">
            <div className="text-3xl">{itemData.price}</div>
            <div className='text-xs font-normal pt-1 text-gray-500'>SAR</div>
            {/* <div className="text-xs pt-1">.99</div> */}
        </div>
        <div className="flex items-baseline justify-center">
            <button onClick={decreaseQuantity}
                className=" bg-red-500 hover:bg-red-600 text-white text-xl font-semibold   pr-4 pl-4 pb-1 rounded-full">
                -
            </button>

            <div className="inline-flex pr-2 pl-2 ">
                {quantity}
            </div>

            <button
                className="bg-green-500 hover:bg-green-600 text-white text-xl font-semibold   pr-4 pl-4 pb-1 rounded-full"
                onClick={increaseQuantity}>
                +
            </button>
        </div>
    </div>
    );

    }

ProductCard.propTypes = {
itemData: PropTypes.shape({

_id: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
price: PropTypes.number.isRequired,
quantity: PropTypes.number.isRequired,
storeId: PropTypes.string.isRequired,
storeName: PropTypes.string.isRequired,



}).isRequired,
};

export default ProductCard;