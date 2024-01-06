import iconMinus from "../assets/images/icon-minus.svg"
import iconPlus from "../assets/images/icon-plus.svg"
import { useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Paragrap = ({question, answer}) => {
    const [animationParent] = useAutoAnimate()
    const [isToggle, setToggle] = useState(false)

    function clickQuestion() {
        setToggle(!isToggle)
    }

    return (
        <section ref={animationParent}  className="flex flex-col gap-4 pt-4">
            {/*Question*/}
            <div onClick={clickQuestion} className="flex justify-between">
                <h1 className="text-xl font-bold hover:text-purple-600 cursor-pointer">{question}</h1>
                {isToggle ? 
                <img src={iconMinus} alt="" />:
                <img src={iconPlus} alt="" />}
            </div>
            {isToggle && (
                <p className="text-gray-400">{answer}</p>
            )}
        </section>
    );
}

export default Paragrap
