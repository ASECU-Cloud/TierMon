import tier_shock from "../../assets/happy_shock.png";
export default function Player() {
  return (
    <div className="absolute bottom-32 left-6 bg-white rounded-md p-4 ">
      <>
        <div className="absolute h-16 w-44 bg-white text-black rounded-md p-2 grid grid-rows-2 gap-4 bottom-20 left-28">
          <p>Tier </p>
          <div className="flex flex-row items-center  gap-2">
            <p>HP</p>
            <p>:</p>
            <progress
              className="animate-pulse progress progress-error w-28"
              value="20"
              max="100"
            ></progress>
          </div>
        </div>
      </>
      <div className="w-24 h-32 rounded relative">
        <div>
          <svg
            className="absolute top-16 right-0 z-10 "
            width="23"
            height="23"
            viewBox="0 0 255 255"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_13_9)">
              <path
                d="M9.52203 228.122C100.514 248.422 151.53 252.415 242.522 228.122C246.19 186.702 246.727 154.172 242.522 123.979L111.022 147.122L9.52203 228.122Z"
                fill="#FF0000"
                stroke="black"
                strokeWidth="9"
              />
              <path
                d="M202.022 10.1224C124.297 33.8051 82.4412 43.6761 9.52203 88.6224L111.022 147.122L242.522 123.979C237.315 86.5902 224.835 52.7856 202.022 10.1224Z"
                fill="white"
                stroke="black"
                strokeWidth="9"
              />
            </g>
            <defs>
              <clipPath id="clip0_13_9">
                <rect width="255" height="255" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="absolute top-16 left-0 z-10"
            width="23"
            height="23"
            viewBox="0 0 255 255"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_14_4)">
              <path
                d="M245.478 228.122C154.486 248.422 103.47 252.415 12.478 228.122C8.80994 186.702 8.27271 154.172 12.478 123.979L143.978 147.122L245.478 228.122Z"
                fill="white"
                stroke="black"
                strokeWidth="9"
              />
              <path
                d="M52.978 10.1224C130.703 33.8051 172.559 43.6761 245.478 88.6224L143.978 147.122L12.478 123.979C17.6854 86.5902 30.1653 52.7856 52.978 10.1224Z"
                fill="white"
                stroke="black"
                strokeWidth="9"
              />
            </g>
            <defs>
              <clipPath id="clip0_14_4">
                <rect width="255" height="255" fill="white" transform="matrix(-1 0 0 1 255 0)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        {/* <img
          src="https://placehold.co/96x128"
          className="rounded-md object-contain w-full h-full"
          alt="Tier Shock"
        /> */}
        <div className="rounded-md bg-gradient-to-t from-yellow-500 opacity-10  absolute inset-0 w-full h-full animate-pulse "></div>
        <img
          src={tier_shock}
          className="rounded-md object-contain w-full h-full border border-yellow-400"
          alt="Tier Shock"
        />
      </div>
      <div className="absolute bottom-12 left-[136px]  flex flex-row gap-2">
        <svg
          width="23"
          height="23"
          viewBox="0 0 400 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M204.417 235.5C292.259 235.5 385.01 160.7 385.5 102.05V14.5H14.5V102.05C14.5 160.7 104.796 235.5 204.417 235.5Z"
            fill="#FFC700"
          />
          <path
            d="M277.537 102.05C160.152 102.05 142.093 102.05 127.37 102.05M204.417 169.625C204.417 63.885 204.417 63.6583 204.417 49.775M14.5 102.05C14.5 160.7 104.796 235.5 204.417 235.5C292.259 235.5 385.01 160.7 385.5 102.05V14.5H14.5V102.05Z"
            stroke="black"
            strokeWidth="9"
          />
        </svg>
        <svg
          width="23"
          height="23"
          viewBox="0 0 400 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M204.417 235.5C292.259 235.5 385.01 160.7 385.5 102.05V14.5H14.5V102.05C14.5 160.7 104.796 235.5 204.417 235.5Z"
            fill="#FFC700"
          />
          <path
            d="M277.537 102.05C160.152 102.05 142.093 102.05 127.37 102.05M204.417 169.625C204.417 63.885 204.417 63.6583 204.417 49.775M14.5 102.05C14.5 160.7 104.796 235.5 204.417 235.5C292.259 235.5 385.01 160.7 385.5 102.05V14.5H14.5V102.05Z"
            stroke="black"
            strokeWidth="9"
          />
        </svg>
        <svg
          width="23"
          height="23"
          viewBox="0 0 400 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M204.417 235.5C292.259 235.5 385.01 160.7 385.5 102.05V14.5H14.5V102.05C14.5 160.7 104.796 235.5 204.417 235.5Z"
            fill="#FFC700"
          />
          <path
            d="M277.537 102.05C160.152 102.05 142.093 102.05 127.37 102.05M204.417 169.625C204.417 63.885 204.417 63.6583 204.417 49.775M14.5 102.05C14.5 160.7 104.796 235.5 204.417 235.5C292.259 235.5 385.01 160.7 385.5 102.05V14.5H14.5V102.05Z"
            stroke="black"
            strokeWidth="9"
          />
        </svg>
        <svg
          width="23"
          height="23"
          viewBox="0 0 400 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="grayscale"
        >
          <path
            d="M204.417 235.5C292.259 235.5 385.01 160.7 385.5 102.05V14.5H14.5V102.05C14.5 160.7 104.796 235.5 204.417 235.5Z"
            fill="#FFC700"
          />
          <path
            d="M277.537 102.05C160.152 102.05 142.093 102.05 127.37 102.05M204.417 169.625C204.417 63.885 204.417 63.6583 204.417 49.775M14.5 102.05C14.5 160.7 104.796 235.5 204.417 235.5C292.259 235.5 385.01 160.7 385.5 102.05V14.5H14.5V102.05Z"
            stroke="black"
            strokeWidth="9"
          />
        </svg>
        <svg
          width="23"
          height="23"
          viewBox="0 0 400 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="grayscale"
        >
          <path
            d="M204.417 235.5C292.259 235.5 385.01 160.7 385.5 102.05V14.5H14.5V102.05C14.5 160.7 104.796 235.5 204.417 235.5Z"
            fill="#FFC700"
          />
          <path
            d="M277.537 102.05C160.152 102.05 142.093 102.05 127.37 102.05M204.417 169.625C204.417 63.885 204.417 63.6583 204.417 49.775M14.5 102.05C14.5 160.7 104.796 235.5 204.417 235.5C292.259 235.5 385.01 160.7 385.5 102.05V14.5H14.5V102.05Z"
            stroke="black"
            strokeWidth="9"
          />
        </svg>
      </div>
    </div>
  );
}
