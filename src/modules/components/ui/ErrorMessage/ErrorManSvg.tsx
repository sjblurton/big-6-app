import React from "react"

import { wrapper } from "./ErrorManSvg.module.scss"

function ErrorMan() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 279 440"
            className={wrapper}
        >
            <g clipPath="url(#clip0_5_17)">
                <circle cx="221.5" cy="44.5" r="39.5" fill="#070606"></circle>
                <path
                    fill="#0C0A0A"
                    d="M137.642 78.051c11.284-11.684 29.043-14.259 43.181-6.258 17.576 9.945 23.383 32.494 12.797 49.692l-56.511 91.81a32.883 32.883 0 01-28.004 15.647c-22.149 0-37.964-21.452-31.413-42.609l12.728-41.115a64.64 64.64 0 015.557-12.832l10.961-19.274a72.467 72.467 0 0110.872-14.525l19.832-20.536zM55 297l16.5 38.5L21 311l34-14zM37.5 354.5L21 316l50.5 24.5-34 14zM77.5 337.5L61 299l50.5 24.5-34 14zM95 280l16.5 38.5L61 294l34-14zM1 344c-5.5-17.5 13-30 13-30l18 43.5s-25.5 4-31-13.5zM97.5 336l52-21.5-15 110.5s-5.5 16-26 14.5-20.5-19-20.5-19l9.5-84.5z"
                ></path>
                <path
                    fill="#0C0A0A"
                    d="M78 204l42.5 118s32-9 36-25-25.5-89-25.5-89l-53-4z"
                ></path>
                <path
                    fill="#000"
                    d="M160.5 109.017c4.5-1 32-9 32-9s4.5-.5 6.5 4-2.5 7.5-2.5 7.5-22.5 9-33.5 10.5-36 4.5-36 4.5-5-1.5-5-6.5 5-6.5 5-6.5 29-3.5 33.5-4.5z"
                ></path>
                <path
                    fill="#070606"
                    d="M164.5 262L137 125l6.5-2.5 31 138L196 281l11.5-27.5-26-138 7-2 28.5 140-12 31L227.5 393l-15.5 2-23.5-108.5-24-24.5z"
                ></path>
                <rect
                    width="15.881"
                    height="17.923"
                    x="213"
                    y="400.683"
                    fill="#070606"
                    rx="1"
                    transform="rotate(-9.726 213 400.683)"
                ></rect>
                <rect
                    width="29.791"
                    height="156.087"
                    x="143.002"
                    y="93.169"
                    fill="#070606"
                    rx="14.895"
                    transform="rotate(-11.136 143.002 93.169)"
                ></rect>
            </g>
            <defs>
                <clipPath id="clip0_5_17">
                    <path fill="#fff" d="M0 0H279V440H0z"></path>
                </clipPath>
            </defs>
        </svg>
    )
}

export default ErrorMan
