interface InitialsAvatarProps {
  initials: string;
  backgroundColor?: string;
  textColor?: string;
  size?: number;
}

export function InitialsAvatar({ 
  initials, 
  backgroundColor = "#70E000", 
  textColor = "#000000",
  size = 200 
}: InitialsAvatarProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background Circle */}
      <circle cx="100" cy="100" r="100" fill={backgroundColor} />
      
      {/* Initials Text */}
      <text
        x="100"
        y="100"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="72"
        fontWeight="400"
        fill={textColor}
        fontFamily="'Maxima Nouva', sans-serif"
      >
        {initials}
      </text>
    </svg>
  );
}