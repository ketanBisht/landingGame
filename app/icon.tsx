import { ImageResponse } from 'next/og';
 
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2px',
          padding: '2px',
          background: 'transparent',
        }}
      >
        <div style={{ background: '#b4ff5c', width: '13px', height: '13px', borderRadius: '3px' }} />
        <div style={{ background: '#000000', width: '13px', height: '13px', borderRadius: '3px' }} />
        <div style={{ background: '#000000', width: '13px', height: '13px', borderRadius: '3px' }} />
        <div style={{ background: '#b4ff5c', width: '13px', height: '13px', borderRadius: '3px' }} />
      </div>
    ),
    {
      ...size,
    }
  );
}
