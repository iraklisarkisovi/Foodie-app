'use client'
import { usePathname } from "next/navigation";
import classes from "./Nav-link.module.css"
import Link from "next/link";

export default function NavLink(){
    const pathname = usePathname()
    
    return(
        <>
            <nav className={classes.nav}>
                <ul className="active">
                    <li>
                        <Link href={"/meals"} className={pathname.startsWith("/meals") ? classes.active : undefined}>Browse Food</Link>
                    </li>
                    <li>
                        <Link href={"/community"} className={pathname.startsWith("/community") ? classes.active : undefined}>Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}