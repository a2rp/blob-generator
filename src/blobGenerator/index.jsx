import { useMemo, useState } from "react";
import { Styled } from "./styled";

const DEFAULT = {
    dims: { w: 260, h: 260 },
    r: { r1: 30, r2: 70, r3: 50, r4: 40 }, // 4 corner radii controls
    colors: { c1: "#B6FFFA", c2: "#80B3FF" },
    angle: 180,
};

export default function BlobGenerator() {
    const [dims, setDims] = useState(DEFAULT.dims);
    const [r, setR] = useState(DEFAULT.r);
    const [colors, setColors] = useState(DEFAULT.colors);
    const [angle, setAngle] = useState(DEFAULT.angle);
    const [copied, setCopied] = useState(false);

    const borderRadius = useMemo(() => {
        return `${r.r1}% ${100 - r.r1}% ${100 - r.r3}% ${r.r3}% / ${r.r4}% ${r.r2}% ${100 - r.r2}% ${100 - r.r4}%`;
    }, [r]);

    const background = useMemo(() => {
        return `linear-gradient(${angle}deg, ${colors.c1} 0%, ${colors.c2} 100%)`;
    }, [angle, colors]);

    const cssOut = useMemo(() => {
        return [
            `/* Blob CSS */`,
            `width: ${dims.w}px;`,
            `height: ${dims.h}px;`,
            `border-radius: ${borderRadius};`,
            `background: ${background};`,
        ].join("\n");
    }, [dims, borderRadius, background]);

    const onDimChange = (key, val) => {
        const num = clampInt(val, 80, 600);
        const next = { ...dims, [key]: num };
        setDims(next);
    };

    const onRChange = (key, val) => {
        const num = clampInt(val, 0, 100);
        const next = { ...r, [key]: num };
        setR(next);
    };

    const onColorChange = (key, val) => {
        const next = { ...colors, [key]: val };
        setColors(next);
    };

    const onAngleChange = (val) => {
        const num = clampInt(val, 0, 360);
        setAngle(num);
    };

    const copyCSS = async () => {
        try {
            await navigator.clipboard.writeText(cssOut);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch {
            alert("Copy failed. Select the CSS and copy manually.");
        }
    };

    const resetAll = () => {
        setDims(DEFAULT.dims);
        setR(DEFAULT.r);
        setColors(DEFAULT.colors);
        setAngle(DEFAULT.angle);
    };

    const randomize = () => {
        const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        setR({
            r1: rnd(10, 90),
            r2: rnd(10, 90),
            r3: rnd(10, 90),
            r4: rnd(10, 90),
        });
        setAngle(rnd(0, 360));
        const palette = [
            ["#B6FFFA", "#80B3FF"],
            ["#FFD6E0", "#B8C0FF"],
            ["#C3F0CA", "#7FD1AE"],
            ["#FFE29A", "#FFA99A"],
            ["#D1C2FF", "#8AA7FF"],
        ];
        const pick = palette[rnd(0, palette.length - 1)];
        setColors({ c1: pick[0], c2: pick[1] });
    };

    return (
        <Styled.Wrapper>
            <div className="container">
                {/* LEFT: Live Preview */}
                <section className="left">
                    <header className="sectionHead">
                        <h2 className="title">Blob Preview</h2>
                        <p className="sub">Tweak values on the right and copy CSS.</p>
                    </header>

                    <div className="preview">
                        <div
                            className="blob"
                            // Live styles from derived values
                            style={{
                                width: `${dims.w}px`,
                                height: `${dims.h}px`,
                                borderRadius,
                                background,
                            }}
                            aria-label="Blob preview"
                        />
                    </div>
                </section>

                {/* RIGHT: Controls */}
                <section className="right">
                    <header className="sectionHead">
                        <h2 className="title">Controls</h2>
                    </header>

                    {/* Dimensions */}
                    <div className="group">
                        <label className="label">
                            Width (px)
                            <input
                                type="number"
                                className="input number"
                                min={80}
                                max={600}
                                value={dims.w}
                                onChange={(e) => onDimChange("w", e.target.value)}
                            />
                        </label>
                        <label className="label">
                            Height (px)
                            <input
                                type="number"
                                className="input number"
                                min={80}
                                max={600}
                                value={dims.h}
                                onChange={(e) => onDimChange("h", e.target.value)}
                            />
                        </label>
                    </div>

                    {/* Radius sliders */}
                    <div className="group">
                        <div className="row">
                            <span className="mini">Top-Left</span>
                            <input
                                type="range"
                                className="input range"
                                min={0}
                                max={100}
                                value={r.r1}
                                onChange={(e) => onRChange("r1", e.target.value)}
                                aria-label="Top-left radius"
                            />
                            <span className="val">{r.r1}%</span>
                        </div>

                        <div className="row">
                            <span className="mini">Top-Right</span>
                            <input
                                type="range"
                                className="input range"
                                min={0}
                                max={100}
                                value={r.r2}
                                onChange={(e) => onRChange("r2", e.target.value)}
                                aria-label="Top-right radius"
                            />
                            <span className="val">{r.r2}%</span>
                        </div>

                        <div className="row">
                            <span className="mini">Bottom-Right</span>
                            <input
                                type="range"
                                className="input range"
                                min={0}
                                max={100}
                                value={r.r3}
                                onChange={(e) => onRChange("r3", e.target.value)}
                                aria-label="Bottom-right radius"
                            />
                            <span className="val">{r.r3}%</span>
                        </div>

                        <div className="row">
                            <span className="mini">Bottom-Left</span>
                            <input
                                type="range"
                                className="input range"
                                min={0}
                                max={100}
                                value={r.r4}
                                onChange={(e) => onRChange("r4", e.target.value)}
                                aria-label="Bottom-left radius"
                            />
                            <span className="val">{r.r4}%</span>
                        </div>
                    </div>

                    {/* Angle + Colors */}
                    <div className="group">
                        <label className="label">
                            Angle ({angle}°)
                            <input
                                type="range"
                                className="input range"
                                min={0}
                                max={360}
                                value={angle}
                                onChange={(e) => onAngleChange(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="group">
                        <label className="label">
                            Color 1
                            <input
                                type="color"
                                className="input color"
                                value={colors.c1}
                                onChange={(e) => onColorChange("c1", e.target.value)}
                            />
                        </label>
                        <label className="label">
                            Color 2
                            <input
                                type="color"
                                className="input color"
                                value={colors.c2}
                                onChange={(e) => onColorChange("c2", e.target.value)}
                            />
                        </label>
                    </div>

                    {/* Buttons */}
                    <div className="buttons">
                        <button className="btn ghost" onClick={randomize} type="button">
                            Randomize
                        </button>
                        <button className="btn light" onClick={resetAll} type="button">
                            Reset
                        </button>
                        <button className="btn primary" onClick={copyCSS} type="button">
                            {copied ? "Copied!" : "Copy CSS"}
                        </button>
                    </div>

                    {/* Code Output */}
                    <div className="codeBox" aria-live="polite">
                        <pre className="code">{cssOut}</pre>
                    </div>

                    {/* developer */}
                    <div style={{ margin: "15px 10px" }}>
                        Designed and developed by <a href="https://www.ashishranjan.net" target="_blank" style={{ color: "#000" }}>https://www.ashishranjan.net</a>
                    </div>
                </section>
            </div>
        </Styled.Wrapper>
    );
}

// Small util: clamp + parseInt safely
function clampInt(v, min, max) {
    const n = parseInt(v, 10);
    if (Number.isNaN(n)) return min;
    return Math.min(max, Math.max(min, n));
}
