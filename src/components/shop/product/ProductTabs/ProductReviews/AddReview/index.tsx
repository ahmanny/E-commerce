"use client";

import { useModalsStore } from "@/store/modalStore";
import { CloseButton, Dialog, Portal } from "@chakra-ui/react";
import WriteReviewBtn from "../../../../ui/buttons/WriteReviewBtn";
import AddReviewForm from "./AddReviewForm";

interface AddReviewProps {
  productId: string;
}

export default function AddReview({ productId }: AddReviewProps) {
  const { isReviewModalOpen, setReviewModalOpen } = useModalsStore();
  return (
    <div>
      <Dialog.Root
        open={isReviewModalOpen}
        onOpenChange={(details) => setReviewModalOpen(details.open)}
        closeOnInteractOutside={false}
        size={"lg"}
        placement={"center"}
      >
        <Dialog.Trigger asChild>
          <WriteReviewBtn />
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <div className="flex items-center justify-between !mb-3">
                  <Dialog.Title className="!text-2xl !font-semibold">
                    Write Review
                  </Dialog.Title>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton className="hover:!bg-slate-200" />
                  </Dialog.CloseTrigger>
                </div>
              </Dialog.Header>
              <hr />
              <AddReviewForm productId={productId} />
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </div>
  );
}
