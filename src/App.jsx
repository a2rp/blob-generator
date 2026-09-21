import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { GlobalStyle } from "./styled";
import { Styled } from "./App.styled";
import BlobGenerator from "./blobGenerator";
import Footer from "./components/footer";
import Header from "./components/header";

const App = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowBackToTop(window.scrollY > 320);

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <Styled.Shell>
            <GlobalStyle />
            <Header />
            <Styled.Main>
                <BlobGenerator />
            </Styled.Main>
            <Footer />
            {showBackToTop && (
                <Styled.BackToTop type="button" onClick={scrollToTop} aria-label="Go to top" title="Go to top">
                    <FiArrowUp aria-hidden="true" />
                </Styled.BackToTop>
            )}
        </Styled.Shell>
    );
};

export default App;

