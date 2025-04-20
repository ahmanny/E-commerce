import { Button } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaPinterestP, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";

interface SocialShareProps {
  url: string;
  productName: string;
  productImage: string;
}

export default function SocialShare({
  url,
  productImage,
  productName,
}: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(
    `Check out this awesome product:${productName}`
  );
  const encodedImage = encodeURIComponent(productImage);
  const SocialShareUrls = [
    {
      title: "facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <FaFacebookF />,
      label: "Share on Facebook",
    },
    {
      title: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
      icon: <FaXTwitter />,
      label: "Share on X",
    },
    {
      title: "pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedText}`,
      icon: <FaPinterestP />,
      label: "Share on Pinterest",
    },
    {
      title: "telegram",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
      icon: <RiTelegram2Fill />,
      label: "Share on Telegram",
    },
    {
      title: "whatsapp",
      href: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`,
      icon: <FaWhatsapp />,
      label: "Share on Whatsapp",
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold">Share</h1>
      <div>
        {SocialShareUrls.map((nav, index) => (
          <a
            href={nav.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={nav.label}
            key={index}
          >
            <Button
              as={"span"}
              variant={"ghost"}
              size={"2xl"}
              p={2}
              borderRadius={"md"}
              _hover={{ bg: "gray.100" }}
            >
              {nav.icon}
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
}
