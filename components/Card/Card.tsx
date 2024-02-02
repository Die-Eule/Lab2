import React from "react";
import "./card.scss";
import Image from "next/image";

export interface UserProps {
    name: string;
    pic: string;
}

const Card = ({name, pic}: UserProps) => {
    return (
        <div className="hero-card">
            <Image src={pic} alt="Hero image" width={156} height={140}/>
            <p>{name}</p>
        </div>
    );
}

export default Card;
