import { useEffect, useRef, useState } from "react";
import { japaneseThemePalette, textBlock } from "../../styles/lazyStyles";
import { addKnowledgeStep, updateImpact } from "../../App.compute";
import { useZap } from "../../App.hooks";
import { RevealButton } from "../../common/ui/Elements/RevealButton/RevealButton";
import { KnowledgeCollector } from "../../common/ui/Elements/KnowledgeCollector/KnowledgeCollector";
import { HintUI } from "../../common/ui/Elements/HintUI/HintUI";

// Style object for the video element
const videoStyle = {
  width: "100%",
  borderRadius: "30px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  // border: "1px solid green",
};

// Style object for the Markdown content
const markdownStyle = {
  textAlign: "left",
};

// Function to display video content
const renderVideo = (patreonObject, isAutoPlay, videoRef) => (
  <>
    <video
      poster="https://res.cloudinary.com/dtkeyccga/image/upload/v1706481474/Untitled_Desktop_Wallpaper_qrpmgm.png"
      style={videoStyle}
      controls
      autoPlay={isAutoPlay}
      ref={videoRef}
      playsInline
    >
      <source src={patreonObject.fileSource} type="video/mp4" />
      <source src={patreonObject.fileSource} type="video/mov" />
    </video>
    {patreonObject.prompts?.patreon?.extraContent && (
      <RevealButton content={patreonObject.prompts?.patreon?.extraContent} />
    )}
  </>
);

// Main Patreon component
const Patreon = ({
  patreonObject,
  isAutoPlay = false,
  handleScheduler,
  handleWatch,
  userStateReference,
  globalStateReference,
  handleZap,
  moduleName,
}) => {
  const zapAmount = 1;
  let zap = useZap(zapAmount, "Rox Video");
  const videoRef = useRef(null);
  let [videoDurationDetection, setVideoDurationDetection] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    let depositInterval;

    const handlePlay = () => {
      setIsVideoPlaying(true);
    };

    const handlePauseOrEnd = () => {
      setIsVideoPlaying(false);
      // Clear interval when the video is paused or ended)
      if (depositInterval) {
        clearInterval(depositInterval);
      }
    };

    const checkVideoProgress = () => {
      if (videoRef.current) {
        const videoElement = videoRef.current;
        const ninetyPercentDuration = videoElement.duration * 0.9;

        if (videoElement.currentTime >= ninetyPercentDuration) {
          console.log("running video");
          setVideoDurationDetection(true);
          // handleScheduler("video", moduleName);
          handleWatch(moduleName, patreonObject);
        }
      }
    };

    if (videoElement) {
      videoElement.addEventListener("play", handlePlay);
      videoElement.addEventListener("pause", handlePauseOrEnd);
      videoElement.addEventListener("ended", handlePauseOrEnd);

      if (!videoDurationDetection) {
        videoElement.addEventListener("timeupdate", checkVideoProgress);
      }
    }

    if (
      localStorage.getItem("patreonPasscode") ===
        import.meta.env.VITE_BITCOIN_PASSCODE &&
      isVideoPlaying
    ) {
      depositInterval = setInterval(() => {
        zap().then((response) => {
          if (response?.preimage) {
            updateImpact(zapAmount, userStateReference, globalStateReference);
            handleZap("video");
          }
        });
      }, 15000);
    }

    // Cleanup
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", handlePlay);
        videoElement.removeEventListener("pause", handlePauseOrEnd);
        videoElement.removeEventListener("ended", handlePauseOrEnd);
        videoElement.removeEventListener("timeupdate", checkVideoProgress);
      }
      if (depositInterval) clearInterval(depositInterval);
    };
  }, [videoDurationDetection, isVideoPlaying]);

  return (
    <div style={{ padding: 20 }} key={patreonObject.header}>
      {patreonObject.header === "Learning Mindset & Perspective" &&
      !userStateReference.databaseUserDocument.watches[
        "Learning Mindset & Perspective"
      ] ? (
        <>
          <div
            style={{
              ...textBlock(japaneseThemePalette.CobaltBlue, 0, 24),
            }}
          >
            <b>
              watch 90% of the video to complete the first step in unlocking the
              next lecture ⚡
            </b>
          </div>
          <br />
          <br />
        </>
      ) : null}

      {renderVideo(patreonObject, isAutoPlay, videoRef)}
      {/* <br />
      <KnowledgeCollector
        step={1}
        knowledge={"data"}
        label={"test"}
        collectorId={"test"}
      />
      <HintUI
        message={
          "Pressing this button will collect knowledge for adaptive learning assistance 💭"
        }
      /> */}
    </div>
  );
};

export default Patreon;
