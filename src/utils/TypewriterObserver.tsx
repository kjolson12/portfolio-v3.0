import { useEffect, useRef } from 'react';

export default function TypewriterObserver() {
    const observerRef = useRef<IntersectionObserver | null>(null);
    const queue = useRef<(() => void)[]>([]);
    const isProcessing = useRef(false);
    let characterCount = 0;
    let animationDuration = 0;

    const configTypewriterEffect = (element: HTMLElement) => {
        characterCount = element.textContent?.length || 0;
        animationDuration = characterCount * 0.05; // Adjust the multiplier for speed
    
        element.style.setProperty('animation', `typing ${animationDuration}s steps(${characterCount}, end) forwards, blink-caret .75s step-end infinite`);
        element.style.setProperty('border-color', 'var(--color-highlight)'); // Add a blinking cursor effect
    
        setTimeout(() => {
          element.style.setProperty('border-right', `none`); // Remove the blinking cursor after animation
        }, animationDuration * 1000); // Convert to milliseconds
    };

    // Process elements in the queue one by one
    const processQueue = () => {
        if (queue.current.length === 0) {
            isProcessing.current = false;
            return;
        }

        isProcessing.current = true;
        const nextCallback = queue.current.shift();
        
        if (nextCallback) {
            nextCallback();
        }

        // Stagger the next execution
        setTimeout(processQueue, animationDuration * 1000); // Adjust the delay as needed
    };

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  // 1. Immediately stop observing so it only fires once
                    observerRef.current?.unobserve(entry.target);

                  // 2. Add to queue instead of firing immediately
                    queue.current.push(() => configTypewriterEffect(entry.target as HTMLElement));

                  // 3. Start processing if not already running
                    if (!isProcessing.current) {
                        processQueue();
                    }
                }
            });
        }, { threshold: 0.1 });

        // Target all your specific typewriter elements
        const typewriterText = document.querySelectorAll('.typewriter');
        const sortedTypewriterText = Array.from(typewriterText).sort((a, b) => {
            const aTop = a.getBoundingClientRect().top;
            const bTop = b.getBoundingClientRect().top;
            return aTop - bTop;
        });
        if (observerRef.current) {
            sortedTypewriterText.forEach(h => observerRef.current?.observe(h));
        }

        return () => observerRef.current?.disconnect();
    }, [configTypewriterEffect]);

  return null; // This is a logic-only component
}
