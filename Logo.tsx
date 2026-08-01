interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({
  size = 48,
  className = "",
}: LogoProps) {
  return (
    <img
      src="/images/logo.jpg"
      alt="Tejas Enerrgy"
      width={size}
      height={size}
      className={className}
    />
  );
}