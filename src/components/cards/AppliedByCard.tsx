import React from 'react';
import GradientButton from '../buttons/GradientButton';

export interface AppliedByCardProps {
  name: string;
  username: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
  showButton?: boolean;
}

const AppliedByCard: React.FC<AppliedByCardProps> = ({
  name,
  username,
  description,
  buttonText = 'Launch Product',
  onButtonClick,
  className = '',
  showButton = true,
}) => {
  return (
    <div className={`sticky top-4 rounded-2xl border border-gray-200 bg-white p-4 ${className}`}>
      <div className="text-sm font-semibold text-gray-900">Applied By</div>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200" />
        <div>
          <div className="text-sm font-medium text-gray-900">{name}</div>
          <div className="text-xs text-gray-500">@{username}</div>
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-600 leading-5">
        {description}
      </div>
      {showButton && (
        <div className="mt-4">
          <GradientButton 
            label={buttonText} 
            width="w-full h-[40px]" 
            colors="bg-gray-900 text-white hover:opacity-90" 
            onClick={onButtonClick}
          />
        </div>
      )}
    </div>
  );
};

export default AppliedByCard;
export { AppliedByCard };
