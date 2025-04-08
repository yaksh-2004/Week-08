import Links from "./links/Links"
import Link from "next/link"
import styles from "./navbar.module.css"
const Navbar = () => {
  return (
    <div>
      <div className = {styles.container}> 
       <Link href="/" className={styles.logo}>Logo</Link>
      </div>
      <div>
        <Links />
      </div>
      </div>
  )
}

export default Navbar