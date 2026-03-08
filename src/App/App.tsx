import {Application, extend} from "@pixi/react";
import {BunnySprite} from "../BunnySprite";
import {Container, Graphics, Sprite} from "pixi.js";
import {ControlPanel} from "../ControlPanel/ControlPanel";
import styles from './App.module.scss';
extend({
    Container,
    Graphics,
    Sprite,
})

export default function App() {
    return (
        <div className={styles.appContainer}>
            <div className={styles.viewerSection}>
                <Application>
                    <BunnySprite/>
                </Application>
            </div>

            <div className={styles.controlSection}>
                <ControlPanel/>
            </div>
        </div>
    );
}
