import {Application, extend} from "@pixi/react";
import {BunnySprite} from "./BunnySprite";
import {Container, Graphics, Sprite} from "pixi.js";

extend({
    Container,
    Graphics,
    Sprite,
});

export default function App() {
    return (
        <Application>
            <BunnySprite/>
        </Application>
    );
}
