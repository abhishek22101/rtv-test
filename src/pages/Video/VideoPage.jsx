import { useNavigate } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { VideoPageContainer, BackButton } from './VideoPage.styles';

const VideoPage = () => {
  const navigate = useNavigate();

  return (
    <VideoPageContainer>
      <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
      <VideoPlayer />
    </VideoPageContainer>
  );
};

export default VideoPage; 