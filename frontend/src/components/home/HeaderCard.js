import React, { useState } from 'react'

function HeaderCard({ card, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-white rounded-2xl p-2 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform ${
        isHovered ? 'scale-105 -translate-y-2' : ''
      }`}
      onClick={() => onClick && onClick(card)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 rounded-2xl opacity-5"
        style={{ backgroundColor: card.color }}
      />
      
      {/* Icon Container */}
      <div className="flex items-center justify-center mb-4">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-300"
          style={{
            backgroundColor: card.bgColor,
            transform: isHovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0deg) scale(1)'
          }}
        >
          <span
            className="text-2xl transition-all duration-300"
            style={{ filter: isHovered ? 'brightness(1.2)' : 'brightness(1)' }}
          >
            {card.icon}
          </span>
        </div>
      </div>
      
      {/* Card Title */}
      <h3
        className="text-lg font-bold text-center mb-2 transition-colors duration-300"
        style={{ color: isHovered ? card.color : '#0a2f6f' }}
      >
        {card.title}
      </h3>
      
      {/* Card Description */}
      <p className="text-sm text-gray-600 text-center leading-relaxed">
        {card.description}
      </p>
      
      {/* Hover Indicator */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundColor: card.color }}
      />
    </div>
  )
}

export default HeaderCard