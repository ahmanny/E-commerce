"use client";

import { Button, Input, Popover, Portal, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import CopyToClipBoard from "./CopyToClipBoard";
import SocialShare from "./SocialShare";
interface ShareButtonProps {
  productName: string;
  productImage: string;
}

export default function ShareButton({
  productImage,
  productName,
}: ShareButtonProps) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          as={"span"}
          variant={"ghost"}
          size={"2xl"}
          p={2}
          borderRadius={"md"}
          _hover={{ bg: "gray.100" }}
        >
          <FaShareAlt className="text-[#5C5F6A]" />
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content w={"380px"}>
            <Popover.Arrow />
            <Popover.Body>
              <div className="p-3 flex flex-col gap-4">
                <Popover.Title fontWeight="bold" fontSize={"large"}>
                  Copy Link
                </Popover.Title>
                <div className="flex gap-6 pr-16 mb-8 justify-center items-center ">
                  <Input
                    className="input"
                    size="md"
                    readOnly
                    paddingLeft={"3"}
                    value={url}
                    onFocus={(e) => e.target.select()}
                    whiteSpace={"nowrap"}
                    overflow={"hidden"}
                    textOverflow={"ellipsis"}
                    _focus={{
                      whiteSpace: "normal",
                      overflow: "auto",
                      textOverflow: "unset",
                    }}
                  />
                  <CopyToClipBoard text={url} />
                </div>
                <SocialShare
                  url={url}
                  productImage={productImage}
                  productName={productName}
                />
              </div>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
