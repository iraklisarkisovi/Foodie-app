import Link from "next/link";
import classes from "../styles/Header.module.css"
import logo from "@/assets/logo.png"
import Image from "next/image";
import HeaderBg from "./Header-background";

export default function Header() { 
    return(
        <>
            <HeaderBg/>
            <header className={classes.header}>
                <Link href={"/"} className={classes.logo}>
                    <Image src={logo} alt="Foodie logo" />
                    NextLevel food
                </Link>

                <nav className={classes.nav}>
                    <ul className="active">
                        <li>
                            <Link href={"/meals"}>Browse Food</Link>
                        </li>
                        <li>
                            <Link href={"/community"}>Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}