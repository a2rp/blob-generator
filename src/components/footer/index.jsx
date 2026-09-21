import { createElement } from "react";
import {
    FaCodepen,
    FaFacebook,
    FaGithub,
    FaGlobe,
    FaLinkedin,
    FaPatreon,
    FaYoutube,
} from "react-icons/fa6";
import { FiCoffee, FiHeart, FiMail } from "react-icons/fi";
import { Styled } from "./styled";

const footerLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FiHeart },
    { label: "Buy Me A Coffee", href: "https://buymeacoffee.com/a2rp", icon: FiCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FaPatreon },
];

const Footer = () => (
    <Styled.Wrapper>
        <Styled.Main>
            <Styled.Copyright>
                Copyright &copy; {new Date().getFullYear()} {" "}
                <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                    Ashish Ranjan
                </a>
            </Styled.Copyright>
            <Styled.Links aria-label="Social and support links">
                {footerLinks.map(({ label, href, icon: Icon }) => (
                    <Styled.Link
                        key={label}
                        href={href}
                        target={href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        aria-label={label}
                        title={label}
                    >
                        {createElement(Icon, { "aria-hidden": true })}
                    </Styled.Link>
                ))}
            </Styled.Links>
        </Styled.Main>
    </Styled.Wrapper>
);

export default Footer;
