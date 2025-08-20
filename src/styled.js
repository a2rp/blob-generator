import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body { margin: 0; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
`;

const Wrapper = styled.div`
    --bg: #0b0f1a;
    --surface: #0f172a;
    --surface-2: #111827;
    --primary: #2563eb;
    --secondary: #1e40af;
    --text: #e5e7eb;
    --muted: #94a3b8;
    --border: #1f2937;
    --success: #16a34a;
    --danger: #ef4444;

    min-height: 100%;
    background: var(--bg);
    color: var(--text);
    display: flex;
    justify-content: center;
`;

const Main = styled.main`
    width: 100%;
    max-width: 1440px;
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 0px;
`;

const LeftCol = styled.aside`
    position: sticky;
    top: 0;
    align-self: start;
    height: 100dvh;
    background: var(--surface);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
`;

const RightCol = styled.section`
    min-height: 100dvh;
    background: var(--surface-2);
    display: flex;
    flex-direction: column;
`;

const Section = styled.div`
    padding: 24px 28px;
`;

export const Styled = {
    Wrapper,
    Main,
    LeftCol,
    RightCol,
    Section,
};
