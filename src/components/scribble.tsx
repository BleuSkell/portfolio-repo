import React from 'react';

type Direction = 'top' | 'bottom' | 'left' | 'right';

interface ScribbleProps {
    text: string;
    className?: string;
    color?: string;
    direction?: Direction[];
    position?: React.CSSProperties['position'];
    offsetTop?: string;
    offsetLeft?: string;
}

const Scribble: React.FC<ScribbleProps> = ({ text, className = "", color, direction = ['bottom'], position, offsetTop, offsetLeft }) => {
    const ScribbleContainerStyles: React.CSSProperties = {
        display: 'flex',
        flexDirection: direction.includes('top') ? 'column-reverse' : 'column',
        alignItems: 'center',
        width: 'max-content',
        position: position || 'absolute',
        top: offsetTop,
        left: offsetLeft,
    }
    const ScribbleTextStyles: React.CSSProperties = {
        fontFamily: 'Permanent Marker, cursive',
        fontSize: '20px',
        color: color || 'currentColor',
    }

    const GetArrowRotation = () => {
        const flipX = direction.includes('left') ? -1 : 1;
        const flipY = direction.includes('top') ? -1 : 1;
        return `scale(${flipX}, ${flipY})`;
    }
    const ScribbleArrowStyles: React.CSSProperties = {
        width: '70px',
        transform: GetArrowRotation(),
    }

    return (
        <div className={`scribble ${className}`} style={ScribbleContainerStyles}>
            <p className={`scribble-text ${className}`} style={ScribbleTextStyles}>
                {text}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none"
                 className={`scribble-arrow ${className}`}
                 style={ScribbleArrowStyles}
            >
                <path d="M30.3491 31.5811L30.558 30.3311L31.1618 29.9525C29.2036 30.1222
                        28.2898 27.0739 26.4295 26.369C25.8681 26.1568 25.7735 26.8128 25.9497 27.0119C25.9921
                        27.0609 26.6775 27.2502 27.0985 27.6516C27.4575 27.9975 29.1938 29.5543 28.8805 29.9492C23.8153
                        29.4434 19.1711 28.2358 14.7619 25.6477C5.77699 20.3802 0.852119 10.8502 0.0231477 0.612125C-0.616531
                        15.7327 12.0922 28.8428 26.9223 30.2821C26.5796 31.1372 23.8022 30.2234 23.9882 31.5811H30.3459H30.3491Z"
                      fill={`${color || 'currentColor'}`}
                ></path>
            </svg>
        </div>
    );
}

export default Scribble;