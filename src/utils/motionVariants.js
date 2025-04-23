export const fadeLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
};

export const fadeRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
};

export const fadeUpDelay = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: {duration: 0.6, delay: 0.2 },
    viewport: { once: true }
};

export const fadeDown = {
    initial: { opacity: 0, y: -30 },
    whileInView: { opacity: 1, y: 0 },
    transition: {duration: 0.4 },
    viewport: { once: true }
};

export const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: {duration: 0.6 },
    viewport: { once: true }
};

