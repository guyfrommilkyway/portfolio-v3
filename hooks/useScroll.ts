const useScroll = () => {
    const scrollHandler = (section: string) => {
        const el = document.querySelector(section);

        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return { scrollHandler };
};

export default useScroll;
