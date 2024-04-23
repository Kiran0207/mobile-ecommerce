import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailsById } from "../../redux/actions/actions.js";
import { products } from "../../assests/data.js";
const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const productDetails = useSelector((state) => state.productDetails);

  useEffect(() => {
    dispatch(getProductDetailsById(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Product Details</h1>
      {productDetails.loading && <p>Loading...</p>}
      {productDetails.error && <p>Error: {productDetails.error}</p>}
      {productDetails.products && (
        <div>
          <p>Name: {productDetails.products.title.longTitle}</p>
          <p>Description: {productDetails.products.description}</p>
          <p>Price: {productDetails.products.price.cost}</p>
        </div>
      )}
    </div>
  );
};

export default DetailView;
