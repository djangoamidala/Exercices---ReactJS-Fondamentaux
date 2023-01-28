// Page produit
import React from 'react';
import Card from '../Components/CardComponent'
import product1 from '../Images/1.jpg'
import product2 from '../Images/2.jpg'


const ProductsPage = () => {
  const products = [
    {
      title: 'Magnifique arbre',
      image: product1,
      description: 'Arbre pas cher'
    },
    {
        title: 'Regarde mon oeil',
        image: product2,
        description: 'Comme il est beau'
      },
  ];
  return (
    <div className="products-page">
      {products.map((product) => (
        <Card
          key={product.title}
          title={product.title}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
