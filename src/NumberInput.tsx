import * as React from "react";

interface INumberInputProps {
    title: string;
    value: number;
    setValue: (arg0: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberInput: React.SFC<INumberInputProps> = ({title, value, setValue }) => {
    return (
        <div>
            {title}:
            <input name={title} value={value} type="number" onChange={setValue} />
        </div>
    );
};
