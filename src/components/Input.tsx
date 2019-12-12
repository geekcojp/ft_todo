import React from 'react';

interface Props {
    type: string;
    value: string;
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<Props> = (props: Props) => {
    return (
        <input type={props.type} value={props.value} onChange={props.onChange} />
    );
}

export default Input;
