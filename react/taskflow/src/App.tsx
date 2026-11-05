import { useEffect, useState } from "react";

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

  const [narak, setNarak] = useState<String>('');

  useEffect(() => {
    console.log('hello world');
  }, []);

  function changeNarakValue(input : string) {
    console.log('hello');
    setNarak(input);
  }

  return (
    
    <ul>
      {
        
        products.map((product: product) => (
          <li key={product.id} onClick={() => {changeNarakValue(product.name)}}>{narak} {product.name}</li>
        ))
      }
    </ul>
  );
}

export default App;