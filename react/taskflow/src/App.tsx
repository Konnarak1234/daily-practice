
type product = {
  id: number,
  name: string,
}



function App() {
  let products: product[] = [
    {
      id : 1,
      name : 'Milk',
    },
    {
      id : 2,
      name : 'Banana',
    },
    {
      id : 3,
      name : 'Saurce',
    },
    {
      id : 4,
      name : 'Soda',
    },
  ]

  return <ListOfProducts products={products} />;
}

function ListOfProducts( { products } : { products : product[] }) {

  return (
    <ul>
      {
        products.map((product: product) => (
          <li key={product.id}>{product.name}</li>
        ))
      }
    </ul>
  );
}

export default App;