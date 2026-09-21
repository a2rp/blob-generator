import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        @keyframes headerReveal {
            from {
                opacity: 0;
                transform: translateY(-8px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        position: fixed;
        inset: 0 0 auto;
        z-index: 20;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #dbe3ed;
        background: rgba(255, 255, 255, 0.92);
        backdrop-filter: blur(12px);
        animation: headerReveal 420ms ease-out both;
    `,
    Main: styled.div`
        width: min(100%, 1100px);
        min-height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 0 22px;
        @media (max-width: 560px) {
            min-height: 62px;
            padding: 0 16px;
        }
    `,
    Brand: styled.div`
        display: flex;
        align-items: center;
        gap: 11px;
        min-width: 0;
    `,
    Logo: styled.img`
        width: 38px;
        height: 38px;
        flex: 0 0 auto;
        padding: 5px;
        border: 1px solid #cbd5e1;
        border-radius: 10px;
        background: #ffffff;
        object-fit: contain;
        @media (max-width: 560px) {
            width: 32px;
            height: 32px;
            padding: 4px;
        }
    `,
    Text: styled.div`
        min-width: 0;
    `,
    Kicker: styled.span`
        display: block;
        color: #64748b;
        font-size: 0.62rem;
        font-weight: 800;
        letter-spacing: 0.14em;
    `,
    Name: styled.span`
        display: block;
        color: #0f172a;
        font-size: 1.05rem;
        font-weight: 800;
        line-height: 1.2;
    `,
    Tagline: styled.span`
        color: #64748b;
        font-size: 0.9rem;
        @media (max-width: 560px) {
            display: none;
        }
    `,
};
