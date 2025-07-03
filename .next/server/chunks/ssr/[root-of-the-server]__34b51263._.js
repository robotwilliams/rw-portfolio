module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/components/PixelIcon.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PixelIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function PixelIcon({ icon, size }) {
    // State for click animation feedback
    const [isClicked, setIsClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    /**
   * Handle Click Animation
   *
   * Provides visual feedback when the icon is clicked by
   * temporarily scaling it down and then back up.
   */ const handleClick = ()=>{
        setIsClicked(true);
        setTimeout(()=>setIsClicked(false), 150);
    };
    /**
   * Icon Styles
   *
   * Base styles for all icons including size, animation,
   * and clean rendering.
   */ const iconStyles = {
        width: `${size}px`,
        height: `${size}px`,
        transform: isClicked ? "scale(0.95)" : "scale(1)",
        transition: "transform 0.15s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        imageRendering: "pixelated"
    };
    /**
   * Get Icon Content
   *
   * Returns the appropriate icon content based on the icon prop.
   * Each icon type has its own custom minimal design.
   */ const getIconContent = ()=>{
        switch(icon){
            case "👤":
                // Windows 98 User icon - exact replica from 98.js.org
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: iconStyles,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: size,
                        height: size,
                        viewBox: "0 0 32 28",
                        style: {
                            imageRendering: "pixelated"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "12",
                                y: "4",
                                width: "8",
                                height: "8",
                                fill: "#ffdbac",
                                stroke: "#000000",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "10",
                                y: "12",
                                width: "12",
                                height: "12",
                                fill: "#000080",
                                stroke: "#000000",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "6",
                                y: "14",
                                width: "4",
                                height: "8",
                                fill: "#000080",
                                stroke: "#000000",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "22",
                                y: "14",
                                width: "4",
                                height: "8",
                                fill: "#000080",
                                stroke: "#000000",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "13",
                                y: "6",
                                width: "2",
                                height: "2",
                                fill: "#000000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "17",
                                y: "6",
                                width: "2",
                                height: "2",
                                fill: "#000000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "14",
                                y: "9",
                                width: "4",
                                height: "1",
                                fill: "#000000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PixelIcon.tsx",
                        lineNumber: 78,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PixelIcon.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this);
            case "💼":
                // Windows 98 Briefcase icon - exact replica from 98.js.org
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: iconStyles,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: size,
                        height: size,
                        viewBox: "0 0 32 28",
                        style: {
                            imageRendering: "pixelated"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "6",
                                y: "10",
                                width: "20",
                                height: "14",
                                fill: "#808080",
                                stroke: "#000000",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "12",
                                y: "8",
                                width: "8",
                                height: "4",
                                fill: "#c0c0c0",
                                stroke: "#000000",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "14",
                                y: "16",
                                width: "4",
                                height: "6",
                                fill: "#ffff00",
                                stroke: "#000000",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 163,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "15",
                                y: "18",
                                width: "2",
                                height: "2",
                                fill: "#000000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 173,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "8",
                                y: "12",
                                width: "16",
                                height: "1",
                                fill: "#000000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "8",
                                y: "14",
                                width: "16",
                                height: "1",
                                fill: "#000000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 176,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PixelIcon.tsx",
                        lineNumber: 136,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PixelIcon.tsx",
                    lineNumber: 135,
                    columnNumber: 11
                }, this);
            case "📧":
                // Windows 98 Mail icon - exact replica from 98.js.org
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: iconStyles,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: size,
                        height: size,
                        viewBox: "0 0 32 28",
                        style: {
                            imageRendering: "pixelated"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "8",
                                y: "12",
                                width: "16",
                                height: "12",
                                fill: "#ffffff",
                                stroke: "#000000",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "8,12 16,6 24,12",
                                fill: "#ffffff",
                                stroke: "#000000",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 202,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "14",
                                y: "18",
                                width: "4",
                                height: "4",
                                fill: "#ffff00",
                                stroke: "#000000",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 209,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "15",
                                y: "20",
                                width: "2",
                                height: "1",
                                fill: "#000000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 219,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "10",
                                y: "14",
                                width: "12",
                                height: "1",
                                fill: "#000000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "10",
                                y: "16",
                                width: "12",
                                height: "1",
                                fill: "#000000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PixelIcon.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PixelIcon.tsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PixelIcon.tsx",
                    lineNumber: 184,
                    columnNumber: 11
                }, this);
            case "📁":
            case "folder":
                // Use the rw-site-icon-folder-close.png image
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...iconStyles,
                        overflow: "visible"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/rw-site-icon-folder-close.png",
                        alt: "Folder",
                        width: size,
                        height: size,
                        style: {
                            imageRendering: "pixelated",
                            display: "block",
                            maxWidth: "none",
                            maxHeight: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/PixelIcon.tsx",
                        lineNumber: 232,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PixelIcon.tsx",
                    lineNumber: 231,
                    columnNumber: 11
                }, this);
            default:
                // Fallback for any other icon - displays the emoji as-is
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: iconStyles,
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/src/components/PixelIcon.tsx",
                    lineNumber: 249,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pixel-icon-container",
        onClick: handleClick,
        style: {
            cursor: "pointer",
            transition: "transform 0.2s ease"
        },
        children: getIconContent()
    }, void 0, false, {
        fileName: "[project]/src/components/PixelIcon.tsx",
        lineNumber: 254,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ProjectWindow.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * ProjectWindow Component
 *
 * A draggable RobotOS-style window that displays detailed project information.
 * This component is used within the work page to show individual project details
 * when users click on project icons in the main work grid.
 *
 * Features:
 * - Authentic RobotOS window styling with title bar and controls
 * - Draggable window that can be moved around the screen
 * - Window activation and z-index management
 * - Project content rendering with markdown-to-HTML conversion
 * - Project metadata display (client, duration, date, technologies)
 * - Live site and GitHub links when available
 * - Gallery display for project images
 * - Close button to dismiss the window
 *
 * The window integrates with the parent component's window management system
 * to ensure only one project window is open at a time and proper window
 * stacking behavior.
 */ __turbopack_context__.s({
    "default": (()=>ProjectWindow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PixelIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PixelIcon.tsx [app-ssr] (ecmascript)");
;
;
;
;
function ProjectWindow({ project, onClose, isActive = false, onActivate, position: externalPosition, onMove }) {
    const [htmlContent, setHtmlContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        // Use external position if provided, otherwise calculate default
        if (externalPosition) {
            return externalPosition;
        }
        // Use exact same size and positioning as work window
        const getResponsiveWindowSize = ()=>{
            const screenWidth = window.innerWidth;
            const baseWidth = 850;
            const baseHeight = 550; // Reduced from 650 to 550
            if (screenWidth < 1200) {
                const scale = Math.max(0.4, screenWidth / 1200);
                return {
                    width: Math.floor(baseWidth * scale),
                    height: Math.floor(baseHeight * scale)
                };
            }
            // Scale up on extra large screens
            if (screenWidth >= 1400) {
                const scale = Math.min(1.4, screenWidth / 1400);
                return {
                    width: Math.floor(baseWidth * scale),
                    height: Math.floor(baseHeight * scale)
                };
            }
            return {
                width: baseWidth,
                height: baseHeight
            };
        };
        const windowSize = getResponsiveWindowSize();
        const cascadeOffset = 35;
        // Start higher up for the first window, then cascade
        const baseX = Math.max(0, (window.innerWidth - windowSize.width) / 2);
        const baseY = Math.max(0, (window.innerHeight - windowSize.height) / 2) - 50;
        const x = baseX + cascadeOffset;
        const y = baseY + cascadeOffset;
        // Ensure window doesn't go off-screen (leave space for taskbar)
        const maxX = Math.max(0, window.innerWidth - windowSize.width - 20);
        const maxY = Math.max(0, window.innerHeight - windowSize.height - 80); // Taskbar height is ~52px, so leave 80px margin
        return {
            x: Math.min(Math.max(0, x), maxX),
            y: Math.min(Math.max(0, y), maxY)
        };
    });
    const [windowSize, setWindowSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const screenWidth = window.innerWidth;
        const baseWidth = 850;
        const baseHeight = 550; // Reduced from 650 to 550
        if (screenWidth < 1200) {
            const scale = Math.max(0.7, screenWidth / 1200);
            return {
                width: Math.floor(baseWidth * scale),
                height: Math.floor(baseHeight * scale)
            };
        }
        return {
            width: baseWidth,
            height: baseHeight
        };
    });
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragOffset, setDragOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isResizing, setIsResizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resizeStart, setResizeStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Handle window resize to keep window responsive
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleWindowResize = ()=>{
            const getResponsiveWindowSize = ()=>{
                const screenWidth = window.innerWidth;
                const baseWidth = 850;
                const baseHeight = 550; // Reduced from 600 to 550
                if (screenWidth < 1200) {
                    const scale = Math.max(0.4, screenWidth / 1200);
                    return {
                        width: Math.floor(baseWidth * scale),
                        height: Math.floor(baseHeight * scale)
                    };
                }
                // Scale up on extra large screens
                if (screenWidth >= 1400) {
                    const scale = Math.min(1.4, screenWidth / 1400);
                    return {
                        width: Math.floor(baseWidth * scale),
                        height: Math.floor(baseHeight * scale)
                    };
                }
                return {
                    width: baseWidth,
                    height: baseHeight
                };
            };
            const newWindowSize = getResponsiveWindowSize();
            setWindowSize(newWindowSize);
            // Maintain cascading position while scaling
            const cascadeOffset = 35;
            const baseX = Math.max(0, (window.innerWidth - newWindowSize.width) / 2);
            const baseY = Math.max(0, (window.innerHeight - newWindowSize.height) / 2) - 50;
            const x = baseX + cascadeOffset;
            const y = baseY + cascadeOffset;
            // Ensure window doesn't go off-screen with proper margins (leave space for taskbar)
            const maxX = Math.max(0, window.innerWidth - newWindowSize.width - 20);
            const maxY = Math.max(0, window.innerHeight - newWindowSize.height - 80); // Taskbar height is ~52px, so leave 80px margin
            setPosition({
                x: Math.min(Math.max(0, x), maxX),
                y: Math.min(Math.max(0, y), maxY)
            });
        };
        window.addEventListener("resize", handleWindowResize);
        return ()=>window.removeEventListener("resize", handleWindowResize);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouseMove = (e)=>{
            if (isDragging) {
                const newX = e.clientX - dragOffset.x;
                const newY = e.clientY - dragOffset.y;
                // Constrain to viewport bounds (leave space for taskbar)
                const maxX = Math.max(0, window.innerWidth - windowSize.width - 20);
                const maxY = Math.max(0, window.innerHeight - windowSize.height - 80); // Taskbar height is ~52px, so leave 80px margin
                const constrainedPosition = {
                    x: Math.min(Math.max(0, newX), maxX),
                    y: Math.min(Math.max(0, newY), maxY)
                };
                setPosition(constrainedPosition);
                if (onMove) {
                    onMove(constrainedPosition.x, constrainedPosition.y);
                }
            } else if (isResizing) {
                const deltaX = e.clientX - resizeStart.x;
                const deltaY = e.clientY - resizeStart.y;
                const minWidth = 400;
                const minHeight = 300;
                const newWidth = Math.max(minWidth, resizeStart.width + deltaX);
                const newHeight = Math.max(minHeight, resizeStart.height + deltaY);
                // Constrain maximum size to viewport (leave space for taskbar)
                const maxWidth = window.innerWidth - 40;
                const maxHeight = window.innerHeight - 100; // Taskbar height is ~52px, so leave 100px margin
                const constrainedWidth = Math.min(newWidth, maxWidth);
                const constrainedHeight = Math.min(newHeight, maxHeight);
                setWindowSize({
                    width: constrainedWidth,
                    height: constrainedHeight
                });
            }
        };
        const handleMouseUp = ()=>{
            setIsDragging(false);
            setIsResizing(false);
        };
        if (isDragging || isResizing) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }
        return ()=>{
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [
        isDragging,
        dragOffset,
        isResizing,
        resizeStart
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const convertMarkdown = async ()=>{
            try {
                const response = await fetch("/api/content/markdown", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        markdown: project.content
                    })
                });
                const result = await response.json();
                if (result.success) {
                    setHtmlContent(result.data);
                }
            } catch (error) {
                console.error("Error converting markdown:", error);
            }
        };
        convertMarkdown();
    }, [
        project.content
    ]);
    const startDrag = (e)=>{
        e.preventDefault();
        setIsDragging(true);
        setDragOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };
    const startResize = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsResizing(true);
        setResizeStart({
            x: e.clientX,
            y: e.clientY,
            width: windowSize.width,
            height: windowSize.height
        });
    };
    const windowContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `retro-window fixed ${isActive ? "active" : ""}`,
            style: {
                left: position.x,
                top: position.y,
                width: windowSize.width,
                height: windowSize.height,
                zIndex: 999
            },
            onClick: (e)=>{
                e.stopPropagation();
                if (onActivate) {
                    onActivate();
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `window-titlebar cursor-move ${isActive ? "active" : ""}`,
                    onMouseDown: (e)=>{
                        startDrag(e);
                        if (onActivate) {
                            onActivate();
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectWindow.tsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-7 h-7 bg-yellow-600 border-2 border-yellow-800 flex items-center justify-center text-black text-lg font-bold hover:bg-yellow-500 transition-colors cursor-pointer",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        onClose();
                                    },
                                    style: {
                                        boxShadow: "inset 1px 1px 0 #ffff80, inset -1px -1px 0 #808000",
                                        borderRadius: "4px"
                                    },
                                    children: "−"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectWindow.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-7 h-7 bg-red-600 border-2 border-red-800 flex items-center justify-center text-white text-lg font-bold hover:bg-red-500 transition-colors cursor-pointer",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        onClose();
                                    },
                                    style: {
                                        boxShadow: "inset 1px 1px 0 #ff8080, inset -1px -1px 0 #800000",
                                        borderRadius: "4px"
                                    },
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectWindow.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectWindow.tsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectWindow.tsx",
                    lineNumber: 306,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "window-content h-full overflow-auto relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cursor-se-resize",
                                onMouseDown: startResize,
                                style: {
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    width: "16px",
                                    height: "16px",
                                    background: "#2a2a2a",
                                    cursor: "se-resize",
                                    borderTop: "1px solid #606060",
                                    borderLeft: "1px solid #606060",
                                    boxShadow: "inset 1px 1px 0 #0a0a0a"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PixelIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        icon: getProjectIcon(project.title),
                                        size: 32
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectWindow.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-xl font-bold text-[#000080]",
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-[#000000]",
                                                children: project.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                                lineNumber: 377,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectWindow.tsx",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#ffffff] border border-[#808080] p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-[#808080]",
                                                children: "Client"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                                lineNumber: 384,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-sm",
                                                children: project.client
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                                lineNumber: 385,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectWindow.tsx",
                                        lineNumber: 383,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#ffffff] border border-[#808080] p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-[#808080]",
                                                children: "Duration"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                                lineNumber: 388,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-sm",
                                                children: project.duration
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                                lineNumber: 389,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectWindow.tsx",
                                        lineNumber: 387,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#ffffff] border border-[#808080] p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-[#808080]",
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                                lineNumber: 392,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-sm",
                                                children: new Date(project.date).toLocaleDateString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                                lineNumber: 393,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectWindow.tsx",
                                        lineNumber: 391,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                lineNumber: 382,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3 mb-4",
                                children: [
                                    project.live_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: project.live_url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center px-4 py-2 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] text-[#000000] font-semibold text-sm hover:bg-[#d4d0c8] transition-colors",
                                        children: "View Live Site"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectWindow.tsx",
                                        lineNumber: 402,
                                        columnNumber: 17
                                    }, this),
                                    project.github_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: project.github_url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center px-4 py-2 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] text-[#000000] font-semibold text-sm hover:bg-[#d4d0c8] transition-colors",
                                        children: "View Code"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectWindow.tsx",
                                        lineNumber: 412,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                lineNumber: 400,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-[#000080] mb-4",
                                        children: "📄 Project Details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectWindow.tsx",
                                        lineNumber: 425,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "prose prose-sm max-w-none text-[#000000]",
                                        style: {
                                            // Tailwind prose overrides
                                            "--tw-prose-body": "#000000",
                                            "--tw-prose-headings": "#000080",
                                            "--tw-prose-links": "#000080"
                                        },
                                        dangerouslySetInnerHTML: {
                                            __html: htmlContent
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectWindow.tsx",
                                        lineNumber: 428,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                lineNumber: 424,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-[#000080] mb-4",
                                        children: "🔧 Technologies Used"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectWindow.tsx",
                                        lineNumber: 444,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: project.technologies.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1 bg-[#ffffff] border border-[#808080] text-[#000000] font-medium text-xs",
                                                children: tech
                                            }, tech, false, {
                                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                                lineNumber: 449,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectWindow.tsx",
                                        lineNumber: 447,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                lineNumber: 443,
                                columnNumber: 13
                            }, this),
                            project.gallery && project.gallery.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-[#000080] mb-4",
                                        children: "🖼️ Project Gallery"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectWindow.tsx",
                                        lineNumber: 462,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: project.gallery.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#ffffff] border border-[#808080] h-48 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#808080] text-sm",
                                                    children: [
                                                        "Gallery Image ",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ProjectWindow.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 23
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                                lineNumber: 467,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectWindow.tsx",
                                        lineNumber: 465,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectWindow.tsx",
                                lineNumber: 461,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectWindow.tsx",
                        lineNumber: 351,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectWindow.tsx",
                    lineNumber: 350,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectWindow.tsx",
            lineNumber: 289,
            columnNumber: 7
        }, this)
    }, void 0, false);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(windowContent, document.body);
}
/**
 * Get Project Icon
 *
 * Maps project titles to appropriate Windows 98-style icons.
 * Returns emoji representations that will be styled by the PixelIcon component.
 */ function getProjectIcon(projectTitle) {
    const title = projectTitle.toLowerCase();
    if (title.includes("landscape") || title.includes("edgewater")) {
        return "📁"; // Folder icon for landscape project
    } else if (title.includes("smps") || title.includes("new york")) {
        return "💼"; // Briefcase for professional services
    } else if (title.includes("sbn") || title.includes("philadelphia")) {
        return "📁"; // Folder for business network
    } else if (title.includes("evron")) {
        return "📧"; // Mail for e-commerce
    } else if (title.includes("springboard") || title.includes("collaborative")) {
        return "📁"; // Folder for educational nonprofit
    } else if (title.includes("u3") || title.includes("studio")) {
        return "💼"; // Briefcase for creative agency
    } else {
        return "📁"; // Default folder icon
    }
}
}}),
"[project]/src/components/RetroLoading.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * RetroLoading Component
 *
 * A hacker-style terminal loading animation that displays
 * funny console messages with retro terminal aesthetics.
 * Perfect for loading states in the Windows 98 interface.
 */ __turbopack_context__.s({
    "default": (()=>RetroLoading)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function RetroLoading({ messages = [
    "> Initializing retro interface {{dots}}",
    "> Loading RobotOS nostalgia {{dots}}",
    "> Bypassing modern web standards {{dots}}",
    "> Installing pixel art drivers {{dots}}",
    "> System ready. Welcome to RobotOS!"
], onComplete, duration = 3500 }) {
    const [currentMessageIndex, setCurrentMessageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isComplete, setIsComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [spinnerChar, setSpinnerChar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dotCounts, setDotCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spinnerChars = [
        "|",
        "/",
        "-",
        "\\"
    ];
    // Store random max dots for each message
    const maxDotsPerMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    function getMaxDots(index) {
        if (!maxDotsPerMessage.current[index]) {
            // Random between 3 and 7 for variety
            maxDotsPerMessage.current[index] = Math.floor(Math.random() * 5) + 3;
        }
        return maxDotsPerMessage.current[index];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const messageInterval = setInterval(()=>{
            setCurrentMessageIndex((prev)=>{
                if (prev < messages.length - 1) {
                    return prev + 1;
                } else {
                    clearInterval(messageInterval);
                    setTimeout(()=>{
                        setIsComplete(true);
                        onComplete?.();
                    }, 1000);
                    return prev;
                }
            });
        }, duration / messages.length);
        return ()=>clearInterval(messageInterval);
    }, [
        messages,
        duration,
        onComplete
    ]);
    // Spinner animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const spinnerInterval = setInterval(()=>{
            setSpinnerChar((prev)=>(prev + 1) % spinnerChars.length);
        }, 300);
        return ()=>clearInterval(spinnerInterval);
    }, [
        spinnerChars.length
    ]);
    // Simple console loader dots - appear one by one, stop at random numbers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dotsInterval = setInterval(()=>{
            setDotCounts((prev)=>{
                const newCounts = {
                    ...prev
                };
                // For each visible message with dots
                for(let i = 0; i <= currentMessageIndex; i++){
                    if (messages[i].includes("{{dots}}")) {
                        const currentCount = newCounts[i] || 0;
                        const maxDots = getMaxDots(i);
                        // Add one dot if not at max yet
                        if (currentCount < maxDots) {
                            newCounts[i] = currentCount + 1;
                        }
                    }
                }
                return newCounts;
            });
        }, 100); // Very fast animation
        return ()=>clearInterval(dotsInterval);
    }, [
        currentMessageIndex,
        messages
    ]);
    // Auto-scroll to bottom when new messages appear
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (textRef.current) {
            textRef.current.scrollTop = textRef.current.scrollHeight;
        }
    }, [
        currentMessageIndex
    ]);
    if (isComplete) {
        return null;
    }
    // Helper to render message with dots and spinner
    function renderMessage(message, index) {
        // Replace spinner
        const html = message.replace(/<span class="spinning-indicator"[^>]*><\/span>/g, spinnerChars[spinnerChar]);
        // Split on {{dots}} token
        const parts = html.split("{{dots}}");
        if (parts.length === 1) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                dangerouslySetInnerHTML: {
                    __html: html
                }
            }, void 0, false, {
                fileName: "[project]/src/components/RetroLoading.tsx",
                lineNumber: 120,
                columnNumber: 14
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    dangerouslySetInnerHTML: {
                        __html: parts[0]
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/RetroLoading.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "loading-dots-plain",
                    style: {
                        color: "var(--text-primary)",
                        textShadow: "none"
                    },
                    children: ".".repeat(dotCounts[index] || 0)
                }, void 0, false, {
                    fileName: "[project]/src/components/RetroLoading.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    dangerouslySetInnerHTML: {
                        __html: parts[1]
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/RetroLoading.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "retro-window",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "window-titlebar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium",
                        children: "robotOS.ini startup"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RetroLoading.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/RetroLoading.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/RetroLoading.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "window-content",
                style: {
                    height: "400px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "retro-loading-text",
                    ref: textRef,
                    children: messages.slice(0, currentMessageIndex + 1).map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "terminal-message",
                            children: renderMessage(message, index)
                        }, index, false, {
                            fileName: "[project]/src/components/RetroLoading.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/RetroLoading.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/RetroLoading.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RetroLoading.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/WindowContent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>WindowContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PixelIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PixelIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectWindow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RetroLoading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RetroLoading.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function WindowContent({ page }) {
    // State for work page
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Window management state for work page
    const [openWindows, setOpenWindows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [activeWindow, setActiveWindow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // State for other pages
    const [html, setHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [otherPageLoading, setOtherPageLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [otherPageError, setOtherPageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /**
   * Load Content Effect
   *
   * Handles different content loading based on the page type.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (page === "work") {
            loadWorkPage();
        } else {
            loadOtherPage();
        }
    }, [
        page
    ]);
    /**
   * Load Work Page Content
   *
   * Fetches projects and sets up the interactive work page.
   */ const loadWorkPage = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch("/api/content/projects");
            const result = await response.json();
            if (result.success) {
                setProjects(result.data);
            } else {
                setError(result.error || "Failed to fetch projects");
            }
        } catch (err) {
            setError("Failed to fetch projects");
            console.error("Error fetching projects:", err);
        } finally{
            setLoading(false);
        }
    };
    /**
   * Load Other Page Content
   *
   * Fetches markdown content for non-work pages.
   */ const loadOtherPage = async ()=>{
        try {
            setOtherPageLoading(true);
            setOtherPageError(null);
            const response = await fetch(`/api/content/${page}`);
            if (!response.ok) throw new Error("Not found");
            const data = await response.json();
            setHtml(data.html);
        } catch (err) {
            setOtherPageError("Failed to load content");
            console.error("Error loading content:", err);
        } finally{
            setOtherPageLoading(false);
        }
    };
    /**
   * Work Page Window Management
   */ const openProjectWindow = (project)=>{
        // Close any existing windows
        setOpenWindows({});
        // Open new window
        const windowId = project.slug;
        setOpenWindows({
            [windowId]: {
                project,
                position: {
                    x: 100,
                    y: 100
                },
                isActive: true
            }
        });
        setActiveWindow(windowId);
    };
    const closeProjectWindow = (windowId)=>{
        setOpenWindows((prev)=>{
            const newWindows = {
                ...prev
            };
            delete newWindows[windowId];
            return newWindows;
        });
        if (activeWindow === windowId) {
            setActiveWindow(null);
        }
    };
    const activateWindow = (windowId)=>{
        setActiveWindow(windowId);
        setOpenWindows((prev)=>{
            const newWindows = {
                ...prev
            };
            Object.keys(newWindows).forEach((id)=>{
                newWindows[id].isActive = id === windowId;
            });
            return newWindows;
        });
    };
    const moveWindow = (windowId, x, y)=>{
        setOpenWindows((prev)=>({
                ...prev,
                [windowId]: {
                    ...prev[windowId],
                    position: {
                        x,
                        y
                    }
                }
            }));
    };
    /**
   * Get Project Icon
   */ const getProjectIcon = ()=>{
        return "folder";
    };
    // Render work page
    if (page === "work") {
        // Loading state
        if (loading) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RetroLoading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    messages: [
                        "$ cd /portfolio",
                        "$ ls -la",
                        "[OK] Found 6 project files",
                        "$ cat projects.json",
                        "[OK] Loading project metadata...",
                        "$ npm install nostalgia",
                        "[OK] RobotOS compatibility installed",
                        "",
                        "    [ROBOT] Scanning project files...",
                        "    [ROBOT] Found 6 portfolio entries",
                        "    [ROBOT] Loading pixel art assets...",
                        "    [ROBOT] Ready to display projects! 🤖",
                        "",
                        "$ echo 'Projects loaded successfully'",
                        "Projects loaded successfully"
                    ],
                    duration: 3000
                }, void 0, false, {
                    fileName: "[project]/src/components/WindowContent.tsx",
                    lineNumber: 201,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/WindowContent.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, this);
        }
        // Error state
        if (error) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl mb-4",
                        children: "❌"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WindowContent.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold text-[#000080] mb-2",
                        children: "Error Loading Projects"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WindowContent.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[#000000] mb-4",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/WindowContent.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: loadWorkPage,
                        className: "px-4 py-2 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] text-[#000000] font-semibold hover:bg-[#d4d0c8] transition-colors",
                        children: "Try Again"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WindowContent.tsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WindowContent.tsx",
                lineNumber: 228,
                columnNumber: 9
            }, this);
        }
        // Extract categories
        const categories = Array.from(new Set(projects.map((project)=>project.category)));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-[#000080] mb-2",
                                    children: "📁 My Work"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WindowContent.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#000000] text-sm",
                                    children: "Click on any project icon to open it in a window. A collection of projects that showcase my skills in web development, design, and creative problem-solving."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WindowContent.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WindowContent.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8",
                            children: projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>openProjectWindow(project),
                                    className: "window-icon",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PixelIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                icon: getProjectIcon(),
                                                size: 48
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WindowContent.tsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WindowContent.tsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xs font-medium text-center leading-tight",
                                                    children: project.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WindowContent.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, this),
                                                project.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-[#ff0000]",
                                                    children: "★ Featured"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WindowContent.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WindowContent.tsx",
                                            lineNumber: 279,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, project.slug, true, {
                                    fileName: "[project]/src/components/WindowContent.tsx",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/WindowContent.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-[#000080] mb-4",
                                    children: "📊 Project Categories"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WindowContent.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                                    children: categories.map((category)=>{
                                        const categoryProjects = projects.filter((project)=>project.category === category);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#ffffff] border border-[#808080] p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-semibold text-[#000000] mb-1",
                                                    children: category
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WindowContent.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[#808080]",
                                                    children: [
                                                        categoryProjects.length,
                                                        " projects"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WindowContent.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, category, true, {
                                            fileName: "[project]/src/components/WindowContent.tsx",
                                            lineNumber: 302,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WindowContent.tsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WindowContent.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WindowContent.tsx",
                    lineNumber: 252,
                    columnNumber: 9
                }, this),
                Object.entries(openWindows).map(([windowId, windowData])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        project: windowData.project,
                        onClose: ()=>closeProjectWindow(windowId),
                        isActive: windowData.isActive,
                        onActivate: ()=>activateWindow(windowId),
                        position: windowData.position,
                        onMove: (x, y)=>moveWindow(windowId, x, y)
                    }, windowId, false, {
                        fileName: "[project]/src/components/WindowContent.tsx",
                        lineNumber: 321,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WindowContent.tsx",
            lineNumber: 250,
            columnNumber: 7
        }, this);
    }
    // Render other pages
    if (otherPageLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RetroLoading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                messages: [
                    "$ cd /content",
                    "$ find . -name '*.md'",
                    "[OK] Found markdown files",
                    "$ pandoc content.md -o content.html",
                    "[OK] Markdown converted to HTML",
                    "$ cp retro-styles.css /tmp/",
                    "[OK] RobotOS styling applied",
                    "",
                    "    [ROBOT] Content processed successfully",
                    "    [ROBOT] Styling applied with retro flair",
                    "    [ROBOT] Ready to display! 🤖",
                    "",
                    "$ echo 'Content ready for display!'",
                    "Content ready for display!"
                ],
                duration: 2500
            }, void 0, false, {
                fileName: "[project]/src/components/WindowContent.tsx",
                lineNumber: 339,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/WindowContent.tsx",
            lineNumber: 338,
            columnNumber: 7
        }, this);
    }
    if (otherPageError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center text-red-600",
            children: otherPageError
        }, void 0, false, {
            fileName: "[project]/src/components/WindowContent.tsx",
            lineNumber: 363,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "prose max-w-none p-6",
        style: {
            "--tw-prose-body": "#000000",
            "--tw-prose-headings": "#000080",
            "--tw-prose-links": "#000080"
        },
        dangerouslySetInnerHTML: {
            __html: html
        }
    }, void 0, false, {
        fileName: "[project]/src/components/WindowContent.tsx",
        lineNumber: 367,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/WindowLoader.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * WindowLoader Component
 *
 * A spinning dot loader that appears when windows are opening.
 * Uses a pixel-perfect spinning animation with RobotOS styling.
 * Fades out to reveal the window content when loading is complete.
 */ __turbopack_context__.s({
    "default": (()=>WindowLoader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function WindowLoader({ isLoading }) {
    if (!isLoading) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "window-loader-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "window-loader",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "window-loader-spinner"
            }, void 0, false, {
                fileName: "[project]/src/components/WindowLoader.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/WindowLoader.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/WindowLoader.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/RetroDesktop.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RetroDesktop)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PixelIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PixelIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
// Note: These imports are not used in the current implementation
// Content is loaded dynamically through WindowContent component
// import AboutPage from "@/app/about/page";
// import WorkPage from "@/app/work/page";
// import ContactPage from "@/app/contact/page";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WindowContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WindowContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WindowLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WindowLoader.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
/**
 * Window Content Mapping
 *
 * Maps route paths to their corresponding content components.
 * This allows the desktop to load different content based on the current route.
 */ const windowContentMap = {
    "/": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WindowContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        page: "home"
    }, void 0, false, {
        fileName: "[project]/src/components/RetroDesktop.tsx",
        lineNumber: 38,
        columnNumber: 8
    }, this),
    "/about": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WindowContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        page: "about"
    }, void 0, false, {
        fileName: "[project]/src/components/RetroDesktop.tsx",
        lineNumber: 39,
        columnNumber: 13
    }, this),
    "/work": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WindowContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        page: "work"
    }, void 0, false, {
        fileName: "[project]/src/components/RetroDesktop.tsx",
        lineNumber: 40,
        columnNumber: 12
    }, this),
    "/contact": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WindowContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        page: "contact"
    }, void 0, false, {
        fileName: "[project]/src/components/RetroDesktop.tsx",
        lineNumber: 41,
        columnNumber: 15
    }, this)
};
function RetroDesktop() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Window management state
    const [windows, setWindows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeWindow, setActiveWindow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Desktop interaction state
    const [selectedDesktopIcon, setSelectedDesktopIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [startMenuOpen, setStartMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Drag and resize state
    const [draggedWindow, setDraggedWindow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragOffset, setDragOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [resizingWindow, setResizingWindow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resizeStart, setResizeStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    // Window loading state
    const [windowLoading, setWindowLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Utility refs and state
    const initializedWindows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const [hasMounted, setHasMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [timeBasedGradient, setTimeBasedGradient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    /**
   * Get Time-Based Background Gradient
   *
   * Returns different gradient backgrounds based on the current time of day:
   * - Morning (6-11): Goldenrod to light blue
   * - Afternoon (12-17): Yellow to orange
   * - Evening (18-21): Blue to pink (current)
   * - Night (22-5): Dark blue gradient
   */ const getTimeBasedGradient = (hour)=>{
        if (hour >= 6 && hour < 12) {
            // Morning: Bright blue to pink with smooth blending
            return "linear-gradient(180deg, #7bc8f0 0%, #8fd4f5 20%, #a8d8ff 40%, #c4e0f5 60%, #e8d0e8 80%, #f8b4d9 90%, #ffb3d9 100%)";
        } else if (hour >= 12 && hour < 18) {
            // Afternoon: Yellow to orange to pink with smooth blending
            return "linear-gradient(180deg, #ffd700 0%, #ffc040 25%, #ffb84d 45%, #ffc085 65%, #f0c0d0 80%, #f8b4d9 90%, #ffb3d9 100%)";
        } else if (hour >= 18 && hour < 22) {
            // Evening: Purple to pink with smooth blending
            return "linear-gradient(180deg, #9370db 0%, #a585d9 25%, #b19cd9 45%, #c8a2c8 65%, #e0b8d0 80%, #f8b4d9 90%, #ffb3d9 100%)";
        } else {
            // Night: Dark indigo to pink with smooth blending
            return "linear-gradient(180deg, #4b0082 0%, #5a2a8a 25%, #6a4c93 45%, #8a7bb8 65%, #c0a0d0 80%, #f8b4d9 90%, #ffb3d9 100%)";
        }
    };
    /**
   * Get appropriate text color for desktop icons based on time of day
   * Ensures good contrast against the background gradient
   */ const getIconTextColor = (hour)=>{
        if (hour >= 6 && hour < 12) {
            // Morning: Dark text for light background
            return "#000000";
        } else if (hour >= 12 && hour < 18) {
            // Afternoon: Dark text for light background
            return "#000000";
        } else if (hour >= 18 && hour < 22) {
            // Evening: Dark text for light background
            return "#000000";
        } else {
            // Night: Light text for dark background
            return "#ffffff";
        }
    };
    /**
   * Navigation Configuration
   *
   * Defines the main navigation items that appear as desktop icons.
   * Each item has a name, href (route), and emoji icon.
   * Uses clean retro-style icons inspired by minimal web design.
   */ const navigation = [
        {
            name: "About",
            href: "/about",
            icon: "about"
        },
        {
            name: "Work",
            href: "/work",
            icon: "folder"
        },
        {
            name: "Contact",
            href: "/contact",
            icon: "contact"
        }
    ];
    /**
   * Calculate Responsive Window Size
   *
   * Determines window size based on screen size, scaling down proportionally
   * on smaller screens like a responsive OS would behave.
   */ const getResponsiveWindowSize = ()=>{
        const screenWidth = window.innerWidth;
        // Base sizes for large screens (reduced height for better fit)
        const baseWidth = 850;
        const baseHeight = 550; // Reduced from 650 to 550
        // Scale down on smaller screens (better fit for mobile/tablet)
        if (screenWidth < 1200) {
            const scale = Math.max(0.4, screenWidth / 1200);
            return {
                width: Math.floor(baseWidth * scale),
                height: Math.floor(baseHeight * scale)
            };
        }
        // Scale up on extra large screens
        if (screenWidth >= 1400) {
            const scale = Math.min(1.4, screenWidth / 1400);
            return {
                width: Math.floor(baseWidth * scale),
                height: Math.floor(baseHeight * scale)
            };
        }
        return {
            width: baseWidth,
            height: baseHeight
        };
    };
    /**
   * Calculate Cascading Position for New Windows
   *
   * Determines the position for new windows with a cascading effect.
   * Each new window is offset diagonally from the previous one,
   * similar to Windows 95/98 behavior. Ensures windows always fit on screen.
   * First window starts higher up for better visual balance.
   */ const getCascadingPosition = ()=>{
        const windowSize = getResponsiveWindowSize();
        const cascadeOffset = 35; // Larger offset for better spacing
        // Count how many windows are currently open
        const openWindowCount = windows.filter((w)=>!w.isMinimized).length;
        // Start higher up for the first window, then cascade
        const baseX = Math.max(0, (window.innerWidth - windowSize.width) / 2);
        const baseY = Math.max(0, (window.innerHeight - windowSize.height) / 2) - 50; // Start higher
        const x = baseX + openWindowCount * cascadeOffset;
        const y = baseY + openWindowCount * cascadeOffset;
        // Ensure window doesn't go off-screen with proper margins
        const maxX = Math.max(0, window.innerWidth - windowSize.width - 20);
        const maxY = Math.max(0, window.innerHeight - windowSize.height - 80); // Leave space for taskbar
        return {
            x: Math.min(Math.max(0, x), maxX),
            y: Math.min(Math.max(0, y), maxY)
        };
    };
    /**
   * Initialize Windows Based on Current Path
   *
   * Automatically opens a window for the current route when the component mounts
   * or when the pathname changes. This ensures users see content relevant to
   * their current location in the app.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Skip window management for work page - it has its own window system
        if (pathname === "/work") {
            return;
        }
        const currentPage = navigation.find((item)=>item.href === "/" ? pathname === "/" : pathname.startsWith(item.href));
        if (currentPage && !initializedWindows.current.has(currentPage.href)) {
            initializedWindows.current.add(currentPage.href);
            const cascadePos = getCascadingPosition();
            const windowSize = getResponsiveWindowSize();
            const newWindow = {
                id: currentPage.href,
                title: currentPage.name,
                isOpen: true,
                isMinimized: false,
                zIndex: windows.length + 1,
                position: cascadePos,
                size: windowSize
            };
            setWindows((prev)=>[
                    ...prev,
                    newWindow
                ]);
            setActiveWindow(newWindow.id);
        }
    }, [
        pathname,
        windows.length
    ]);
    /**
   * Update Clock Every Second
   *
   * Keeps the taskbar clock synchronized with the current time.
   * This adds to the authentic Windows 95/98 experience.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>{
            setCurrentTime(new Date());
        }, 1000);
        return ()=>clearInterval(timer);
    }, []);
    /**
   * Close Start Menu When Clicking Outside
   *
   * Provides intuitive behavior where clicking outside the start menu
   * closes it, similar to how Windows 95/98 worked.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = ()=>{
            setStartMenuOpen(false);
        };
        if (startMenuOpen) {
            document.addEventListener("click", handleClickOutside);
            return ()=>document.removeEventListener("click", handleClickOutside);
        }
    }, [
        startMenuOpen
    ]);
    /**
   * Handle Mouse Move for Dragging and Resizing
   *
   * Manages the real-time updates when users are dragging windows
   * or resizing them. This creates smooth, responsive interactions.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouseMove = (e)=>{
            if (draggedWindow) {
                // Update window position during drag with bounds checking
                const newX = e.clientX - dragOffset.x;
                const newY = e.clientY - dragOffset.y;
                // Get the window being dragged
                const draggedWin = windows.find((w)=>w.id === draggedWindow);
                if (draggedWin) {
                    const maxX = Math.max(0, window.innerWidth - draggedWin.size.width - 20);
                    const maxY = Math.max(0, window.innerHeight - draggedWin.size.height - 80);
                    const constrainedX = Math.min(Math.max(0, newX), maxX);
                    const constrainedY = Math.min(Math.max(0, newY), maxY);
                    setWindows((prev)=>prev.map((w)=>w.id === draggedWindow ? {
                                ...w,
                                position: {
                                    x: constrainedX,
                                    y: constrainedY
                                }
                            } : w));
                }
            } else if (resizingWindow) {
                // Update window size during resize with bounds checking
                const deltaX = e.clientX - resizeStart.x;
                const deltaY = e.clientY - resizeStart.y;
                const responsiveSize = getResponsiveWindowSize();
                const minWidth = Math.max(350, responsiveSize.width * 0.5);
                const minHeight = Math.max(250, responsiveSize.height * 0.5);
                const newWidth = Math.max(minWidth, resizeStart.width + deltaX);
                const newHeight = Math.max(minHeight, resizeStart.height + deltaY);
                // Constrain maximum size to viewport
                const maxWidth = window.innerWidth - 40;
                const maxHeight = window.innerHeight - 120;
                const constrainedWidth = Math.min(newWidth, maxWidth);
                const constrainedHeight = Math.min(newHeight, maxHeight);
                setWindows((prev)=>prev.map((w)=>w.id === resizingWindow ? {
                            ...w,
                            size: {
                                width: constrainedWidth,
                                height: constrainedHeight
                            }
                        } : w));
            }
        };
        const handleMouseUp = ()=>{
            // End drag and resize operations
            setDraggedWindow(null);
            setResizingWindow(null);
        };
        if (draggedWindow || resizingWindow) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
            return ()=>{
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            };
        }
    }, [
        draggedWindow,
        dragOffset,
        resizingWindow,
        resizeStart
    ]);
    /**
   * Open Window Function
   *
   * Opens a new window or brings an existing window to the front.
   * If the window already exists, it's restored and brought to the front.
   * If it doesn't exist, a new window is created at the center of the screen.
   */ const openWindow = (href, title)=>{
        const existingWindow = windows.find((w)=>w.id === href);
        if (existingWindow) {
            // Bring existing window to front
            setActiveWindow(href);
            setWindows((prev)=>prev.map((w)=>w.id === href ? {
                        ...w,
                        isMinimized: false,
                        zIndex: Math.max(...prev.map((w)=>w.zIndex)) + 1
                    } : w));
        } else {
            // Set loading state for new window
            setWindowLoading((prev)=>({
                    ...prev,
                    [href]: true
                }));
            // Create new window
            const cascadePos = getCascadingPosition();
            const windowSize = getResponsiveWindowSize();
            const newWindow = {
                id: href,
                title,
                isOpen: true,
                isMinimized: false,
                zIndex: Math.max(...windows.map((w)=>w.zIndex), 0) + 1,
                position: cascadePos,
                size: windowSize
            };
            setWindows((prev)=>[
                    ...prev,
                    newWindow
                ]);
            setActiveWindow(newWindow.id);
            // Simulate loading time and then hide loader
            setTimeout(()=>{
                setWindowLoading((prev)=>({
                        ...prev,
                        [href]: false
                    }));
            }, 1500);
        }
    };
    /**
   * Close Window Function
   *
   * Removes a window from the desktop and clears it as the active window
   * if it was currently active.
   */ const closeWindow = (id)=>{
        setWindows((prev)=>prev.filter((w)=>w.id !== id));
        if (activeWindow === id) {
            setActiveWindow(null);
        }
    };
    /**
   * Minimize Window Function
   *
   * Hides a window from view while keeping it in memory.
   * The window can be restored by clicking its taskbar icon.
   */ const minimizeWindow = (id)=>{
        setWindows((prev)=>prev.map((w)=>w.id === id ? {
                    ...w,
                    isMinimized: true
                } : w));
        if (activeWindow === id) {
            setActiveWindow(null);
        }
    };
    const unminimizeWindow = (id)=>{
        setWindows((prev)=>prev.map((w)=>w.id === id ? {
                    ...w,
                    isMinimized: false
                } : w));
        setActiveWindow(id);
    };
    /**
   * Bring Window to Front Function
   *
   * Makes a window the active window and gives it the highest z-index
   * so it appears on top of other windows.
   */ const bringToFront = (id)=>{
        setActiveWindow(id);
        setWindows((prev)=>prev.map((w)=>({
                    ...w,
                    zIndex: w.id === id ? Math.max(...prev.map((w)=>w.zIndex)) + 1 : w.zIndex
                })));
    };
    /**
   * Start Drag Function
   *
   * Initiates window dragging when the user clicks and drags the titlebar.
   * Records the initial mouse position and window position for smooth dragging.
   */ const startDrag = (e, windowId)=>{
        e.preventDefault();
        const window1 = windows.find((w)=>w.id === windowId);
        if (window1) {
            setDraggedWindow(windowId);
            setDragOffset({
                x: e.clientX - window1.position.x,
                y: e.clientY - window1.position.y
            });
            bringToFront(windowId);
        }
    };
    /**
   * Start Resize Function
   *
   * Initiates window resizing when the user clicks and drags the resize handle.
   * Records the initial mouse position and window size for smooth resizing.
   */ const startResize = (e, windowId)=>{
        e.preventDefault();
        e.stopPropagation();
        const window1 = windows.find((w)=>w.id === windowId);
        if (window1) {
            setResizingWindow(windowId);
            setResizeStart({
                x: e.clientX,
                y: e.clientY,
                width: window1.size.width,
                height: window1.size.height
            });
            bringToFront(windowId);
        }
    };
    /**
   * Toggle Start Menu Function
   *
   * Opens or closes the start menu when the start button is clicked.
   * Prevents event bubbling to avoid immediate closure.
   */ const toggleStartMenu = (e)=>{
        e.stopPropagation();
        setStartMenuOpen(!startMenuOpen);
    };
    /**
   * Set Mounted State
   *
   * Ensures the component is fully mounted before rendering
   * time-sensitive elements like the clock.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setHasMounted(true);
    }, []);
    /**
   * Handle Window Resize
   *
   * Ensures all windows stay within viewport bounds when the screen is resized.
   * This prevents windows from being positioned outside the visible area.
   * Also dynamically resizes windows when scaling back up for responsive behavior.
   * Restores proper cascading positions for all windows.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleWindowResize = ()=>{
            setWindows((prev)=>{
                // Recalculate cascading positions for all windows
                const updatedWindows = prev.map((win, index)=>{
                    const newSize = getResponsiveWindowSize();
                    const cascadeOffset = 35;
                    // Calculate new cascading position based on window order
                    const baseX = Math.max(0, (window.innerWidth - newSize.width) / 2);
                    const baseY = Math.max(0, (window.innerHeight - newSize.height) / 2) - 50; // Start higher
                    const newX = baseX + index * cascadeOffset;
                    const newY = baseY + index * cascadeOffset;
                    // Ensure window doesn't go off-screen
                    const maxX = Math.max(0, window.innerWidth - newSize.width - 20);
                    const maxY = Math.max(0, window.innerHeight - newSize.height - 80);
                    const constrainedX = Math.min(Math.max(0, newX), maxX);
                    const constrainedY = Math.min(Math.max(0, newY), maxY);
                    return {
                        ...win,
                        position: {
                            x: constrainedX,
                            y: constrainedY
                        },
                        size: newSize
                    };
                });
                return updatedWindows;
            });
        };
        window.addEventListener("resize", handleWindowResize);
        return ()=>window.removeEventListener("resize", handleWindowResize);
    }, []);
    // Update time-based gradient when time changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const hour = currentTime.getHours();
        setTimeBasedGradient(getTimeBasedGradient(hour));
    }, [
        currentTime
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "desktop-bg min-h-screen relative overflow-hidden",
        style: {
            background: timeBasedGradient,
            transition: "background 0.5s ease-in-out"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "desktop-cloud-scene",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "desktop-cloud-layer",
                        "data-depth": "0.2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "desktop-cloud"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RetroDesktop.tsx",
                            lineNumber: 612,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RetroDesktop.tsx",
                        lineNumber: 611,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "desktop-cloud-layer",
                        "data-depth": "0.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "desktop-cloud-two"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RetroDesktop.tsx",
                            lineNumber: 615,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RetroDesktop.tsx",
                        lineNumber: 614,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "desktop-cloud-layer",
                        "data-depth": "0.4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "desktop-cloud-three"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RetroDesktop.tsx",
                            lineNumber: 618,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RetroDesktop.tsx",
                        lineNumber: 617,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "desktop-cloud-layer",
                        "data-depth": "0.2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "desktop-cloud-four"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RetroDesktop.tsx",
                            lineNumber: 621,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RetroDesktop.tsx",
                        lineNumber: 620,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RetroDesktop.tsx",
                lineNumber: 610,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-8 left-8",
                children: navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `desktop-icon ${selectedDesktopIcon === item.href ? "selected" : ""}`,
                        onClick: ()=>{
                            setSelectedDesktopIcon(item.href);
                            openWindow(item.href, item.name);
                        },
                        onDoubleClick: ()=>{
                            setSelectedDesktopIcon(null);
                            openWindow(item.href, item.name);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-1",
                                children: item.name === "About" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/rw-logo.png",
                                    alt: item.name,
                                    width: 46,
                                    height: 46
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RetroDesktop.tsx",
                                    lineNumber: 648,
                                    columnNumber: 17
                                }, this) : item.name === "Contact" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/rw-site-icon-folder-closed-contact.png",
                                    alt: item.name,
                                    width: 46,
                                    height: 46
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RetroDesktop.tsx",
                                    lineNumber: 655,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PixelIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    icon: item.icon,
                                    size: 46
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RetroDesktop.tsx",
                                    lineNumber: 662,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/RetroDesktop.tsx",
                                lineNumber: 646,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs",
                                style: {
                                    color: getIconTextColor(currentTime.getHours())
                                },
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/RetroDesktop.tsx",
                                lineNumber: 665,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.name, true, {
                        fileName: "[project]/src/components/RetroDesktop.tsx",
                        lineNumber: 633,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/RetroDesktop.tsx",
                lineNumber: 631,
                columnNumber: 7
            }, this),
            windows.map((window1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `retro-window absolute ${window1.isMinimized ? "hidden" : ""} ${activeWindow === window1.id ? "active" : ""}`,
                    style: {
                        left: window1.position.x,
                        top: window1.position.y,
                        width: window1.size.width,
                        height: window1.size.height,
                        zIndex: window1.zIndex
                    },
                    onClick: ()=>bringToFront(window1.id),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "window-titlebar cursor-move",
                            onMouseDown: (e)=>startDrag(e, window1.id),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: window1.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RetroDesktop.tsx",
                                        lineNumber: 700,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RetroDesktop.tsx",
                                    lineNumber: 699,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-7 h-7 bg-yellow-600 border-2 border-yellow-800 flex items-center justify-center text-black text-lg font-bold hover:bg-yellow-500 transition-colors cursor-pointer",
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                minimizeWindow(window1.id);
                                            },
                                            style: {
                                                boxShadow: "inset 1px 1px 0 #ffff80, inset -1px -1px 0 #808000",
                                                borderRadius: "4px"
                                            },
                                            children: "−"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RetroDesktop.tsx",
                                            lineNumber: 704,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-7 h-7 bg-red-600 border-2 border-red-800 flex items-center justify-center text-white text-lg font-bold hover:bg-red-500 transition-colors cursor-pointer",
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                closeWindow(window1.id);
                                            },
                                            style: {
                                                boxShadow: "inset 1px 1px 0 #ff8080, inset -1px -1px 0 #800000",
                                                borderRadius: "4px"
                                            },
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RetroDesktop.tsx",
                                            lineNumber: 719,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RetroDesktop.tsx",
                                    lineNumber: 702,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RetroDesktop.tsx",
                            lineNumber: 695,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "window-content h-full overflow-auto relative",
                            children: [
                                windowContentMap[window1.id],
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WindowLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    isLoading: windowLoading[window1.id] || false
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RetroDesktop.tsx",
                                    lineNumber: 741,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cursor-se-resize",
                                    onMouseDown: (e)=>startResize(e, window1.id),
                                    style: {
                                        position: "absolute",
                                        bottom: 0,
                                        right: 0,
                                        width: "16px",
                                        height: "16px",
                                        background: "#2a2a2a",
                                        cursor: "se-resize",
                                        borderTop: "1px solid #606060",
                                        borderLeft: "1px solid #606060",
                                        boxShadow: "inset 1px 1px 0 #0a0a0a",
                                        zIndex: 10
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RetroDesktop.tsx",
                                    lineNumber: 744,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RetroDesktop.tsx",
                            lineNumber: 737,
                            columnNumber: 11
                        }, this)
                    ]
                }, window1.id, true, {
                    fileName: "[project]/src/components/RetroDesktop.tsx",
                    lineNumber: 681,
                    columnNumber: 9
                }, this)),
            startMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "start-menu",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "start-menu-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "start-menu-header-xp",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "start-menu-header-xp-logo",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/rw-logo.png",
                                        alt: "robotOS",
                                        width: 36,
                                        height: 36
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RetroDesktop.tsx",
                                        lineNumber: 775,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RetroDesktop.tsx",
                                    lineNumber: 774,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-3 text-base font-bold",
                                    children: "robotOS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RetroDesktop.tsx",
                                    lineNumber: 782,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RetroDesktop.tsx",
                            lineNumber: 773,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "start-menu-items",
                            children: navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "start-menu-item flex items-center space-x-2",
                                    onClick: ()=>{
                                        openWindow(item.href, item.name);
                                        setStartMenuOpen(false);
                                    },
                                    children: [
                                        item.name === "About" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/rw-logo.png",
                                            alt: item.name,
                                            width: 18,
                                            height: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RetroDesktop.tsx",
                                            lineNumber: 795,
                                            columnNumber: 21
                                        }, this) : item.name === "Contact" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/rw-site-icon-folder-closed-contact.png",
                                            alt: item.name,
                                            width: 18,
                                            height: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RetroDesktop.tsx",
                                            lineNumber: 802,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PixelIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            icon: item.icon,
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RetroDesktop.tsx",
                                            lineNumber: 809,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RetroDesktop.tsx",
                                            lineNumber: 811,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/src/components/RetroDesktop.tsx",
                                    lineNumber: 786,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/RetroDesktop.tsx",
                            lineNumber: 784,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RetroDesktop.tsx",
                    lineNumber: 772,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/RetroDesktop.tsx",
                lineNumber: 771,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "taskbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 ml-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `start-button flex items-center px-2 py-1 ${startMenuOpen ? "bg-cyan-600" : ""}`,
                                style: {
                                    gap: "4px"
                                },
                                onClick: toggleStartMenu,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/rw-site-icon-start.png",
                                        alt: "Start",
                                        width: 27,
                                        height: 27
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RetroDesktop.tsx",
                                        lineNumber: 833,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold",
                                        children: "Start"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RetroDesktop.tsx",
                                        lineNumber: 839,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RetroDesktop.tsx",
                                lineNumber: 827,
                                columnNumber: 11
                            }, this),
                            navigation.map((item)=>{
                                const window1 = windows.find((w)=>w.id === item.href);
                                // Only show taskbar button if window exists and is minimized
                                if (!window1 || !window1.isMinimized) {
                                    return null;
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "taskbar-icon",
                                    onClick: ()=>{
                                        // Unminimize the window when taskbar button is clicked
                                        unminimizeWindow(item.href);
                                    },
                                    children: item.name === "About" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/rw-logo.png",
                                        alt: item.name,
                                        width: 32,
                                        height: 32
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RetroDesktop.tsx",
                                        lineNumber: 859,
                                        columnNumber: 19
                                    }, this) : item.name === "Contact" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/rw-site-icon-folder-closed-contact.png",
                                        alt: item.name,
                                        width: 32,
                                        height: 32
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RetroDesktop.tsx",
                                        lineNumber: 866,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PixelIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        icon: item.icon,
                                        size: 32
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RetroDesktop.tsx",
                                        lineNumber: 873,
                                        columnNumber: 19
                                    }, this)
                                }, item.name, false, {
                                    fileName: "[project]/src/components/RetroDesktop.tsx",
                                    lineNumber: 850,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RetroDesktop.tsx",
                        lineNumber: 825,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex items-center",
                        children: hasMounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-bold py-1 flex items-center h-15 -mr-6",
                            style: {
                                boxShadow: "inset 1px 1px 0 #404040",
                                borderRadius: "20px",
                                transform: "scale(0.6)",
                                transformOrigin: "center",
                                background: "#7a9aca",
                                border: "2px solid #4a6a9a",
                                paddingLeft: "22px",
                                paddingRight: "16px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "clock-icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hourglass"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RetroDesktop.tsx",
                                        lineNumber: 897,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RetroDesktop.tsx",
                                    lineNumber: 896,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "clock-time",
                                    children: currentTime.toLocaleTimeString()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RetroDesktop.tsx",
                                    lineNumber: 899,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RetroDesktop.tsx",
                            lineNumber: 883,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RetroDesktop.tsx",
                        lineNumber: 881,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RetroDesktop.tsx",
                lineNumber: 824,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                onClick: ()=>setSelectedDesktopIcon(null),
                style: {
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/RetroDesktop.tsx",
                lineNumber: 913,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RetroDesktop.tsx",
        lineNumber: 598,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/PageLoadWrapper.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * PageLoadWrapper Component
 *
 * Wraps the entire application and shows a retro terminal loading
 * animation on initial page load before revealing the main content.
 * Creates an authentic Windows 98 boot experience.
 */ __turbopack_context__.s({
    "default": (()=>PageLoadWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RetroLoading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RetroLoading.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function PageLoadWrapper({ children }) {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Simulate a longer loading time for authentic feel
        const timer = setTimeout(()=>{
            setIsLoading(false);
        }, 8000); // 8 seconds total loading time
        return ()=>clearTimeout(timer);
    }, []);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "page-load-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cloud-scene",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cloud-layer",
                            "data-depth": "0.2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cloud"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageLoadWrapper.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageLoadWrapper.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cloud-layer",
                            "data-depth": "0.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cloud-two"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageLoadWrapper.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageLoadWrapper.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cloud-layer",
                            "data-depth": "0.4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cloud-three"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageLoadWrapper.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageLoadWrapper.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cloud-layer",
                            "data-depth": "0.2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cloud-four"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PageLoadWrapper.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PageLoadWrapper.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PageLoadWrapper.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl px-8 relative z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RetroLoading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        messages: [
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">sudo init robotOS</span>',
                            '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Kernel</span> loaded successfully',
                            '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Memory allocation</span>: <span class="terminal-memory">640K</span>',
                            '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Loading</span> system modules {{dots}}',
                            '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Pixel drivers</span> initialized',
                            '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Bypassing</span> modern standards {{dots}}',
                            '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Nostalgia modules</span> installed',
                            "",
                            "            __              __    _____   ____       ",
                            "           /\\ \\            /\\ \\__/\\  __`\\/\\  _`\\     ",
                            " _ __   ___\\ \\ \\____    ___\\ \\ ,_\\ \\ \\/\\ \\ \\,\\L\\_\\   ",
                            "/\\`'__\\/ __`\\ \\ '__`\\  / __`\\ \\ \\/\\ \\ \\ \\ \\/_\\__ \\   ",
                            "\\ \\ \\//\\ \\L\\ \\ \\ \\L\\ \\/\\ \\L\\ \\ \\ \\_\\ \\ \\_\\ \\/\\ \\L\\ \\ ",
                            " \\ \\_\\\\ \\____/\\ \\_,__/\\ \\____/\\ \\__\\\\ \\_____\\ `\\____\\",
                            "  \\/_/ \\/___/  \\/___/  \\/___/  \\/__/ \\/_____/\\/_____/",
                            "                                                     ",
                            "                                                     ",
                            "                                                     ",
                            "",
                            "    ┌─┐",
                            "    │R│  robotOS Terminal",
                            "    └─┘  Ready for commands {{dots}}",
                            "",
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">echo</span> <span class="terminal-string">\'Loading retro vibes\'</span>',
                            '<span class="terminal-string">Loading retro vibes</span> {{dots}}',
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">cat</span> <span class="terminal-path">/dev/nostalgia</span>',
                            '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Found</span> <span class="terminal-number">98%</span> pure nostalgia',
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">sudo apt-get install</span> <span class="terminal-string">pixelart</span>',
                            '<span class="terminal-process">Installing</span> <span class="terminal-string">pixelart</span> <span class="spinning-indicator" data-char="/"></span>',
                            '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Pixel art drivers</span> installed',
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">systemctl start</span> <span class="terminal-service">robotos.service</span>',
                            '<span class="terminal-process">Starting</span> <span class="terminal-service">robotos.service</span> {{dots}}',
                            '<span class="terminal-bracket">[</span><span class="terminal-status">ACTIVE</span><span class="terminal-bracket">]</span> robotOS service started',
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">whoami</span>',
                            '<span class="terminal-prompt"><span class="terminal-user">robot</span>@<span class="terminal-host">robotos</span>:~$</span> {{dots}}',
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">ls</span> <span class="terminal-path">/home/robot/</span>',
                            '<span class="terminal-process">Scanning directory</span> <span class="spinning-indicator" data-char="|"></span>',
                            '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Found</span>: <span class="terminal-string">memories</span>, <span class="terminal-string">dreams</span>, and <span class="terminal-string">pixelart</span>',
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">echo</span> <span class="terminal-string">\'Welcome to the matrix\'</span>',
                            '<span class="terminal-string">Welcome to the matrix {{dots}}',
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">sudo chmod +x</span> <span class="terminal-path">/usr/bin/retro</span>',
                            '<span class="terminal-process">Setting</span> <span class="terminal-permission">permissions</span> <span class="spinning-indicator" data-char="-"></span>',
                            '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> <span class="terminal-process">Retro permissions</span> granted',
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">ping</span> <span class="terminal-ip">127.0.0.1</span> <span class="terminal-flag">-c</span> <span class="terminal-number">1</span>',
                            '<span class="terminal-info">PING</span> <span class="terminal-ip">127.0.0.1</span> (<span class="terminal-ip">127.0.0.1</span>) <span class="terminal-number">56(84)</span> bytes of data.',
                            '<span class="terminal-number">64</span> bytes from <span class="terminal-ip">127.0.0.1</span>: icmp_seq=<span class="terminal-number">1</span> time=<span class="terminal-number">0.001</span> ms',
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">echo</span> <span class="terminal-string">\'System is alive!\'</span>',
                            '<span class="terminal-string">System is alive!</span> {{dots}}',
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">brew install</span> <span class="terminal-string">robotos</span>',
                            '<span class="terminal-process">Installing</span> robotOS... <span class="progress-bar"></span>',
                            '<span class="terminal-bracket">[</span><span class="terminal-success">OK</span><span class="terminal-bracket">]</span> robotOS installed successfully',
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">zsh --version</span>',
                            '<span class="terminal-process">Checking zsh version</span> <span class="spinning-indicator" data-char="\\"></span>',
                            '<span class="terminal-string">zsh</span> <span class="terminal-version">5.8</span> (<span class="terminal-architecture">x86_64-apple-darwin20.0</span>)',
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">echo</span> <span class="terminal-string">\'🤖 Initializing robot consciousness\'</span>',
                            "🤖 Initializing robot consciousness {{dots}}",
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">systemctl status</span> <span class="terminal-service">robotos</span>',
                            '<span class="terminal-process">Checking service status</span> <span class="spinning-indicator" data-char="|"></span>',
                            '<span class="terminal-bracket">[</span><span class="terminal-status">ACTIVE</span><span class="terminal-bracket">]</span> robotOS is running <span class="spinning-indicator" data-char="|"></span>',
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">systemctl status</span> <span class="terminal-service">robotOS</span>',
                            '<span class="terminal-bracket">[</span><span class="terminal-status">ACTIVE</span><span class="terminal-bracket">]</span> robotOS is running',
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">echo</span> <span class="terminal-string">\'<span class="retro-robot">🤖</span> System initialized successfully! <span class="retro-robot">🤖</span>\'</span>',
                            "🤖 System initialized successfully! 🤖",
                            '<span class="terminal-prompt">$</span> <span class="terminal-command">whoami</span>',
                            '<span class="terminal-prompt"><span class="terminal-user">robot</span>@<span class="terminal-host">robotos</span>:~$</span> {{dots}}'
                        ],
                        duration: 8000
                    }, void 0, false, {
                        fileName: "[project]/src/components/PageLoadWrapper.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PageLoadWrapper.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PageLoadWrapper.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-fade-in",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/PageLoadWrapper.tsx",
        lineNumber: 123,
        columnNumber: 10
    }, this);
}
}}),
"[project]/src/components/ProjectWindowContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProjectWindowContextProvider": (()=>ProjectWindowContextProvider),
    "ProjectWindowProvider": (()=>ProjectWindowProvider),
    "useProjectWindows": (()=>useProjectWindows)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectWindow.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const ProjectWindowContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ProjectWindowProvider() {
    const [openWindows, setOpenWindows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const closeProjectWindow = (windowId)=>{
        setOpenWindows((prev)=>{
            const newWindows = {
                ...prev
            };
            delete newWindows[windowId];
            return newWindows;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: Object.entries(openWindows).map(([windowId, windowData])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                project: windowData.project,
                onClose: ()=>closeProjectWindow(windowId)
            }, windowId, false, {
                fileName: "[project]/src/components/ProjectWindowContext.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
function ProjectWindowContextProvider({ children }) {
    const [openWindows, setOpenWindows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const openProjectWindow = (project)=>{
        const windowId = `project-${project.slug}`;
        setOpenWindows((prev)=>({
                ...prev,
                [windowId]: {
                    project,
                    isActive: true
                }
            }));
    };
    const closeProjectWindow = (windowId)=>{
        setOpenWindows((prev)=>{
            const newWindows = {
                ...prev
            };
            delete newWindows[windowId];
            return newWindows;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectWindowContext.Provider, {
        value: {
            openProjectWindow,
            closeProjectWindow,
            openWindows
        },
        children: [
            children,
            Object.entries(openWindows).map(([windowId, windowData])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectWindow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    project: windowData.project,
                    onClose: ()=>closeProjectWindow(windowId)
                }, windowId, false, {
                    fileName: "[project]/src/components/ProjectWindowContext.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectWindowContext.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function useProjectWindows() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ProjectWindowContext);
    if (context === undefined) {
        throw new Error("useProjectWindows must be used within a ProjectWindowProvider");
    }
    return context;
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__34b51263._.js.map