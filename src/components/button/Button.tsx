import React from 'react';

interface ButtonProps {
    btnText: string;
    borderColor?: string;
    backgroundColor?: string;
    fontColor?: string;
    border?: string;
    click?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { btnText, borderColor, backgroundColor, fontColor, border, click } = props;

    const buttonStyle: React.CSSProperties = {
        borderColor: borderColor || 'black', 
        backgroundColor: backgroundColor || 'white', 
        color: fontColor || 'black', 
        border: border || '3px solid', 
    };

    return (
        <button className='py-2 px-8 rounded-full' style={buttonStyle} onClick={click}>
            {btnText}
        </button>
    );
};

export default Button;
