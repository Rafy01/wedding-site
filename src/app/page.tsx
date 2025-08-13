import styles from "./page.module.css";
import Card from "../components/cards/Cards";
import Countdown from "../components/contdown/Countdown";
import VideoPlayer from "@/components/video/VideoPlayer";

export default function Home() {
  return (
    <main className={styles.hero}>
      <Card ariaLabelledby="countdown-title">
        <h1 id="countdown-title" className={styles.title}>
          We’re getting married! ❤️
        </h1>
        {/* <p>
          The big day is <strong>1 August 2026</strong> – we can’t wait to
          celebrate with you.
        </p> */}
        <Countdown targetDate="2026-08-01T12:00:00+02:00" />
      </Card>

      <Card ariaLabelledby="video-title">
        <h2 id="video-title" className={styles.subtitle}>
          Save the date
        </h2>
        <VideoPlayer
          mode="file"
          src="/wedding2026-2.mp4" // file placed in /public
          poster="/video_poster.webp" // optional image in /public
        />
      </Card>
    </main>
  );
}
