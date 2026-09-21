import styled from "styled-components";

export const Styled = {
    Shell: styled.div`
        min-height: 100vh;
        background: #edf2f7;
        color: #0f172a;
    `,
    Main: styled.main`
        min-height: 100vh;
        padding-top: 82px;
    `,
    BackToTop: styled.button`
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 30;
        width: 42px;
        height: 42px;
        display: grid;
        place-items: center;
        padding: 0;
        border: 1px solid #cbd5e1;
        border-radius: 50%;
        background: #ffffff;
        color: #0f172a;
        cursor: pointer;
        box-shadow: 0 10px 24px rgba(15, 23, 42, 0.14);
        transition: border-color 160ms ease, box-shadow 160ms ease, text-shadow 160ms ease;
        &:hover {
            border-color: #2563eb;
            box-shadow: 0 0 18px rgba(37, 99, 235, 0.24);
            text-shadow: 0 0 10px rgba(37, 99, 235, 0.45);
        }
        svg {
            width: 18px;
            height: 18px;
        }
        @media (max-width: 560px) {
            right: 16px;
            bottom: 16px;
        }
    `,
};
