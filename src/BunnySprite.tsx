import {useEffect, useRef, useState} from "react";
import {Assets, Texture} from "pixi.js";
import spriteBunnyImg from '../assets/images/spriteBunny.png'

export function BunnySprite() {
    const spriteRef = useRef(null)

    const [texture, setTexture] = useState(Texture.EMPTY)

    // Preload the sprite if it hasn't been loaded yet
    useEffect(() => {
        if (texture === Texture.EMPTY) {
            Assets
                .load(spriteBunnyImg)
                .then((result) => {
                    setTexture(result)
                });
        }
    }, [texture]);

    const [isSmall, setScale] = useState(false)

    const changeScale = () => {
        setScale(isSmall => !isSmall)
    }

    return (
        <pixiSprite
            ref={spriteRef}
            eventMode = {'static'}
            anchor = {0.5}
            texture={texture}
            x = {200}
            y = {400}
            scale = {isSmall ? 3 : 6}
            onPointerTap = {changeScale}
        />
    )
}