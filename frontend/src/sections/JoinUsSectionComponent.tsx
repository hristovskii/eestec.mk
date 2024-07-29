"use client"

import Image from "next/image";
import JoinUsComponent from "../components/JoinUsComponent";

import Img from '../images/logos_icons/events.svg'
import Img2 from '../images/logos_icons/meeting people.svg'
import Img3 from '../images/logos_icons/development.svg'
import SubheadingComponent from "@/components/SubheadingComponent";

const JoinUsSectionComponent = () => {
    return(
        <div className="m-2 grid justify-items-center">
            <div><SubheadingComponent text="Why Should you Join us?"/>
            </div>
            <div className="grid justify-self-start">
              <JoinUsComponent img={Img} heading={"International and local events"} text={"Be part of the organizing committee or simply attend an international workshop, exchange or motivational weekend. You will certainly not regret it!"}></JoinUsComponent>
            </div>
            <div className="grid justify-self-center">
                <JoinUsComponent img={Img2} heading={"Meeting new people"} text={"You will have the chance to meet new people from all over Europe and explore their culture, tradition and cuisine."}></JoinUsComponent>
            </div>
            <div className="grid justify-self-end">
               <JoinUsComponent img={Img3} heading={"Personal development"} text={"Improve your skills and qualities through training and set life goals that will improve your employment prospects."}></JoinUsComponent>
            </div>
        </div>
    );
}
export default JoinUsSectionComponent;