import React from 'react';

interface Props {
    option: Array<string>
}

const Select: React.FC<Props> = (props: Props) => {
    return (
        <select>
            {props.option.map((value, key) => {
                return <option value={value} key={key}>{value}</option>
            })}
        </select>
    );
}

export default Select;
