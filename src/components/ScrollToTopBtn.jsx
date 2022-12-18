export default function ScrollToTopBtn() {

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button className="fixed bottom-5 right-5" onClick={handleClick}>
            <img src="https://img.icons8.com/external-sbts2018-solid-sbts2018/50/ffffff/external-arrow-up-basic-ui-elements-2.3-sbts2018-solid-sbts2018.png" alt="scroll to top" />
        </button>
    );
}