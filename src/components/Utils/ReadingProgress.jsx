import { useState, useEffect } from 'react';

export function ReadingProgress() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrolled = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrolled / height) * 100;
            setWidth(progress);
        };

        window.addEventListener('scroll', updateProgress);
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
            <div 
                className="h-full bg-detail transition-all duration-300"
                style={{ width: `${width}%` }}
            />
        </div>
    );
} 