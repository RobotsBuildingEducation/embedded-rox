import { logEvent } from "firebase/analytics";
import { analytics } from "../../../database/firebaseResources";
import lightningmember from "../../../common/media/images/lightningmember.png";
import { Button } from "react-bootstrap";
import { useState } from "react";
import {
  responsiveBox,
  paddingBlock,
  japaneseThemePalette,
} from "../../../styles/lazyStyles";

/**
 * Renders a Discord connection button and a Patreon link.
 *
 * This component displays a Discord widget and a Patreon promotional link. Clicking the link logs an event to Firebase Analytics and redirects the user to a specified Patreon page. The component uses inline styling for layout and appearance.
 *
 * The Discord widget allows users to interact with Discord within the component. The Patreon link, styled as a button, uses Firebase Analytics to track clicks, identifying the promotion's effectiveness.
 *
 * No props are required.
 *
 * Example usage:
 * `<DiscordButton />`
 */
export const DiscordButton = () => {
  const [backgroundColor, setBackgroundColor] = useState("purple");
  const [display, setDisplay] = useState("none");
  const [borderColor, setBorderColor] = useState("white");
  return (
    <>
      <h1
        style={{
          fontFamily: "Bungee",
          borderBottom: `1px solid ${borderColor}`,
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
          padding: 24,
          cursor: "pointer",
          transition: "0.16s all ease-in-out",
          maxWidth: 700,
          width: "100%",
        }}
        onMouseDown={() => {
          if (display === "none") {
            setDisplay("block");
          } else {
            setDisplay("none");
          }
        }}
        onMouseEnter={() => {
          setBorderColor("blue");
        }}
        onMouseLeave={() => {
          setBorderColor("white");
        }}
      >
        Connect
      </h1>
      <br />

      <div
        style={{
          display: display,
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.8)",
          minWidth: 375,
          maxWidth: "100%",
        }}
      >
        {/* <div
          style={{
            ...responsiveBox,
            ...paddingBlock("#5764F2"),
          }}
        >
          <b>Have any questions?</b>Join us on Discord. Discord is a platform
          that lets you chat with people through text, voice, and video. It's
          organized into "servers" which are like big chat rooms, and each
          server has its own topics and groups. It's popular for gaming,
          studying, and hobbies, letting users talk and share files in a
          structured way.
        </div>
        <br />
        <iframe
          src="https://discord.com/widget?id=115318178929704963&theme=dark"
          width="375"
          height="300"
          allowTransparency={true}
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
        <br />
        <br />
        <br /> */}
        {/* <RiseUpAnimation speed={0.3}> */}
        <div
          style={{
            ...responsiveBox,
            ...paddingBlock("#212529"),
          }}
        >
          Nostr is a protocol that's short for "Notes and Other Stuff
          Transmitted by Relays". It's like Threads by Instagram, but bigger and
          better. Connect with me here and expand your network with great
          engineers and entrepreneurs building open-source software for
          decentralized systems!
        </div>
        <a
          style={{ color: "white" }}
          href={
            "https://primal.net/p/npub14vskcp90k6gwp6sxjs2jwwqpcmahg6wz3h5vzq0yn6crrsq0utts52axlt"
          }
          target={"_blank"}
        >
          <Button
            variant="dark"
            style={{
              color: "white",
              textShadow: "0px 0px 4px black",
              margin: 6,
              width: 375,
              display: "flex",
            }}
            onMouseDown={() => {
              logEvent(analytics, "select_content", {
                content_type: "button",
                item_id: "Primal Social Wallet",
              });
            }}
          >
            <div>
              {" "}
              <svg
                style={{ marginBottom: 2 }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256"
                fill="none"
              >
                <g clip-path="url(#clip0_1_943)">
                  <path
                    d="M155.506 253.036C146.645 254.976 137.44 255.999 127.997 255.999C102.077 255.999 77.9567 248.295 57.8008 235.051C52.7974 227.894 50.5525 223.955 48.915 221.081C48.1036 219.657 47.4413 218.495 46.6664 217.332C39.0311 205.053 35.0362 189.28 34.1651 170.748C31.4666 113.326 66.3642 76.6573 102.015 70.6387C124.613 66.8235 142.572 70.6872 156.347 78.0534C144.169 74.666 129.652 74.4622 113.102 79.2C72.9831 92.1309 59.6091 131.451 65.3414 174.994C75.3453 229.555 128.842 249.111 155.506 253.036Z"
                    fill="url(#paint0_linear_1_943)"
                  />
                  <path
                    d="M41.2387 222.111C33.7762 208.86 27.0184 189.088 26.1739 171.123C23.3092 110.164 60.5628 69.5235 100.683 62.7503C155.371 53.5175 185.775 85.8934 196.256 109.923C196.695 109.628 196.873 109.043 196.641 108.539C179.408 71.0662 143.765 45.3331 102.592 45.3331C55.8419 45.3331 14.127 78.8691 0 128.71C0.200633 165.642 16.0426 198.871 41.2387 222.111Z"
                    fill="url(#paint1_linear_1_943)"
                  />
                  <path
                    d="M199.997 233.844C190.764 240.137 180.665 245.253 169.916 248.977C164.755 248.078 159.037 246.959 155.011 246.171C153.103 245.797 151.574 245.498 150.666 245.332C126.318 240.885 82.7834 225.195 73.246 173.749C70.5513 153.063 72.4812 134.02 79.3156 118.916C86.0487 104.035 97.6686 92.6275 115.39 86.8682C135.987 81.2567 153.055 84.0378 165.732 90.8469C162.612 90.1887 159.386 89.8437 156.085 89.8437C128.652 89.8437 106.414 113.671 106.414 143.063C106.414 154.799 109.959 165.648 115.966 174.447C115.966 174.447 133.16 206.926 179.966 204.023C221.7 201.434 243.373 163.999 245.956 150.172C247.298 142.986 248 135.575 248 127.999C248 61.7256 194.274 7.99997 128.001 7.99997C77.851 7.99997 34.8866 38.7631 16.9488 82.4478C10.8898 90.3409 5.6727 99.0914 1.46875 108.554C10.8367 47.0899 63.9194 0 128.001 0C198.693 0 256 57.3073 256 127.999C256 171.996 233.803 210.805 199.997 233.844Z"
                    fill="url(#paint2_linear_1_943)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_943"
                    x1="79.9357"
                    y1="106.044"
                    x2="79.7404"
                    y2="219.805"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0297309" stop-color="#FA3C3C" />
                    <stop offset="1" stop-color="#BC1870" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_943"
                    x1="62.5099"
                    y1="52.0175"
                    x2="56.1717"
                    y2="165.81"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF9F2F" />
                    <stop offset="1" stop-color="#FA3C3C" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1_943"
                    x1="151.999"
                    y1="253.332"
                    x2="152.351"
                    y2="121.334"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#5B09AD" />
                    <stop offset="1" stop-color="#BC1870" />
                  </linearGradient>
                  <clipPath id="clip0_1_943">
                    <rect width="256" height="256" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>&nbsp; Grow your network on nostr</div>
          </Button>
        </a>
        {/* </RiseUpAnimation> */}
        <br />
        <br />
        <div
          style={{
            ...responsiveBox,
            ...paddingBlock("#B0148E"),
          }}
        >
          Patreon keeps you in touch with the development of the platform.
          You'll be able to access additional services and content much sooner
          before it may or may not find itself in here with rox.
        </div>
        <a
          onMouseEnter={() => {
            setBackgroundColor("#F9C2D8");
          }}
          onMouseLeave={() => {
            setBackgroundColor("purple");
          }}
          onMouseDown={() =>
            logEvent(analytics, "select_promotion", {
              creative_name: `https://www.patreon.com/RobotsBuildingEducation`,
              creative_slot: `About Slot`,
              promotion_id: `Rox`,
              promotion_name: "advertising_launch",
            })
          }
          href="https://www.patreon.com/RobotsBuildingEducation"
          target={"_blank"}
          style={{
            color: "white",
            // boxShadow: "0px 0px 11px 0px rgba(255,38,74,0.75)",
            // borderRadius: 12,

            maxWidth: 600,
            width: "100%",
            marginBottom: 12,

            paddingBottom: 6,
            transition: "0.16s all ease-in-out",
          }}
        >
          <img
            src={lightningmember}
            style={{ borderRadius: 0, width: "100%" }}
          />

          <div style={{ padding: 5, textShadow: "0px 0px 2px black" }}>
            <b style={{ textDecoration: "underline" }}>Connect on Patreon</b>
          </div>
        </a>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};
