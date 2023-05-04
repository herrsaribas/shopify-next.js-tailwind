import ProductPageContent from "../../components/ProductPageContent";
import { getProduct } from "../../lib/shopify";
import { getAllProducts } from "../../lib/shopify";

export default function ProductPage({ product }) {
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductPageContent product={product} />
    </div>
  );
}

// pages/posts/[id].js

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((item) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
}
