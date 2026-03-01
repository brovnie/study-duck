import {
  ParticipantView,
  StreamVideoParticipant,
} from "@stream-io/video-react-sdk";

export const FloatingLocalParticipant = (props: {
  participant?: StreamVideoParticipant;
}) => {
  const { participant } = props;
  if (!participant) {
    return <p>Error: No local participant</p>;
  }

  return (
    <div className="absolute top-20 left-15 w-[240px] h-[135px] bg-white rounded-lg overflow-hidden shadow-md">
      <ParticipantView participant={participant} />
    </div>
  );
};
