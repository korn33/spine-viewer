import {useApplication} from "@pixi/react";
import {useEffect} from "react";
import {BunnySprite} from "../BunnySprite";

interface SceneProps {
    backgroundColor: number
}

export const Scene = ({ backgroundColor }: SceneProps) => {
    const app = useApplication().app;

    useEffect(() => {
        app.renderer.background.color = backgroundColor
    }, [backgroundColor]);

    return <BunnySprite/>;
};