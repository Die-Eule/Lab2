import React from "react";
import "./menuBtn.scss"

interface WrapperProps {
    children: React.ReactNode;
  }

const MenuBtn = ({children}: WrapperProps) => {
    return (
        <div className="menu-button">
            {children}
        </div>
    );
};

export default MenuBtn;