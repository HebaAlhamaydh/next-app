import Products from "../components/Products";
import Head from 'next/head'

export default function Home({products}) {

  return (
   <main className='container'>
    <Head>
      <title> Home|The bestEcommerce</title>
    </Head>
    <div className="main">
    {
 products && products.map(product => <Products key={product.id} product={product}/>)

}
    </div>

   </main>
  )
}
export async function getStaticProps(){
  const req=await fetch('https://fakestoreapi.com/products')
  const products=await req.json();
return{//to send products to home componet
  props:{products}
}
}