import {useState} from "react";
import {AppConfig} from "../AppConfig";

interface ControlPanelProps {
    onChangeColor: (color: number) => void
}
export function ControlPanel(props: ControlPanelProps) {
   const [color, setColor] = useState<number>(AppConfig.ColorBlack)

    const changeBgrColor = () => {
        const newColor = color == AppConfig.ColorBlack
            ? AppConfig.ColorBlue
            : AppConfig.ColorBlack

        setColor(newColor)
        props.onChangeColor(newColor)
    }

    return (
        <div>
            <h1>ControlPanel</h1>
            <button onClick={changeBgrColor}>color</button>
        </div>
    )
}