import styled from "styled-components";

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s ease;
  border-radius: 12px;

  &.visible {
    opacity: 1;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
`;

interface VideoBackgroundProps {
  isVisible: boolean;
}

const VideoBackground = ({ isVisible }: VideoBackgroundProps) => {
  return (
    <VideoContainer className={isVisible ? "visible" : ""}>
      <StyledVideo
        autoPlay
        muted
        loop
        playsInline
        src="/videos/designvid.mp4"
      />
    </VideoContainer>
  );
};

export default VideoBackground;
