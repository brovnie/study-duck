import {
  ParticipantView,
  type StreamVideoParticipant,
} from "@stream-io/video-react-sdk";

export const MyParticipantList = (props: {
  participants: StreamVideoParticipant[];
}) => {
  const { participants } = props;
  return (
    <div className="flex flex-1 min-h-0 items-center justify-center gap-8 h-[80vh]">
      {participants.map((participant) => (
        <div
          className="relative h-full aspect-video bg-black rounded-lg overflow-hidden"
          key={participant.userId}
        >
          <ParticipantView participant={participant} />
          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded">
            {participant.name || participant.userId}
          </div>
        </div>
      ))}
    </div>
  );
};
