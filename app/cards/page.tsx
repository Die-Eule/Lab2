import React from "react";
import { Metadata } from "next";
import "./cards.css";
import Card from "@/components/Card/Card";
import SearchBox from "@/components/SearchBox/SearchBox";

export const metadata: Metadata = {
    title: "Cards",
};

const Cards = () => {
    return (
        <div className="content-cards">
            <div className="sub-header">
                <p>Marvel characters</p>
                <SearchBox/>
            </div>
            <div className="card-rows">
                <Card name="Вася" pic="/hero_card.png"/>
                <Card name="Петя" pic="/hero_card.png"/>
                <Card name="Коля" pic="/hero_card.png"/>
            </div>
            <div className="card-rows">
                <Card name="Оскар" pic="/hero_card.png"/>
                <Card name="Архип" pic="/hero_card.png"/>
                <Card name="Пантелей" pic="/hero_card.png"/>
            </div>
        </div>
    );
};

export default Cards;