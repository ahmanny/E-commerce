"use client";
import {
  Button,
  Clipboard,
  ClipboardCopyStatusDetails,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdCheck } from "react-icons/md";
import { RiFileCopy2Line } from "react-icons/ri";
interface CopyToClipBoardProps {
  text: string;
}
export default function CopyToClipBoard({ text }: CopyToClipBoardProps) {
  const [status, setStatus] = useState(false);
  return (
    <Clipboard.Root
      value={text}
      onStatusChange={(details: ClipboardCopyStatusDetails) => {
        setStatus(details.copied);
      }}
    >
      <Clipboard.Trigger asChild>
        <Button variant="surface" size="xl">
          {status ? (
            <MdCheck className="text-[#5C5F6A]" />
          ) : (
            <RiFileCopy2Line className="text-[#5C5F6A]" />
          )}
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  );
}
