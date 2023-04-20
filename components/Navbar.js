import Link from 'next/link'
import React from 'react'
import styles from "../styles/Navbar.module.css"
export default function Navbar() {
  return (
    <nav className={styles.nav}>
    <div className={`${styles.container} container`}>
        <div className={styles.logo}> This is logo</div>
        <ul>
            <li> <Link href="/">Home</Link></li>
            <li> <Link href="/about">About</Link></li>
            <li> <Link href="/cart">Cart</Link></li>
        </ul>
    </div>
    </nav>
  )
}
