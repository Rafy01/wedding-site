"use client";
import styles from "./videoPlayer.module.css";

type Props =
  | { mode: "embed"; embedUrl: string }
  | { mode: "file"; src: string; poster?: string };

export default function VideoPlayer(props: Props) {
  if (props.mode === "embed") {
    return (
      <div className={styles.videoWrap}>
        <iframe
          src={props.embedUrl}
          title="Wedding video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className={styles.videoWrap}>
      <video controls preload="metadata" poster={props.poster} playsInline>
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
