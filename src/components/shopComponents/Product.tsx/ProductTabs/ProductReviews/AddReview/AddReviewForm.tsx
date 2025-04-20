"use client";

import TextereaInput from "@/components/Form/TextereaInput";
import TextInput from "@/components/Form/TextInput";
import { User, useUserStore } from "@/store/userStore";
import { Button, Dialog } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { Rating } from "../RatingStars";
import { useAddReview } from "@/lib/utils/hooks/mutations/reviews.mutations";
import { useModalsStore } from "@/store/modalStore";
import { BeatLoader } from "react-spinners";

interface AddReviewFormProps {
  productId: string;
}

const reviewFormSchema = z.object({
  name: z.string().min(3, "Enter your full name"),
  email: z.string().email("invalid Email"),
  comment: z.string().min(5, "Write a comment"),
  rating: z.number().min(1, "Please select a rating"),
});
type reviewFormData = z.infer<typeof reviewFormSchema>;
export default function AddReviewForm({ productId }: AddReviewFormProps) {
  const addReviewMuation = useAddReview();
  const { user } = useUserStore();
  const { closeReviewModal } = useModalsStore();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<reviewFormData>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      name: "",
      email: "",
      rating: 3,
    },
  });

  // ✅ Prefill form when user data is available
  useEffect(() => {
    if (user) {
      reset({
        email: user.email,
        name: user.name,
      });
    }
  }, [user, reset]);

  function submitChanges(data: reviewFormData) {
    const reviewData = {
      product: productId,
      rating: data.rating,
      comment: data.comment,
    };
    toast.success("sumitted review");
    addReviewMuation.mutate(reviewData, {
      onSuccess: () => {
        toast.success("Order placed successfully!");
        closeReviewModal();
      },
    });
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitChanges)}
        className=" flex flex-col pt-8 gap-[40px] w-full text-[#474B57]"
      >
        <Dialog.Body>
          <div className="flex flex-col gap-[18px]">
            {/* email input */}
            <TextInput
              name="email"
              label="Email"
              register={register}
              errors={errors}
              isReadOnly={user ? true : false}
            />
            {/* fullname input */}
            <TextInput
              name="name"
              label="Full name"
              register={register}
              errors={errors}
              isReadOnly={user ? true : false}
            />
            {/* Erite review */}
            <TextereaInput
              name="comment"
              label="Review"
              register={register}
              errors={errors}
            />
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <div className=" w-full flex flex-col">
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <Rating
                  defaultValue={2}
                  size="lg"
                  count={5}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors?.rating?.message && (
              <p className="text-red-500 text-sm">
                {String(errors.rating?.message)}
              </p>
            )}
            <button type="submit" className="btn mt-5">
              {addReviewMuation.isPending ? (
                <BeatLoader color="#3498db" />
              ) : (
                "Submit Your Review"
              )}
            </button>
            <Dialog.ActionTrigger asChild>
              <Button className="!text-center !underline !text-xl !py-1">
                Cancel
              </Button>
            </Dialog.ActionTrigger>
            {/* backend errors */}
            {addReviewMuation.isError && (
              <p className=" text-red-500">
                {String(addReviewMuation.error?.message)}
              </p>
            )}
          </div>
        </Dialog.Footer>
      </form>
    </div>
  );
}
