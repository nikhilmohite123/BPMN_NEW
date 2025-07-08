import { useState } from "react";

const ModuleCard = ({ module, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = module.icon;
 
  return (
    <div
      className={`relative bg-white rounded-2xl p-2 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform ${
        isHovered ? 'scale-105 -translate-y-2' : ''
      }`}
      onClick={() => onClick(module)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 rounded-2xl opacity-5"
        style={{ backgroundColor: module.color }}
      />
     
      {/* Icon Container */}
      <div className="flex items-center justify-center mb-4">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-300"
          style={{
            backgroundColor: module.bgColor,
            transform: isHovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0deg) scale(1)'
          }}
        >
          <IconComponent
            size={28}
            style={{ color: module.color }}
            className="transition-all duration-300"
          />
        </div>
      </div>
 
      {/* Module Name */}
      <h3
        className="text-md font-bold text-center mb-2 transition-colors duration-300"
        style={{ color: isHovered ? module.color : '#0a2f6f' }}
      >
        {module.name}
      </h3>
 
      {/* Module Description */}
      <p className="text-sm text-gray-600 text-center leading-relaxed">
        {module.description}
      </p>
 
      {/* Hover Indicator */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundColor: module.color }}
      />
    </div>
  );
};
 
export default ModuleCard