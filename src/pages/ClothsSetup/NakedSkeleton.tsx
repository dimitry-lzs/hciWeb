import React, { useEffect, useState } from 'react';

import { ClothPosition } from '.';

function MouseMoveListener(event: MouseEvent, setMousePosition: React.Dispatch<React.SetStateAction<{ x: null | number; y: null | number; }>>, setOffset: React.Dispatch<React.SetStateAction<{ x: number; y: number; }>>) {
    setMousePosition(oldMousePosition => {
        setOffset(oldOffset => ({ x: oldOffset.x + event.clientX - (oldMousePosition.x || 0), y: oldOffset.y + event.clientY - (oldMousePosition.y || 0) }));
        return { x: event.clientX, y: event.clientY };
    });
}

function MouseDownListener(event: MouseEvent, element: HTMLElement, setMousePosition: React.Dispatch<React.SetStateAction<{ x: null | number; y: null | number; }>>, setOffset: React.Dispatch<React.SetStateAction<{ x: number; y: number; }>>) {
    setMousePosition({ x: event.clientX, y: event.clientY });
    const mouseMoveListener = (moveEvent: MouseEvent) => MouseMoveListener(moveEvent, setMousePosition, setOffset);
    element.addEventListener('mousemove', mouseMoveListener);
    element.addEventListener('mouseup', () => {
        element.removeEventListener('mousemove', mouseMoveListener);
    });
}

export function SkeletonClothes({ setPositionValidity, autoPosition, setAutoPosition }: { setPositionValidity: React.Dispatch<React.SetStateAction<ClothPosition>>, autoPosition: boolean, setAutoPosition: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [_, setMousePosition] = useState<{ x: null | number, y: null | number }>({ x: null, y: null });
    const [offset, setOffset] = useState<{ x: number, y: number }>({ x: -150, y: -200 });

    useEffect(() => {
        const pieceOfCloth = document.getElementById('ClothsPiece');
        if (!pieceOfCloth) return;

        const mouseDownListener = (event: MouseEvent) => MouseDownListener(event, pieceOfCloth, setMousePosition, setOffset);
        pieceOfCloth?.addEventListener('mousedown', mouseDownListener);

        return () => {
            pieceOfCloth?.removeEventListener('mousedown', mouseDownListener);
        };
    }, []);

    useEffect(() => {
        const pieceOfCloth = document.getElementById('ClothsPiece');

        if (pieceOfCloth?.style) {
            pieceOfCloth.style.transform = `translate(${offset.x}px, ${offset.y}px)`;
        }

        if (offset.y > -121 && offset.y < -104) {
            if (offset.x > -250 && offset.x < -100) {
                setPositionValidity(ClothPosition.good);
            } else if (offset.x < 0 && offset.x > -350) {
                setPositionValidity(ClothPosition.susceptibleToPrecipitation);
            } else {
                setPositionValidity(ClothPosition.invalid);
            }
        } else {
            setPositionValidity(ClothPosition.invalid);
        }

    }, [offset]);

    useEffect(() => {
        if (autoPosition) {
            setOffset({ x: -152, y: -108 });
            setAutoPosition(false);
        }
    }, [autoPosition]);

    return <div id='ClothsPiece' className='SkeletonClothes'>
    </div>;
}
export default function NakedSkeleton() {
    return <div className='TentSkeleton'>
    </div>;
}
