import { useEffect, useRef } from "react";

/** Carrega a YouTube IFrame API dinamicamente (idempotente). */
function loadYouTubeAPI(): Promise<void> {
  return new Promise((resolve) => {
    if ((window as any).YT?.Player) {
      resolve();
      return;
    }
    if (document.getElementById("youtube-iframe-api")) {
      // Script já existe, aguarda callback global
      const check = () => {
        if ((window as any).YT?.Player) {
          resolve();
        } else {
          setTimeout(check, 50);
        }
      };
      check();
      return;
    }
    const tag = document.createElement("script");
    tag.id = "youtube-iframe-api";
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode?.insertBefore(tag, firstScript);

    (window as any).onYouTubeIframeAPIReady = () => resolve();
  });
}

interface YouTubeBackgroundPlayerProps {
  videoId: string;
}

/**
 * Player de fundo do YouTube usando a IFrame API.
 * Loop programático (seekTo + playVideo) para evitar flash de controles no reinício.
 */
const YouTubeBackgroundPlayer = ({ videoId }: YouTubeBackgroundPlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    let destroyed = false;

    loadYouTubeAPI().then(() => {
      if (destroyed || !containerRef.current) return;

      playerRef.current = new (window as any).YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
          iv_load_policy: 3,
          playsinline: 1,
          loop: 0, // loop desabilitado — controlamos manualmente
          start: 0,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            // YT.PlayerState.ENDED === 0
            if (event.data === 0) {
              event.target.seekTo(0, true);
              event.target.playVideo();
            }
          },
        },
      });
    });

    return () => {
      destroyed = true;
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  return (
    <>
      <div
        ref={containerRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[177.78vh] h-[100vh] min-w-full min-h-[56.25vw] pointer-events-none [&>iframe]:pointer-events-none"
      />
      {/* Bloqueia qualquer clique no player — evita overlay de play/pause */}
      <div className="absolute inset-0 z-10" aria-hidden="true" />
    </>
  );
};

export default YouTubeBackgroundPlayer;
