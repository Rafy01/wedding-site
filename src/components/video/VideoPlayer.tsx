"use client";
import styles from "./videoPlayer.module.css";

type FileProps = {
  mode: "file";
  src: string;
  poster?: string;
  /** How the video should fit inside its box. Default: "contain" */
  fit?: "contain" | "cover";
  /** Force a 16:9 frame (good for uniform cards). Default: false */
  force16x9?: boolean;
};

type EmbedProps = { mode: "embed"; embedUrl: string };

type Props = FileProps | EmbedProps;

export default function VideoPlayer(props: Props) {
  if (props.mode === "embed") {
    return (
      <div className={`${styles.videoWrap} ${styles.ratio16x9}`}>
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

  // FILE MODE (local video)
  const { src, poster, fit = "contain", force16x9 = false } = props;
  const wrapClass = force16x9
    ? `${styles.videoWrap} ${styles.ratio16x9}`
    : styles.videoWrap;

  const videoClass = [
    force16x9 ? styles.videoFill : styles.videoIntrinsic,
    fit === "cover" ? styles.fitCover : styles.fitContain,
  ].join(" ");

  return (
    <div className={wrapClass}>
      <video
        className={videoClass}
        controls
        preload="metadata"
        poster={poster}
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
