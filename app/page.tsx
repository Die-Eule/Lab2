import { Metadata } from "next";
import "./home.css"
import Button from "@/components/Button/Button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="content-home">
      <div className="home-left">
        <div id="banner">
          <p>Find all your favorite Character</p>
        </div>
        <div id="desciprtion">
          <p>You can know the type of Character, its strengths, disadvantages and abilities</p>
        </div>
        <div id="button"></div>
        <Button/>
      </div>

      <Image src={"/heroes.png"} alt="Hero image" width={515} height={557}/>
    </div>
  )
}
