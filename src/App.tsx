import * as React from "react";
import "./App.scss";
import { Loading } from "./Loading";
import { NumberInput } from "./NumberInput";

const MINIMUM_DURATION = 1;
const TITLE_DURATION = "Duration";
const TITLE_SIZE = "Size";

export const App: React.FunctionComponent = () => {
    const [customSize, setCustomSize] = React.useState(500);
    const [customDuration, setCustomDuration] = React.useState(2);
    const roundDuration = Math.max(MINIMUM_DURATION, customDuration);
    const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === "number" && e.target.value !== "") {
            const newValue = parseInt(e.target.value, 10);
            switch (e.target.name) {
                case TITLE_SIZE:
                    setCustomSize(newValue);
                    break;
                case TITLE_DURATION:
                    setCustomDuration(newValue);
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <div className="app">
            <div className="menu">
                <NumberInput
                    title={TITLE_SIZE}
                    value={customSize}
                    setValue={validateInput}
                />
                <NumberInput
                    title={TITLE_DURATION}
                    value={customDuration}
                    setValue={validateInput}
                />
            </div>
            <Loading customSize={customSize} roundDuration={roundDuration} />
        </div>
    );
};
