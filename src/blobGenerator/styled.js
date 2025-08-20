import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        --bg: #edf2f7;
        --card: #ffffff;
        --ink: #0f172a;
        --muted: #64748b;
        --accent: #111827;
        --ring: rgba(59, 130, 246, 0.35);

        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6vh 16px;
        background: var(--bg);

        .container {
            width: 100%;
            max-width: 1100px;
            background: var(--card);
            color: var(--ink);
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(2, 6, 23, 0.08);
            padding: 22px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 22px;
        }

        @media (width < 900px) {
            .container {
                grid-template-columns: 1fr;
            }
        }

        .sectionHead {
            margin-bottom: 8px;
        }
        .title {
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 0.3px;
        }
        .sub {
            font-size: 13px;
            color: var(--muted);
            margin-top: 2px;
        }

        .left {
            display: flex;
            flex-direction: column;
        }

        .left .preview {
            display: grid;
            place-items: center;
            height: 100%;
            min-height: 320px;
            border: 1px dashed #e5e7eb;
            border-radius: 14px;
            background: #fafafa;
        }

        .blob {
            border: 1px solid rgba(15, 23, 42, 0.06);
            box-shadow: 0 10px 20px rgba(2, 6, 23, 0.08);
            transition: border-radius 0.15s ease, background 0.15s ease,
                width 0.15s ease, height 0.15s ease, transform 0.2s ease;
            will-change: border-radius, width, height, background;
        }
        .blob:hover {
            transform: translateY(-1px);
        }

        .right .group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px 16px;
            margin-bottom: 16px;
        }
        .right .group .row {
            display: grid;
            grid-template-columns: 100px 1fr 48px;
            align-items: center;
            gap: 10px;
        }

        @media (width < 560px) {
            .right .group {
                grid-template-columns: 1fr;
            }
            .right .group .row {
                grid-template-columns: 1fr;
            }
        }

        .label {
            display: grid;
            gap: 6px;
            font-size: 13px;
            font-weight: 600;
        }
        .mini {
            font-size: 12px;
            color: var(--muted);
            font-weight: 600;
        }
        .val {
            font-size: 12px;
            color: var(--muted);
            text-align: right;
        }

        .input {
            width: 100%;
            border: 1px solid #e5e7eb;
            border-radius: 10px;
            padding: 10px 12px;
            font: inherit;
            outline: none;
            background: #fff;
            color: var(--ink);
            transition: box-shadow 0.12s ease, border-color 0.12s ease;
        }
        .input:hover {
            border-color: #d3d7df;
        }
        .input:focus {
            border-color: #93c5fd;
            box-shadow: 0 0 0 4px var(--ring);
        }

        .input.number {
            appearance: textfield;
        }
        .input.number::-webkit-outer-spin-button,
        .input.number::-webkit-inner-spin-button {
            appearance: none;
            margin: 0;
        }

        .input.range {
            padding: 0;
            height: 36px;
            background: transparent;
        }

        .input.color {
            padding: 6px;
            height: 40px;
        }

        .buttons {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            margin-top: 4px;
            flex-wrap: wrap;
        }

        .btn {
            border: 1px solid #e5e7eb;
            background: #fff;
            color: var(--ink);
            padding: 10px 14px;
            border-radius: 10px;
            font-weight: 700;
            cursor: pointer;
            transition: transform 0.08s ease, box-shadow 0.12s ease,
                background 0.12s ease, border-color 0.12s ease;
        }
        .btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 8px 20px rgba(2, 6, 23, 0.06);
            border-color: #d3d7df;
        }
        .btn:active {
            transform: translateY(0);
            box-shadow: none;
        }
        .btn.primary {
            background: var(--accent);
            color: #fff;
            border-color: var(--accent);
        }
        .btn.light {
            background: #f8fafc;
        }
        .btn.ghost {
            background: transparent;
        }

        .codeBox {
            margin-top: 12px;
            border: 1px solid #0f172a12;
            background: #0f172a;
            color: #e2e8f0;
            border-radius: 12px;
            padding: 12px;
            overflow: auto;
        }
        .code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12px;
            line-height: 1.5;
            white-space: pre-wrap;
            word-break: break-word;
            user-select: text;
        }
    `,
};
