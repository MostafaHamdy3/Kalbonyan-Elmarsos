import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>ProductDetail</h1>
      <p>{params.productKey}</p>
    </section>
  );
};

export default ProductDetail;
