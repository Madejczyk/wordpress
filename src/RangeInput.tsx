import * as React from "react";

interface IRangeInputProps {
    maxValue: number;
    minValue: number;
    setValue: (arg0: React.ChangeEvent<HTMLInputElement>) => void;
    title: string;
    value: number;
}

export const RangeInput: React.SFC<IRangeInputProps> = ({
    maxValue,
    minValue,
    setValue,
    title,
    value,
}) => {
    return (
        <React.Fragment>
            <label>{title}</label>
            <input
                name={title}
                value={value}
                type="range"
                onChange={setValue}
                min={minValue}
                max={maxValue}
            />
        </React.Fragment>
    );
};
