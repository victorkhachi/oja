import React from 'react'

export default function LocationSvg() {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                <g filter="url(#filter0_d)">
                    <circle cx="44" cy="40" r="37.5" fill="#FFFEF2" stroke="#A5060A" stroke-width="5" />
                    <path d="M40.6 54.7959C41.3271 56.9814 42.7063 57.0584 43.6792 54.9751L54.7396 31.2772C55.7125 29.1897 54.8104 28.2897 52.725 29.2626L29.025 40.3209C26.9396 41.2939 27.0188 42.673 29.2021 43.4022L37.75 46.2501L40.6 54.7959Z" fill="#A5060A" />
                </g>
                <defs>
                    <filter id="filter0_d" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}
