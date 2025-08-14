"use client";
import { useEffect, useState } from "react";
import styles from "./videoPlayer.module.css";

type FileProps = {
  mode: "file";
  src: string; // Desktop video
  srcMobile?: string; // Mobil video
  poster?: string; // Desktop poster
  posterMobile?: string; // Mobil poster
  fit?: "contain" | "cover";
  force16x9?: boolean;
};

type EmbedProps = { mode: "embed"; embedUrl: string };

type Props = FileProps | EmbedProps;

export default function VideoPlayer(props: Props) {
  const [videoSrc, setVideoSrc] = useState(
    props.mode === "file" ? props.src : ""
  );
  const [posterSrc, setPosterSrc] = useState(
    props.mode === "file" ? props.poster : undefined
  );

  useEffect(() => {
    if (props.mode === "file") {
      const checkScreen = () => {
        if (window.innerWidth <= 768) {
          // Mobil version
          setVideoSrc(props.srcMobile || props.src);
          setPosterSrc(props.posterMobile || props.poster);
        } else {
          // Desktop version
          setVideoSrc(props.src);
          setPosterSrc(props.poster);
        }
      };
      checkScreen();
      window.addEventListener("resize", checkScreen);
      return () => window.removeEventListener("resize", checkScreen);
    }
  }, [props]);

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

  const { fit = "contain", force16x9 = false } = props;

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
        key={videoSrc} // tvinger reload
        className={videoClass}
        controls
        preload="metadata"
        poster={posterSrc}
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
