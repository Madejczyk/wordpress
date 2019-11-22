import * as React from "react";
import {useWindowSize } from "./Hooks/useWindowSize";

interface ILoadingProps {
    customSize: number;
    roundDuration: number;
}

export const Loading: React.SFC<ILoadingProps> = ({ customSize, roundDuration }) => {
    const {width, height} = useWindowSize();
    const size = Math.min(width, height, customSize);
    const halfSize = size / 2;
    const radius = halfSize * (4 / 5);
    const stroke = radius / 4;
    const smallRadius = stroke / 3;

    return (
        <svg
            height={size}
            version="1.1"
            width={size}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <circle cx={halfSize} cy={halfSize} r={radius} strokeWidth={stroke} id="circle" />
                <circle cx={halfSize} cy={stroke} r={smallRadius} id="small-circle" />
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    dur={`${roundDuration}s`}
                    from={`0 ${halfSize} ${halfSize}`}
                    repeatCount="indefinite"
                    to={`360 ${halfSize} ${halfSize}`}
                    type="rotate"
                />
            </g>
        </svg>
    );
};
