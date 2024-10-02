import Image, { ImageProps } from 'next/image';
import logoSvg from '../../images/logo.svg';

export function Logo(
  props: Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>,
) {
  return (
    <Image
      src={logoSvg}
      alt="Logo"
      width={200}
      height={40}
      aria-label="Home"
      {...props}
    />
  );
}
