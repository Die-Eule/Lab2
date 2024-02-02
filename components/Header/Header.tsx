import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";
import "./header.scss"
import MenuBtn from "../MenuBtn/MenuBtn";

const Header = () => {
    return (
        <header>
            <div className="menu">
                <MenuBtn><Link href={ROUTER.HOME}>Home</Link></MenuBtn>
                <MenuBtn><Link href={ROUTER.CARDS}>Cards</Link></MenuBtn>
            </div>
            <div className="logo">
                <p>Marvel Heroes</p>
            </div>
        </header>
    );
};

export default Header;