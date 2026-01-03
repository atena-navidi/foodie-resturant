import Link from "next/link"
import styles from "@/components/layout/Layout.module.css"

const Layout = ({children}) => {
  return (
    <>
    <header className={styles.header}>
        <div className={styles.left}>
            <Link href="/" className="text-[#53c60b] font-semibold text-xl text-[#53c60b]">FOODIE</Link>
        </div>
        <div className={styles.right}>
            <Link className="ml-[15px] text-[dimgrey] font-medium" href="/menu" >Menu</Link>
            <Link className="ml-[15px] text-[dimgrey] font-medium" href="/categories">Categories</Link>
        </div>
    </header>
    <div className={styles.container}>{children}</div>
    <footer className={styles.footer}>
        Next.js project | Foodie Restaurant &copy; 
    </footer>
    </>
  )
}

export default Layout
