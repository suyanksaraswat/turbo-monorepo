'use client';

import dynamic from 'next/dynamic';

export function VideoPlayer({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

  return (
    <div className={`${className}`}>
      <ReactPlayer
        controls
        pip
        url={url}
        width={'100%'}
        height={'100%'}
      />
    </div>
  );
}
