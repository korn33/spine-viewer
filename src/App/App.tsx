import {Application, extend} from "@pixi/react";
import {Container, Graphics, Sprite} from "pixi.js";
import {ControlPanel} from "../ControlPanel/ControlPanel";
import styles from './App.module.scss';
import {useRef, useState} from "react";
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

    const containerRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className={styles.appContainer}>
            <div ref={containerRef} className={styles.viewerSection}>
                <Application resizeTo={containerRef} resolution={window.devicePixelRatio}>
                    <Scene backgroundColor={canvasColor}/>
                </Application>
            </div>

            <div className={styles.controlSection}>
                <ControlPanel onChangeColor={handleColorChange}/>
            </div>
        </div>
    );
}
