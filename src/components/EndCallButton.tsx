"use client";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();

  const { useLocalParticipant } = useCallStateHooks();
  const loaclParticipant = useLocalParticipant();

  const isMeetingOwner =
    loaclParticipant &&
    call?.state.createdBy &&
    loaclParticipant?.userId === call?.state.createdBy.id;

  if (!isMeetingOwner) return null;

  return (
    <>
      <abbr title="End call for everyone">
        <AlertDialog>
          <AlertDialogTrigger>
            {" "}
            <Button className="bg-red-500">End Call</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will End the Call for all members
                and If you like this Hire ChandraShekhar😇
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-gray-500 hover:bg-gray-600 border-none ">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={async () => {
                  await call.endCall();
                  router.push("/home");
                }}
                className="bg-red-500 hover:bg-red-600 font-extrabold"
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </abbr>
    </>
  );
};
export default EndCallButton;
