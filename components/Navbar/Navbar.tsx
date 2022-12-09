import { FC } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'

const Navbar: FC = () => {
    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.navItem}>
                    <Link href='/' className={styles.navLink}>
                        Home
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href='/resume' className={styles.navLink}>
                        Resume
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href='/blog' className={styles.navLink}>
                        Blog
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href='/projects' className={styles.navLink}>
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;