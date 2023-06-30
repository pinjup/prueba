import Cards_categories from "./Cards_categories"

/* eslint-disable react/no-unescaped-entities */
export default function Main_content() {
    return (
        <main className="w-full h-auto font-[Montserrat]  px-5 flex flex-col gap-6">
            <div id='title'>
                <h1 className=" leading-[50px] text-4xl font-bold">Find the World's Top Job</h1>
            </div>

            <div className="w-full h-11 p-3 bg-[#f2f1f1] rounded-xl flex items-center gap-1" id='search'>

                <svg className="w-4 h-4 justify-self-start"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Livello 1"
      viewBox="0 0 128 128"
    >
      <path d="M127.11 122.87l-48.45-48A45 45 0 0045 0a44.7 44.7 0 00-31.82 13.18A45 45 0 0045 90a44.65 44.65 0 0029.38-10.93l48.51 48.06a3 3 0 104.22-4.26zM17.42 72.58a39 39 0 010-55.15 39 39 0 1155.16 55.15 39 39 0 01-55.15 0z"></path>
                </svg>

                <input className="w-4/5 h-9 bg-transparent p-2 text-sm text-black placeholder:text-[#6a6a6a]" type="text" placeholder="Search for jobs" />

                <svg className="w-8 h-8 p-1 bg-[#f9f9f9] rounded-lg ml-auto" 
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 128 128"
      xmlSpace="preserve"
    >
      <path d="M61.894 66.056H16.185a2 2 0 010-4h45.709a2 2 0 010 4zM111.907 66.056H87.655a2 2 0 010-4h24.252a2 2 0 010 4zM48.503 96.609H16.185a2 2 0 010-4h32.318a2 2 0 010 4zM111.907 96.609H74.774a2 2 0 010-4h37.133a2 2 0 010 4zM35.013 35.502H16.185a2 2 0 010-4h18.828a2 2 0 010 4zM111.907 35.502H60.776a2 2 0 010-4h51.131a2 2 0 010 4z"></path>
      <path d="M42.616 43.104c-5.295 0-9.604-4.309-9.604-9.604 0-5.295 4.309-9.603 9.604-9.603s9.604 4.308 9.604 9.603c0 5.296-4.309 9.604-9.604 9.604zm0-15.207a5.61 5.61 0 00-5.604 5.603c0 3.09 2.514 5.604 5.604 5.604S48.22 36.59 48.22 33.5a5.61 5.61 0 00-5.604-5.603zM56.106 104.215c-5.295 0-9.604-4.309-9.604-9.605 0-5.295 4.309-9.604 9.604-9.604 5.297 0 9.605 4.309 9.605 9.604.001 5.296-4.308 9.605-9.605 9.605zm0-15.209a5.61 5.61 0 00-5.604 5.604 5.61 5.61 0 005.604 5.605 5.61 5.61 0 005.605-5.605 5.61 5.61 0 00-5.605-5.604zM69.501 73.661c-5.298 0-9.607-4.31-9.607-9.605 0-5.295 4.31-9.604 9.607-9.604 5.294 0 9.602 4.308 9.602 9.604 0 5.296-4.308 9.605-9.602 9.605zm0-15.209a5.612 5.612 0 00-5.607 5.604 5.613 5.613 0 005.607 5.605 5.61 5.61 0 005.602-5.605 5.61 5.61 0 00-5.602-5.604z"></path>
                </svg>

                
            </div>

            <div className="flex flex-col gap-4" id="similar-job">

                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-xl">Similar Job</h2>
                    <span className="text-sm font-semibold">See All</span>
                </div>

                <div className="w-full h-52 bg-black rounded-xl p-6 pr-8 py-4 grid grid-cols-[35%_35%_30%] grid-rows-[10%_35%_20%_35%] gap-2">

                    <div className="col-start-1 col-end-3 row-start-1 row-end-2">
                        <h3 className="text-gray-500 text-xs ">Evernote</h3>
                        <h2 className="text-white font-bold text-xl">Product Designer</h2>
                    </div>
                    
                    <div className="w-full h-full flex justify-end pr-1 pt-2">
                        <svg className="w-7 h-7 col-start-3 col-end-4 row-start-1 row-end-2"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path
        fill="#5AB82F"
        d="M465.9 244c2.3 27.3 2.3 54.6-.9 81.9-4.5 38.4-9.6 76.7-21.1 113.7-5 16.2-11.1 32-20.7 46.3-10 14.7-24 22.3-41.3 23.9-28.3 2.6-56.6 2.7-84.7-1.9-13.9-2.3-26.8-7.3-34.7-20.2-3.4-5.4-5.5-11.4-6.6-17.6-3.1-16.5-3.3-33.2-.3-49.7 4.5-24.8 17.5-36.2 42.8-38.2 11.1-.9 22.3-1.1 33.5-.5 4 .2 5.2 1.7 3.7 5.3-3.4 8.5-3.5 17.2-1.5 26 .9 3.9-1 5.1-4.6 5-6.5-.1-13-.5-19.4.9-8.5 1.9-12.8 7.1-13 15.8v1.5c0 15.5 4.6 21.2 19.9 22.3 14.8 1.1 29.7 1.3 44.4-.6 13.9-1.8 20-6.7 21.9-20.5 2.8-20.7 2.2-41.6-4.4-61.8-4.9-15.1-16.1-22-31.3-23.7-17.1-1.8-34-4.6-50.8-7.8-22.8-4.4-32.8-17.9-36.4-39.9-1.1-6.8-1.2-13.6-1.2-20.4 0-1.3.9-3.6-1.2-3.6-1.9.1-1.2 2.4-1.2 3.8.1 15.6-1.8 30.9-5.5 46-2 8.4-4.8 16.7-8.3 24.6-3.5 8-9.7 12.5-18.8 12.4-14.1-.2-27.8-3.1-41.6-5.3-25.5-4.1-50.4-10.5-75.4-17.1-21.4-5.6-32.3-19.3-38-39.2-9.3-32.1-15.3-64.8-20.8-97.6-2.4-14.3-4.3-28.7-5.6-43.1-.7-7.9-.1-15.7 2-23.3 4.4-15.5 15.7-22.9 30.8-25.4 4.2-.7 8.6-.9 12.9-.9 14.8-.1 29.7 0 44.5-.1 13.9 0 21.1-7.5 20.9-21.6-.2-15 .1-30-.7-45-1.5-28.1 16-41 39.5-44.3 21.9-3 43.9-1.9 65.6 2.9 18.4 4 31.2 13.8 35.5 32.7.8 3.4 2.9 2.9 5.2 2.9 18.5-.3 37-.6 55.4 1.2 22.5 2.2 44.9 5.6 67 10.6 22.6 5.1 33 20.8 35.8 41.4 4.9 36.2 7 72.6 8.8 109 .4 13.2-.1 26.2-.1 39.2zm-72.4 3.2c-.5-5.6-1.3-11.2-3.2-16.6-4.6-13.2-19.1-20.1-32.4-15.3-9.8 3.6-18.2 16-18.1 26.6 0 3.4 2.2 2.3 3.7 2.1 16-1.4 31.6-.4 46.7 5.5 2.7 1 3.6.4 3.3-2.3z"
      ></path>
      <path
        fill="#5CB932"
        d="M53.9 105.6c28.8-28.5 57.4-56.9 86-85.2.3.3.7.5 1 .8-1 4.3-2.4 8.6-3 12.9-2 14.1-.5 28.3-.6 42.4 0 5.7.3 11.3.3 17 .1 6.3-1.3 7.7-7.5 7.8-17.7.3-35.3-.5-53 .4-5.9.3-11.5 1.8-17.1 3.4-1.8.6-3.6 1.4-6.1.5z"
      ></path>
                        </svg>
                    </div>

                    <div className="flex gap-2 col-start-1 col-end-4 row-start-2 row-end-3 self-end pt-2">
                        <div className="w-auto h-6 px-3 flex items-center text-white text-center my-auto rounded-xl text-[8px] bg-[#18181a]">
                            <p className="w-full">User interface</p>
                        </div>
                        <div className="w-auto h-6 px-3  flex items-center text-white text-center my-auto rounded-xl text-[8px] bg-[#18181a]">
                            <p className="w-full">User Research/flow</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 col-start-1 col-end-4 row-start-3 row-end-4">
                        <svg className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 24 24"
    >
      <g
        fill="#fff"
        fillOpacity="1"
        fillRule="nonzero"
        stroke="none"
        strokeDasharray="none"
        strokeDashoffset="0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeOpacity="1"
        clipRule="nonzero"
        color="#fff"
        colorInterpolation="sRGB"
        colorInterpolationFilters="linearRGB"
        colorRendering="auto"
        direction="ltr"
        display="inline"
        dominantBaseline="auto"
        fontFamily="sans-serif"
        fontSize="medium"
        fontStretch="normal"
        fontStyle="normal"
        fontVariant="normal"
        fontWeight="normal"
        imageRendering="auto"
        letterSpacing="normal"
        shapeRendering="auto"
        textAnchor="start"
        textRendering="auto"
        transform="translate(0 -290.65)"
        visibility="visible"
        wordSpacing="normal"
        writingMode="lr-tb"
      >
        <path
          d="M12 292.65c-5.511 0-10 4.49-10 10 0 5.511 4.489 10 10 10s10-4.489 10-10c0-5.51-4.489-10-10-10zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z"
          style={{
            lineHeight: "normal",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            isolation: "auto",
            mixBlendMode: "normal",
            solidColor: "#000000",
            solidOpacity: "1",
          }}
          baselineShift="baseline"
          display="inline"
          enableBackground="accumulate"
          opacity="1"
          overflow="visible"
          stopColor="#000"
          stopOpacity="1"
          textDecoration="none"
          vectorEffect="none"
        ></path>
        <path
          d="M12 296.65a1 1 0 00-1 1v4.97a1 1 0 00.295.708l3 2.98a1 1 0 001.414-.003 1 1 0 00-.004-1.414L13 302.203v-4.553a1 1 0 00-1-1z"
          style={{
            lineHeight: "normal",
            fontVariantLigatures: "normal",
            fontVariantPosition: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantAlternates: "normal",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: "normal",
            fontVariationSettings: "normal",
            WebkitTextIndent: "0",
            textIndent: "0",
            WebkitTextAlign: "start",
            textAlign: "start",
            WebkitTextDecorationLine: "none",
            textDecorationLine: "none",
            WebkitTextDecorationStyle: "solid",
            textDecorationStyle: "solid",
            WebkitTextDecorationColor: "#000000",
            textDecorationColor: "#000000",
            WebkitTextTransform: "none",
            textTransform: "none",
            WebkitTextOrientation: "mixed",
            textOrientation: "mixed",
            whiteSpace: "normal",
            shapePadding: "0",
            shapeMargin: "0",
            inlineSize: "0",
            isolation: "auto",
            mixBlendMode: "normal",
            solidColor: "#000000",
            solidOpacity: "1",
          }}
          baselineShift="baseline"
          display="inline"
          enableBackground="accumulate"
          opacity="1"
          overflow="visible"
          stopColor="#000"
          stopOpacity="1"
          textDecoration="none"
          vectorEffect="none"
        ></path>
      </g>
                        </svg>
                        <p className="text-gray-500 text-xs">Be in the first 28 applicants</p>
                    </div>

                    <div className="flex items-start relative col-start-1 col-end-3 row-start-4 row-end-5">
                        <svg className="w-8 h-8"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100"
      height="100"
      version="1.1"
      viewBox="-27 24 100 100"
      xmlSpace="preserve"
    >
      <circle cx="23" cy="74" r="50" fill="#F5EEE5"></circle>
      <defs>
        <circle id="SVGID_1_" cx="23" cy="74" r="50"></circle>
      </defs>
      <clipPath id="SVGID_2_">
        <use overflow="visible" xlinkHref="#SVGID_1_"></use>
      </clipPath>
      <path
        fill="#E6C19C"
        d="M38 99.9l27.9 7.7c3.2 1.1 5.7 3.5 7.1 6.6v9.8H-27v-9.8c1.3-3.1 3.9-5.5 7.1-6.6L8 99.9V85h30v14.9z"
        clipPath="url(#SVGID_2_)"
      ></path>
      <g clipPath="url(#SVGID_2_)">
        <defs>
          <path
            id="SVGID_3_"
            d="M38 99.9l27.9 7.7c3.2 1.1 5.7 3.5 7.1 6.6v9.8H-27v-9.8c1.3-3.1 3.9-5.5 7.1-6.6L8 99.9V85h30v14.9z"
          ></path>
        </defs>
        <clipPath id="SVGID_4_">
          <use overflow="visible" xlinkHref="#SVGID_3_"></use>
        </clipPath>
        <path
          fill="#E6A422"
          d="M-27 82H73v42H-27V82zm50 30c11 0 20-6.3 20-14s-9-14-20-14S3 90.3 3 98s9 14 20 14z"
          clipPath="url(#SVGID_4_)"
        ></path>
        <path
          fill="#D4B08C"
          d="M23 102c-1.7 0-3.9-.4-5.4-1.1-1.7-.9-8-6.1-10.2-8.3-2.8-3-4.2-6.8-4.6-13.3-.4-6.5-2.1-29.7-2.1-35 0-7.5 5.7-19.2 22.1-19.2h.2c16.5.1 22.1 11.7 22.1 19.2 0 5.3-1.7 28.5-2.1 35-.4 6.5-1.8 10.2-4.6 13.3-2.1 2.3-8.4 7.4-10.2 8.3-1.3.7-3.5 1.1-5.2 1.1z"
          clipPath="url(#SVGID_4_)"
        ></path>
        <path
          fill="#D98C21"
          d="M23 82C10.3 82 0 89.4 0 98.5S10.3 115 23 115s23-7.4 23-16.5S35.7 82 23 82zm0 29c-10.5 0-19-6-19-13.5S12.5 84 23 84s19 6 19 13.5S33.5 111 23 111z"
          clipPath="url(#SVGID_4_)"
        ></path>
      </g>
      <path
        fill="#F2CEA5"
        d="M23 98c-1.5 0-3.5-.3-4.8-.9-1.6-.7-7.2-4.6-9.1-6.3-2.5-2.3-3.8-5.1-4.2-10S3 58.5 3 54.5C3 48.8 8.1 40 23 40s20 8.8 20 14.5c0 4-1.5 21.5-1.9 26.4s-1.6 7.7-4.2 10c-1.9 1.7-7.6 5.6-9.1 6.3-1.3.5-3.3.8-4.8.8z"
      ></path>
      <path
        fill="#A3705F"
        d="M30 85.5c-1.9 2-5.2 3-8.1 2.4-2.7-.6-4.7-2-5.7-4.3L30 85.5z"
      ></path>
      <path
        fill="none"
        stroke="#A3705F"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M30 85.5c-1.9 2-5.2 3-8.1 2.4-2.7-.6-4.7-2-5.7-4.3L30 85.5z"
      ></path>
      <defs>
        <path id="SVGID_5_" d="M7 65H38V70H7z"></path>
      </defs>
      <clipPath id="SVGID_6_">
        <use overflow="visible" xlinkHref="#SVGID_5_"></use>
      </clipPath>
      <circle
        cx="32"
        cy="69"
        r="2"
        fill="#291F21"
        clipPath="url(#SVGID_6_)"
      ></circle>
      <circle
        cx="14"
        cy="69"
        r="2"
        fill="#291F21"
        clipPath="url(#SVGID_6_)"
      ></circle>
      <path
        fill="none"
        stroke="#CC9872"
        strokeWidth="2"
        d="M8 66s1.1-3 6.1-3c3.4 0 5.4 1.5 6.4 3"
      ></path>
      <path
        fill="none"
        stroke="#BB8660"
        strokeWidth="2"
        d="M38.1 66S37 63 32 63c-4.8 0-7 3-7 5v9"
      ></path>
      <path
        fill="#452228"
        d="M41.8 72.2s.8-6.3 3.7-7.2c.4-1.8 1.5-7 1.5-9.9s-.3-5.7-1.9-8.1c-1.8-2.6-5.6-4.1-7.6-4.1-2.3 1.4-7.7 4.6-9.4 6.5-.9 1 .4 1.8.4 1.8s1.2-.5 1.7-.6c2.5-.7 8-1.2 9.7 1.3C42 54.9 42 63.7 42 65c0 1.2-.2 7.2-.2 7.2z"
      ></path>
      <path
        fill="#6B363E"
        d="M.5 65c2.9 1 3.7 7.2 3.7 7.2S4 66.2 4 65c0-1.6.2-9.1 3.4-12.7 3.6-4 8.4-5.3 11.1-3.5 1.4.9 6.1 5.5 11.1 1.7 3-2.3 8.5-7.5 8.5-7.5s-2.9-8.9-16.1-7.9c-5.6.5-11.8-.9-11.8-.9s-.1 2.5.9 3.8C2.8 40.4.1 46.4-.7 51c-.2.9-.3 1.8-.3 2.7v1.4C-1 58 .1 63.1.5 65z"
      ></path>
                        </svg>

                        <svg className="w-8 h-8 absolute left-7 border-black border-2 rounded-full"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      viewBox="-208.5 20.5 100 100"
      xmlSpace="preserve"
    >
      <circle cx="-158.5" cy="70.5" r="50" fill="#F5EEE5"></circle>
      <defs>
        <circle id="SVGID_1_" cx="-158.5" cy="70.5" r="50"></circle>
      </defs>
      <clipPath id="SVGID_2_">
        <use overflow="visible" xlinkHref="#SVGID_1_"></use>
      </clipPath>
      <path
        fill="#D4B08C"
        d="M-143.5 96.4l27.9 7.7c3.2 1.1 5.7 3.5 7.1 6.6v9.8h-100v-9.8c1.3-3.1 3.9-5.5 7.1-6.6l27.9-7.7V81.5h30v14.9z"
        clipPath="url(#SVGID_2_)"
      ></path>
      <g clipPath="url(#SVGID_2_)">
        <defs>
          <path
            id="SVGID_3_"
            d="M-143.5 96.4l27.9 7.7c3.2 1.1 5.7 3.5 7.1 6.6v9.8h-100v-9.8c1.3-3.1 3.9-5.5 7.1-6.6l27.9-7.7V81.5h30v14.9z"
          ></path>
        </defs>
        <clipPath id="SVGID_4_">
          <use overflow="visible" xlinkHref="#SVGID_3_"></use>
        </clipPath>
        <path
          fill="#1E1F24"
          d="M-158.3 100.5h-7.2l-8-4.1-35-.9v25h100.4v-25h-38.2l-4.8 5h-7.2z"
          clipPath="url(#SVGID_4_)"
        ></path>
      </g>
      <path
        fill="#F2CEA5"
        d="M-158.5 94.5c-1.5 0-3.5-.3-4.8-.9-1.6-.7-7.2-4.6-9.1-6.3-2.5-2.3-3.8-5.1-4.2-10s-1.9-22.4-1.9-26.4c0-5.7 5.1-14.5 19.9-14.5 14.8 0 19.9 8.8 19.9 14.5 0 4-1.5 21.5-1.9 26.4s-1.6 7.7-4.2 10c-1.9 1.7-7.6 5.6-9.1 6.3-1.1.6-3.1.9-4.6.9z"
      ></path>
      <defs>
        <path
          id="SVGID_5_"
          d="M-158.5 94.5c-1.5 0-3.5-.3-4.8-.9-1.6-.7-7.2-4.6-9.1-6.3-2.5-2.3-3.8-5.1-4.2-10s-1.9-22.4-1.9-26.4c0-5.7 5.1-14.5 19.9-14.5 14.8 0 19.9 8.8 19.9 14.5 0 4-1.5 21.5-1.9 26.4s-1.6 7.7-4.2 10c-1.9 1.7-7.6 5.6-9.1 6.3-1.1.6-3.1.9-4.6.9z"
        ></path>
      </defs>
      <clipPath id="SVGID_6_">
        <use overflow="visible" xlinkHref="#SVGID_5_"></use>
      </clipPath>
      <path
        fill="#2D2E35"
        d="M-147.5 81.5c-1-1.2-3-2.9-6.3-3s-2.5 1.9-4.7 2h-.1-.1c-2.1-.1-1.3-2-4.7-2s-5.4 1.7-6.3 3l-8-11v27h38.2v-27l-8 11zm-7 7c-1.1-.1-1.7-.4-2-.8 0-.6-.4-1.3-2.1-1.2-1.7-.1-2 .6-2.1 1.2-.3.4-.9.8-2 .8-3.8-.2-5-2.7-5-4.5s1.5-2.5 5-2.5c2.5 0 1.7.9 4 1h.2c2.3 0 1.5-1 4-1 3.5 0 5 .7 5 2.5s-1.2 4.3-5 4.5z"
        clipPath="url(#SVGID_6_)"
      ></path>
      <path
        fill="#A3705F"
        d="M-155.5 85.5h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1z"
      ></path>
      <path
        fill="#262626"
        d="M-149.5 67.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-18 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
      ></path>
      <path
        fill="#CC9872"
        d="M-161.9 64c-.5-.8-1.9-2.5-5.5-2.5-4.1 0-5.1 2.3-5.1 2.4l-1.9-.7c.1-.1 1.4-3.6 7-3.6 4.6 0 6.6 2.4 7.2 3.5l-1.7.9z"
      ></path>
      <path
        fill="#BB8660"
        d="M-157.5 74.5v-9c0-2.5 2.5-5.9 8-6 5.5 0 6.9 3.5 7 3.6l-1.9.7c0-.1-1-2.3-5.1-2.4-4.1 0-6 2.4-6 4v9l-2 .1z"
      ></path>
      <path
        fill="#D4B08C"
        d="M-173.4 94.9l1.7-2.8 12.9 5.9 13.1-4.9 2.2 2.2v6.5s-10.8 10.6-15 10.7c-4.2 0-14.9-11.5-14.9-11.5v-6.1z"
      ></path>
      <g>
        <defs>
          <circle id="SVGID_7_" cx="-158.5" cy="70.5" r="50"></circle>
        </defs>
        <clipPath id="SVGID_8_">
          <use overflow="visible" xlinkHref="#SVGID_7_"></use>
        </clipPath>
        <path
          fill="#6B363E"
          d="M-143.5 96.4v5.1c0 14.1-8.5 19.7-8.5 19.7h-1.8-10.5s-9.2-6.7-9.2-18.7v-6.1c1 1 2.6 9.1 15.3 9.1s13.7-8.1 14.7-9.1z"
          clipPath="url(#SVGID_8_)"
        ></path>
      </g>
      <path fill="#E1BC90" d="M-167.4 50.5H-149.5V52.5H-167.4z"></path>
      <path fill="#E1BC90" d="M-163.4 54.5H-153.5V56.5H-163.4z"></path>
      <path
        fill="#2D2E35"
        d="M-139.4 65.5s.1-13.1-5.5-20.3c-1.3 1.2-3.5 2.2-6.5 2.2s-5.9-1.1-9.3-2.8-5.3-3.1-8.3-3.4c-2 .7-8.5 5.9-8.5 14.9s.2 12.3.2 12.3-4.2-5.7-4.2-14.3 4.8-14.8 10.7-15c2.4-2.2 7-3.8 11.9-3.8s14.5 2.4 18.5 9.2c5.9 9.9 1 21 1 21z"
      ></path>
                        </svg>

                        <div className="flex justify-center pt-1 text-black bg-white w-8 h-8 absolute left-[55px] border-black border-2 rounded-full">
                            <p className="text-black text-sm font-bold">+2</p>
                        </div>

                    </div>

                    <div className="w-full h-full flex items-center justify-start col-start-3 col-end-4 row-start-4 row-end-5 pb-6">
                        <p className="text-[#8c8c8d] text-[13px]">6 Hours Ago</p>
                    </div>
                </div>
            </div>

            <div id="categories">

                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-xl">Categories</h2>
                    <span className="text-sm font-semibold">View All</span>
                </div>

                <div className="flex w-full gap-2">
                    <Cards_categories category={'Design'} number_jobs={'3.2k'} bg_color={'bg-[#a39ac4]'}>
                        <svg className="w-6 h-6"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
>
<path
stroke="#fff"
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="1.5"
d="M19 8.5l-2-3h-2.5l1 3-3.5 10 7-10z"
clipRule="evenodd"
></path>
<path
fill="#fff"
d="M4.376 8.084a.75.75 0 001.248.832l-1.248-.832zM7 5.5v-.75a.75.75 0 00-.624.334L7 5.5zm2.5.75a.75.75 0 000-1.5v1.5zM5.614 8.07a.75.75 0 00-1.228.86l1.228-.86zM12 18.5l-.614.43a.75.75 0 001.322-.678L12 18.5zM9.208 8.252a.75.75 0 10-1.416.496l1.416-.496zM5 7.75a.75.75 0 000 1.5v-1.5zm3.5 1.5a.75.75 0 000-1.5v1.5zm1.711-3.513a.75.75 0 10-1.423-.474l1.423.474zM7.788 8.263a.75.75 0 101.424.474l-1.424-.474zM9.5 4.75a.75.75 0 000 1.5v-1.5zm5 1.5a.75.75 0 000-1.5v1.5zm-6 1.5a.75.75 0 000 1.5v-1.5zM19 9.25a.75.75 0 000-1.5v1.5zM5.624 8.916l2-3-1.248-.832-2 3 1.248.832zM7 6.25h2.5v-1.5H7v1.5zM4.386 8.93l7 10 1.228-.86-7-10-1.228.86zm8.322 9.322l-3.5-10-1.416.496 3.5 10 1.416-.496zM5 9.25h3.5v-1.5H5v1.5zm3.788-3.987l-1 3 1.424.474 1-3-1.424-.474zm.712.987h5v-1.5h-5v1.5zm-1 3H19v-1.5H8.5v1.5z"
></path>
                        </svg>
                    </Cards_categories>

                    <Cards_categories category={'Network'} number_jobs={'2.8k'} bg_color={'bg-[#d2f6b6]'}>
                        <svg className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <path fill="none" d="M0 0H256V256H0z"></path>
      <path d="M248 128a56 56 0 01-95.6 39.6l-.3-.4-60-67.6A39.5 39.5 0 0064 88a40 40 0 100 80 39.5 39.5 0 0028.1-11.6l8.5-9.6a8 8 0 0112 10.6l-8.7 9.8-.3.4a56 56 0 01-79.2 0A56 56 0 0164 72a55.5 55.5 0 0139.6 16.4l.3.4 60 67.6A39.5 39.5 0 00192 168a40 40 0 100-80 39.5 39.5 0 00-28.1 11.6l-8.5 9.6a8 8 0 01-12-10.6l8.7-9.8.3-.4A56 56 0 01248 128z"></path>
                        </svg>
                    </Cards_categories>

                    <Cards_categories category={'Testing'} number_jobs={'4.3k'} bg_color={'bg-[#afb119]'}>
                        <svg className="fill-white w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
    >
      <g>
        <path d="M134.986 278.561H161.54299999999998V304.941H134.986z"></path>
        <path d="M134.986 359.003H161.54299999999998V385.38599999999997H134.986z"></path>
        <path d="M134.986 117.671H161.54299999999998V144.056H134.986z"></path>
        <path d="M134.986 198.113H161.54299999999998V224.498H134.986z"></path>
        <path d="M381.809 99.795a4.685 4.685 0 01-4.686-4.686V46.168H81.044l.064 419.664h349.849V99.795h-49.148zm-188.642 17.444h125.724a4.686 4.686 0 010 9.372H193.167a4.687 4.687 0 010-9.372zm-22.253 272.832a4.686 4.686 0 01-4.685 4.686h-35.928a4.687 4.687 0 01-4.686-4.686v-35.754a4.686 4.686 0 014.686-4.686h35.928a4.686 4.686 0 014.685 4.686v35.754zm0-80.445a4.686 4.686 0 01-4.685 4.686h-35.928a4.687 4.687 0 01-4.686-4.686v-35.751a4.686 4.686 0 014.686-4.686h35.928a4.686 4.686 0 014.685 4.686v35.751zm0-80.442a4.685 4.685 0 01-4.685 4.685h-35.928a4.686 4.686 0 01-4.686-4.685v-35.756a4.686 4.686 0 014.686-4.686h35.928a4.686 4.686 0 014.685 4.686v35.756zm0-80.442a4.686 4.686 0 01-4.685 4.686h-35.928a4.686 4.686 0 01-4.686-4.686v-35.756a4.686 4.686 0 014.686-4.686h35.928a4.686 4.686 0 014.685 4.686v35.756zm201.861 246.019H193.167a4.687 4.687 0 010-9.372h179.608a4.686 4.686 0 010 9.372zm-184.294-31.497a4.686 4.686 0 014.686-4.686h125.724a4.686 4.686 0 010 9.372H193.167a4.687 4.687 0 01-4.686-4.686zm184.294-48.951H193.167a4.687 4.687 0 010-9.372h179.608a4.686 4.686 0 010 9.372zm-184.294-31.495a4.686 4.686 0 014.686-4.686h125.724a4.686 4.686 0 010 9.372H193.167a4.687 4.687 0 01-4.686-4.686zm184.294-48.949H193.167a4.686 4.686 0 110-9.371h179.608a4.685 4.685 0 110 9.371zm-184.294-31.498a4.686 4.686 0 014.686-4.686h125.724a4.685 4.685 0 110 9.372H193.167a4.688 4.688 0 01-4.686-4.686zm184.294-48.947H193.167a4.687 4.687 0 010-9.372h179.608a4.686 4.686 0 010 9.372z"></path>
        <path d="M386.494 52.757L386.494 90.424 424.34 90.424z"></path>
      </g>
                        </svg>
                    </Cards_categories>

                </div>

            </div>
        </main>
    )
}

