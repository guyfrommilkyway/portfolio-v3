const useScroll = () => {
    const handleScroll = (section: string) => {
        const el = document.querySelector(section);

        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return { handleScroll };
};

export default useScroll;
