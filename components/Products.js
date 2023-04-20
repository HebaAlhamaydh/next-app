import Image from 'next/image'
import React from 'react'
import styles from '../styles/Products.module.css'
import Link from 'next/link';
export default function Products({product}) {
  const{title,image,price,id}=product;  
  return (
    <div className={styles.product}>
        <div>
            <Image src={image} width="200" height="300"/>
        </div>
      <ul>
        <li>{title}</li>
        <li>{price}$</li>
      </ul>
      <Link href={`/products/${id}`} className='button'>More Details</Link>
    </div>
  )
}
