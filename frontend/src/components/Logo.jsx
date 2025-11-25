import React from 'react'

export default function Logo({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 500 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Miracle logo">
      <defs>
        <linearGradient id="miracle-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E9D7BD" />
          <stop offset="100%" stopColor="#B98B43" />
        </linearGradient>
      </defs>
      <text x="50%" y="60%" textAnchor="middle" fontFamily="'Playfair Display', serif" fontWeight="600" fontSize="56" fill="url(#miracle-grad)">
        MIRACLE
      </text>
    </svg>
  )
}
