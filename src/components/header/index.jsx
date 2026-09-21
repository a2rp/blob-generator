import { Styled } from "./styled";

const Header = () => (
    <Styled.Wrapper>
        <Styled.Main>
            <Styled.Brand>
                <Styled.Logo
                    src={`${import.meta.env.BASE_URL}logo.png`}
                    alt="Blob Generator logo"
                />
                <Styled.Text>
                    <Styled.Kicker>CSS TOOL</Styled.Kicker>
                    <Styled.Name>Blob Generator</Styled.Name>
                </Styled.Text>
            </Styled.Brand>
            <Styled.Tagline>Shape your next interface</Styled.Tagline>
        </Styled.Main>
    </Styled.Wrapper>
);

export default Header;
