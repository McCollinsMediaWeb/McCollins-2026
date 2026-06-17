import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Helper to merge refs
const mergeRefs = (...refs) => {
    return (node) => {
        refs.forEach((ref) => {
            if (typeof ref === 'function') {
                ref(node);
            } else if (ref && typeof ref === 'object') {
                ref.current = node;
            }
        });
    };
};

const AnimateOnScroll = ({
    children,
    animation = 'fadeInUp',
    delay = 0,
    speed = 'normal',
    threshold = 0.15,
}) => {
    const localRef = useRef(null);
    const inView = useInView(localRef, { once: true, amount: threshold });

    // Map animation speed to duration in seconds
    const duration = {
        fast: 0.4,
        normal: 0.8,
        slow: 1.5,
    }[speed] || 0.8;

    // Define motion variants for different animations
    const variants = {
        hidden: {
            opacity: 0,
            scale: animation === 'revealImage' ? 1.15 : 1,
            y: animation === 'fadeInUp' ? 40 : animation === 'fadeInDown' ? -40 : 0,
            x: animation === 'fadeInLeft' ? -40 : animation === 'fadeInRight' ? 40 : 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay: delay / 1000,
                ease: [0.16, 1, 0.3, 1], // Smooth premium ease-out curve
            },
        },
    };

    // Ensure children is a single React element
    const child = React.Children.only(children);

    // Merge child's ref (if any) with local ref
    const mergedRef = mergeRefs(localRef, child.ref || child.props.ref);

    // If it's a standard HTML tag (string type), create a motion component of that type.
    // Otherwise, wrap in motion.div.
    const MotionComponent = typeof child.type === 'string' ? motion[child.type] : motion.div;

    if (typeof child.type === 'string') {
        return (
            <MotionComponent
                {...child.props}
                ref={mergedRef}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                className={`${child.props.className || ''}`.trim()}
                style={{
                    ...child.props.style,
                }}
            >
                {child.props.children}
            </MotionComponent>
        );
    }

    // For custom React components, wrap them in motion.div
    return (
        <motion.div
            ref={mergedRef}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            className={`${child.props.className || ''}`.trim()}
            style={{
                ...child.props.style,
            }}
        >
            {child}
        </motion.div>
    );
};

AnimateOnScroll.displayName = 'AnimateOnScroll';

export default AnimateOnScroll;