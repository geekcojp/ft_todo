import React from 'react';

interface Props {
    option: Array<string>;
    value: string;
    onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<Props> = (props: Props) => {
    return (
        <select value={props.value} onChange={props.onChange}>
            {props.option.map((value, key) => {
                return <option value={value} key={key}>{value}</option>
            })}
        </select>
    );
}

export default Select;
