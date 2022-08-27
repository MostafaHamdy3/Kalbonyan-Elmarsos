import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/e1">TV</Link>
        </li>
        <li>
          <Link to="/products/e2">A Book</Link>
        </li>
        <li>
          <Link to="/products/e1"> An online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
