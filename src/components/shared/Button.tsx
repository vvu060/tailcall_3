type ButtonProps = {
  title?: string;
  icon?: string;
  theme: 'light' | 'dark';
  onClick: () => void;
};

const Button = ({ title, icon, theme, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl h-16 w-52 text-title-small cursor-pointer px-12 py-5 ${
        theme === 'dark'
          ? 'text-tailCall-light-100 bg-tailCall-dark-600 border-none'
          : 'text-tailCall-dark-500 bg-transparent border-2 border-tailCall-dark-500'
      }`}
    >
      {icon && <img src={icon} alt={title} />}
      {title && <span> {title}</span>}
    </button>
  );
};

export default Button;
