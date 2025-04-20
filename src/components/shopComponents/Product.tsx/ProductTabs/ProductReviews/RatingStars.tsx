"use client";

import { RatingGroup } from "@chakra-ui/react";
import * as React from "react";

export interface RatingProps extends RatingGroup.RootProps {
  icon?: React.ReactElement;
  count?: number;
  label?: React.ReactNode;
}

export const Rating = React.forwardRef<
  HTMLDivElement,
  RatingProps & {
    value?: number;
    onChange?: (value: number) => void;
    readOnly?: boolean;
  }
>(function Rating(props, ref) {
  const {
    icon,
    count = 5,
    label,
    value,
    onChange,
    readOnly = false,
    ...rest
  } = props;
  return (
    <RatingGroup.Root
      ref={ref}
      count={count}
      value={value}
      onValueChange={(val) => {
        if (!readOnly) {
          onChange?.(val.value);
        }
      }}
      {...rest}
    >
      {label && <RatingGroup.Label>{label}</RatingGroup.Label>}
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        {Array.from({ length: count }).map((_, index) => (
          <RatingGroup.Item
            key={index}
            index={index + 1}
            _focus={{ boxShadow: "none", outline: "none" }}
            _active={{ boxShadow: "none", outline: "none" }}
            _hover={{ boxShadow: "none", outline: "none" }}
            pointerEvents={readOnly ? "none" : "auto"}
            cursor={readOnly ? "default" : "pointer"}
          >
            <RatingGroup.ItemIndicator icon={icon} />
          </RatingGroup.Item>
        ))}
      </RatingGroup.Control>
    </RatingGroup.Root>
  );
});
