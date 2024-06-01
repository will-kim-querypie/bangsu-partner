import { ResponsiveImage } from '../responsive-image';

type LogoProps = {
  width: number;
};

export default function Logo({ width }: LogoProps) {
  return <ResponsiveImage src="/logo.png" alt="logo" width={width} aspectRatio="204 / 38" quality={100} priority />;
}
