import { ComponentType, SVGProps } from 'react';

type ButtonProps = {
  title?: string;
  icon?: string;
  theme: 'light' | 'dark' | 'gray';
  onClick: () => void;
};

const Button = ({ title, icon, theme, onClick }: ButtonProps) => {
  const generateThemeClasses = () => {
    switch (theme) {
      case 'light':
        return 'text-tailCall-dark-500 bg-transparent border-2 !border-tailCall-dark-500';

      case 'dark':
        return 'text-tailCall-light-100 bg-tailCall-dark-700 border-none';

      case 'gray':
        return 'text-tailCall-dark-100 bg-transparent border-2 !border-tailCall-dark-100';

      default:
        break;
    }
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-xl h-16 min-w-fit text-title-small cursor-pointer px-12 py-5 ${
        generateThemeClasses() ?? ''
      }`}
    >
      {icon && <img src={icon} alt={title} />}
      {title && <span> {title}</span>}
    </button>
  );
};

export default Button;
