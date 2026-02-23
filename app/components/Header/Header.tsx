import Link from "next/link";
import classes from "./Header.module.css"
import logo from "@/assets/logo.png"
import Image from "next/image";
import HeaderBg from "./Header-background";
import NavLink from "./Nav-link";

export default function Header() { 
    return(
        <>
            <HeaderBg/>
            <header className={classes.header}>
                <Link href={"/"} className={classes.logo}>
                    <Image src={logo} alt="Foodie logo" />
                    NextLevel food
                </Link>

                <NavLink/>
            </header>
        </>
    )
}