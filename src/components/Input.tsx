import React from 'react';

interface Props {
    type: string
}
const Input: React.FC<Props> = (props: Props) => {
    return (
        <input type={props.type} />
    );
}

export default Input;
