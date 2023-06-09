import StoreProductCard from "./storeProductCard";
import propTypes from 'prop-types';

const StoreProducts = (props) => {
    const {storeData} = props;


    return(
        <div className="">
<div className="text-gray-500 text-3xl font-bold mb-3">
{storeData.name}
</div>

<div className="grid grid-cols-6 gap-2">
    {storeData.products.lenght < 5 ? <div>no products</div> : 
      storeData.products.map((product) => <StoreProductCard key={product._id} product={product} storeId={storeData._id}/> )   }

</div>
<div className="bg-gray-400 opacity-70  w-full h-px my-2"/>
        </div>
    )
}

StoreProducts.propTypes = {
    storeData: propTypes.shape({
        _id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        city: propTypes.string.isRequired,
        region: propTypes.string.isRequired,
        products: propTypes.arrayOf(propTypes.shape({
            _id: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            price: propTypes.number.isRequired,
            quantity: propTypes.number.isRequired,
         
        })).isRequired
    })};

export default StoreProducts;