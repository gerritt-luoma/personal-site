import { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/resume'>
                        Resume
                    </Link>
                </li>
                <li>
                    <Link href='/blog'>
                        Blog
                    </Link>
                </li>
                <li>
                    <Link href='/projects'>
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;