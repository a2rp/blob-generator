import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        display: flex;
        justify-content: center;
        border-top: 1px solid #dbe3ed;
        background: #ffffff;
        color: #64748b;
    `,
    Main: styled.div`
        width: min(100%, 1100px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 20px 22px;
        @media (max-width: 700px) {
            flex-direction: column;
            align-items: flex-start;
            padding: 18px 16px;
        }
    `,
    Copyright: styled.p`
        margin: 0;
        font-size: 0.88rem;
        a {
            color: #0f172a;
            font-weight: 700;
            text-decoration: none;
            transition: text-shadow 160ms ease;
        }
        a:hover {
            text-shadow: 0 0 12px rgba(37, 99, 235, 0.45);
        }
    `,
    Links: styled.nav`
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 8px;
    `,
    Link: styled.a`
        width: 34px;
        height: 34px;
        display: grid;
        place-items: center;
        border: 1px solid #cbd5e1;
        border-radius: 9px;
        color: #64748b;
        text-decoration: none;
        transition: border-color 160ms ease, box-shadow 160ms ease, text-shadow 160ms ease;
        svg {
            width: 16px;
            height: 16px;
        }
        &:hover {
            border-color: #2563eb;
            box-shadow: 0 0 16px rgba(37, 99, 235, 0.2);
            text-shadow: 0 0 10px rgba(37, 99, 235, 0.45);
        }
    `,
};
