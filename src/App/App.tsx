import {Application, extend} from "@pixi/react";
import {Container, Graphics, Sprite} from "pixi.js";
import {ControlPanel} from "../ControlPanel/ControlPanel";
import styles from './App.module.scss';
import {useState} from "react";
import {AppConfig} from "../AppConfig";
import {Scene} from "../Pixi/Scene";
extend({
    Container,
    Graphics,
    Sprite,
})

export default function App() {
    const [canvasColor, setCanvasColor] = useState<number>(AppConfig.ColorBlack);

    const handleColorChange = (newColor: number) => {
        setCanvasColor(newColor);
    };

    return (
        <div className={styles.appContainer}>
            <div className={styles.viewerSection}>
                <Application>
                    <Scene backgroundColor={canvasColor}/>
                </Application>
            </div>

            <div className={styles.controlSection}>
                <ControlPanel onChangeColor={handleColorChange}/>
            </div>
        </div>
    );
}
