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
      <div className="w-24 h-32 rounded ">
        <img
          src="https://placehold.co/96x128"
          className="rounded-md object-contain w-full h-full"
          alt="Tier Shock"
        />
      </div>
      <div className="absolute bottom-12 left-[136px]  flex flex-row gap-2">
        <svg
          width="30"
          height="30"
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
          width="30"
          height="30"
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
          width="30"
          height="30"
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
          width="30"
          height="30"
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
          width="30"
          height="30"
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
      </div>
    </div>
  );
}
