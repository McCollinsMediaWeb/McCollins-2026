import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TextReveal = ({ children, delay = 0, speed = 'normal', threshold = 0.15 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: threshold });

    // Duration mappings
    const duration = {
        fast: 0.5,
        normal: 0.8,
        slow: 1.2,
    }[speed] || 0.8;

    // Container variants for stagger triggers
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.04,
                delayChildren: delay / 1000,
            }
        }
    };

    // Words reveal variants (slide up from overflow baseline)
    const childVariants = {
        hidden: {
            y: "115%",
        },
        visible: {
            y: 0,
            transition: {
                duration,
                ease: [0.16, 1, 0.3, 1], // Premium ease-out-expo curve
            }
        }
    };

    // Helper function to recursively split text nodes into words while keeping inline styles/elements
    const processNode = (node) => {
        if (typeof node === 'string') {
            // Split by whitespace and capture spaces to preserve layout spacing
            return node.split(/(\s+)/).map((part, i) => {
                if (part.trim() === '') {
                    return part;
                }
                return (
                    <span key={i} className="text-reveal-word-wrapper" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
                        <motion.span
                            variants={childVariants}
                            style={{ display: 'inline-block', willChange: 'transform' }}
                        >
                            {part}
                        </motion.span>
                    </span>
                );
            });
        }

        if (React.isValidElement(node)) {
            if (node.type === 'br') {
                return <br key={Math.random()} />;
            }

            const nestedChildren = React.Children.map(node.props.children, processNode);
            return React.cloneElement(node, { ...node.props, key: Math.random() }, nestedChildren);
        }

        return node;
    };

    const child = React.Children.only(children);
    const MotionTag = typeof child.type === 'string' ? motion[child.type] : motion.div;

    return (
        <MotionTag
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className={`${child.props.className || ''}`.trim()}
            style={{ ...child.props.style }}
        >
            {React.Children.map(child.props.children, processNode)}
        </MotionTag>
    );
};

export default TextReveal;
