import Image from 'next/image';
import React from 'react'
import styles from '../../styles/Details.module.css'
import Head from 'next/head'

export default function Details({product}) {
    const{title,price,description,category,image}=product;
  return (
    <div className={`${styles.product} container`}>
        <Head>
            <title>{title}</title>
        </Head>
        <div> <Image src={image} width="300" height="300"/></div>
        <div>
        <h2>{title}</h2>
        <h3>{category}</h3>
        <h1>{price},00$</h1>
        <p>{description}</p>
        </div>
      </div>
  )
}
//to determine how many path i can pass it 
export async function getStaticPaths(){
    const req=await fetch('https://fakestoreapi.com/products')
    const products=await req.json();
    //put all id in paths obj
    const paths=products.map((product)=>{

        return{
            params:{id:product.id.toString()},
      
        }
    })
    return{
        paths,
        //give me error when the page is not found
        fallback: false
    }
}
//send request for each path and available it as props for each component 
export async function getStaticProps(context) {
    const id=context.params.id;
    const req=await fetch('https://fakestoreapi.com/products/'+id)
    const product=await req.json();
    //to send products to home componet
    return{
        props:{product}
    }
}