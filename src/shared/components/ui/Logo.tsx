import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo = ({ className = '', width = 150, height = 45 }: LogoProps) => {
  return (
    <Image
      src="/assets/logo.png"
      alt="Jon Táo Logo"
      width={width}
      height={height}
      priority
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;
