const CLOUD_NAME = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME;

export const CLD_FOLDER = 'DG_port';

interface CldImageOptions {
  width?: number;
  height?: number;
  format?: string;
  quality?: string;
}

export function cldImage(name: string, opts: CldImageOptions = {}): string {
  const { width, height, format = 'auto', quality = 'auto' } = opts;

  const transforms = [
    `f_${format}`,
    `q_${quality}`,
    width ? `w_${width}` : null,
    height ? `h_${height}` : null,
  ]
    .filter(Boolean)
    .join(',');

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${CLD_FOLDER}/${name}`;
}
