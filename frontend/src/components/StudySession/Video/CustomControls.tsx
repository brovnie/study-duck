import { IconButton, styled } from "@mui/material";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";

const CustomControls = () => {
  const call = useCall();
  const { useMicrophoneState, useCameraState } = useCallStateHooks();

  const { microphone, isMute } = useMicrophoneState();
  const { camera, isEnabled: isCameraOn } = useCameraState();

  if (!call) return null;

  const CustomIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: "var(--color-amber-300)",
    "&:hover": {
      backgroundColor: "var(--color-amber-400)",
    },
  }));

  return (
    <div className="flex w-full h-full items-center gap-4 p-2 bg-white justify-center">
      <div className="flex flex-col gap-1 items-center">
        {/* Camera Button */}
        <CustomIconButton
          aria-label="camera on/off"
          className="p-4 shadow-md"
          onClick={() => camera.toggle()}
        >
          {isCameraOn ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 0 1-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 0 0-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"
              />
            </svg>
          )}
        </CustomIconButton>
        <span className="uppercase text-xs font-bold">
          {isCameraOn ? "Turn off" : "Turn on"}
        </span>
      </div>
      {/* Mic Button */}
      <div className="flex flex-col gap-1 items-center">
        <CustomIconButton
          aria-label="muten/unmute"
          className="bg-white p-4 rounded-full shadow-md"
          onClick={() => microphone.toggle()}
        >
          {isMute ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
              />
            </svg>
          )}
        </CustomIconButton>
        <span className="uppercase text-xs font-bold">
          {isMute ? "Unmute" : "Mute"}
        </span>
      </div>

      {/* Leave Call */}
      <button
        onClick={() => call.leave()}
        className="px-4 py-2 rounded bg-red-700 text-white"
      >
        Leave
      </button>
    </div>
  );
};

export default CustomControls;
