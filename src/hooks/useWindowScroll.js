import { useState, useEffect } from 'react';

const useWindowScroll = () => {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    
    const [scrollTop, setScrollTop] = useState();
    useEffect(() => {        
        const updateScroll = () => {
            setScrollTop(document.documentElement.scrollTop)            
        };
        // Add event listener
        window.addEventListener('scroll', updateScroll);
        // Call handler right away
        updateScroll();
        // Remove event listener on cleanup
        return () => window.removeEventListener('scroll', updateScroll);
    }, []); 
    return scrollTop;
};

export default useWindowScroll;
