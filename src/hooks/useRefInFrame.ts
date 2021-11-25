import { useEffect, useMemo, useState } from 'react';

export const useRefInFrame = (targetRef: any) => {
    const [isInFrame, setIsInFrame] = useState(false);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    }

    const callbackFunction = (entries: Array<any>) => {
        const [entry] = entries;
        setIsInFrame(entry.isIntersecting);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        const currentTarget = targetRef.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        }
    });

    return isInFrame;
}