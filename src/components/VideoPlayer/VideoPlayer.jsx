import { useEffect, useRef } from 'react';
import { Player } from 'bitmovin-player';
import { VideoContainer } from './VideoPlayer.styles';

const VideoPlayer = () => {
  const playerRef = useRef(null);
  const playerInstanceRef = useRef(null);

  useEffect(() => {
    const config = {
      key: 'test-keyy',
      cast: {
        enable: true
      }
    };

    // from bitmovin page
    const source = {
      dash: 'https://cdn.bitmovin.com/content/assets/art-of-motion_drm/mpds/11331.mpd',
      hls: 'https://cdn.bitmovin.com/content/assets/art-of-motion_drm/m3u8s/11331.m3u8',
      smooth: 'https://test.playready.microsoft.com/smoothstreaming/SSWSS720H264/SuperSpeedway_720.ism/manifest',
      drm: {
        widevine: {
          LA_URL: 'https://cwip-shaka-proxy.appspot.com/no_auth'
        },
        playready: {
          LA_URL: 'https://test.playready.microsoft.com/service/rightsmanager.asmx?PlayRight=1&ContentKey=EAtsIJQPd5pFiRUrV9Layw=='
        }
      }
    };

    playerInstanceRef.current = new Player(playerRef.current, config);
    playerInstanceRef.current.load(source);

    return () => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
      }
    };
  }, []);

  return <VideoContainer ref={playerRef} />;
};

export default VideoPlayer; 