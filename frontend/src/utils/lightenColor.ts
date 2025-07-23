export const lightenColor = (color: string, percent: number = 40): string => {
  let hex = color.replace(/^#/, '');

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((c) => c + c)
      .join('');
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const lighten = (channel: number) => Math.min(255, channel + (255 - channel) * (percent / 100));

  const newR = Math.round(lighten(r));
  const newG = Math.round(lighten(g));
  const newB = Math.round(lighten(b));

  return `#${[newR, newG, newB].map((c) => c.toString(16).padStart(2, '0')).join('')}`;
};
