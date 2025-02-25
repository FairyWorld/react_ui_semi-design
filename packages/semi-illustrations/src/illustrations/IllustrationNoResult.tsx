import * as React from 'react';
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={200}
            height={200}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable={false}
            aria-hidden={true}
            {...props}
        >
            <rect width={200} height={200} fill="transparent" />
            <path d="M100.75 191.99c6.21-.56 8.7-9.2 10.36-15.06l4.97 15.06h-15.33Z" fill="black" stroke="black" />
            <path
                d="M103.97 62.97c-3.94-5.03-1.95-13.81 7.35-23.03 12.98-11.88 25.53-9.25 26.12-8.98.58.27 13 9.06 24.82 21.3C174.08 64.51 186.46 75 186.6 91.8c.16 16.8-17.25 22.89-30.03 22.96-12.77.08-41.27-.28-46.75-1.2-3.43 4.51-8.9 9.38-10.91 10.44 4.23 3.63 19.32 18.98 21.13 22.22 1.82 3.24 9.72 14.52 6.1 32.28-1.67 8.13-8.18 12.3-14.9 13.6 0 0-9.2-.04-12.33 0-7.78.14-88.02 0-90.35 0-2.34 0-3.01-2.09 0-8.19 3-6.1 14.09-25.37 19.9-28.8 2.3-1.31 7.53 2.06 8.62 2.85 1.03.73 2.03 1.59 3.45 1.47 1.42-.12 8.84-.15 11.2-.07-4.28-3-20.03-17.69-21.95-24.83-1.53-5.68.3-8.96 1.11-9.72-8.53-4.99-17.2-14.89-13.8-29.6.94-4.13 3.52-8.43 5.44-9.67 3.62-2.33 15.89-3.5 23.32-4.19 32.7-2.98 107.19-1.9 109.45-1.88-3.12-2.38-15.2-15.93-15.48-16.39-.77 2.21-3.83 5.02-6.1 4.7-2.03-.27-3.16-3.45-.82-8.47-.8.82-1.64 1.6-2.49 2.3-1.24 1-2.8 1.21-3.37 0-.5-1.08-.33-3.13.82-5.85a16.39 16.39 0 0 1-3.56 2.69c-3.69 1.86-4.6-5.24.34-11.28-7.1 3.47-9.12 6.3-10.88 10.47-1.09 2.56-1.47 4.91-4.46 6.24-2.3 1.02-4.22.51-5.33-.9Z"
                fill="white"
            />
            <path
                d="M124.64 47.17c-7.1 3.47-9.12 6.3-10.88 10.47-1.09 2.56-1.47 4.91-4.46 6.24-2.3 1.02-4.22.51-5.33-.9-3.94-5.04-1.95-13.82 7.35-23.04 12.98-11.88 25.53-9.25 26.12-8.98.58.27 13 9.06 24.82 21.3C174.08 64.51 186.46 75 186.6 91.8c.16 16.8-17.25 22.89-30.03 22.96-12.77.08-41.27-.28-46.75-1.2m14.82-66.39c7-2.6 6.64-4.97 6.23-5.44-.42-.47-4.64 2.74-6.23 5.44Zm0 0c-4.94 6.04-4.03 13.14-.34 11.28 4.85-2.46 12.09-12.78 11.64-13.12-.31-.25-2.07.74-5.32 5.5-3.54 5.18-4.34 9.12-3.58 10.77.57 1.22 2.13 1.01 3.37 0 4.8-3.9 9.41-10.88 9.16-11.06-.24-.17-1.84.45-5.6 6.77-3.68 6.17-2.54 10.16-.26 10.48 2.28.31 5.34-2.5 6.11-4.7.28.45 12.36 14 15.48 16.38m-45.48 34.1c-3.43 4.5-8.9 9.38-10.91 10.43m10.91-10.43c3.59-4.92 6.76-9.94 8.31-15.3M98.91 124c4.23 3.63 19.32 18.98 21.13 22.22 1.82 3.24 9.72 14.52 6.1 32.28-1.67 8.13-8.18 12.3-14.9 13.6 0 0-9.2-.04-12.33 0-7.78.14-88.02 0-90.35 0-2.34 0-3.01-2.09 0-8.19 3-6.1 14.09-25.37 19.9-28.8 2.3-1.31 7.53 2.06 8.62 2.85 1.03.73 2.03 1.59 3.45 1.47 1.42-.12 8.84-.15 11.2-.07M98.92 124H88.1m-36.36 35.36c3.05.1 9.6-.5 11.84 1.54 2.05 1.85.56 4.6-2.53 3.84-3.64-.88-8.13-4.55-9.31-5.38Zm0 0c-4.29-3-20.04-17.69-21.96-24.83-1.53-5.68.3-8.96 1.11-9.72m0 0a188.9 188.9 0 0 0 19.37 8.91m-19.37-8.9c-8.53-5-17.2-14.9-13.8-29.62.94-4.12 3.52-8.42 5.44-9.66 3.62-2.33 15.89-3.5 23.32-4.19 32.7-2.98 107.19-1.9 109.45-1.88M50.26 133.72c9.37 3.55 19.2 6.26 22.38 9.9 3.18 3.64-.76 8.67-1.91 12.75-.3 1.03-.63 2.6-.27 3.5.45 1.13 1.78 1.36 3.75-.18 3.52-2.74 6.65-9.56 7.3-11.57.65-2-4.44 8.27-4.98 12.8-.54 4.54 3.49 3.8 6.2 0a35.68 35.68 0 0 0 5.02-10.52c.21-.98-2.74 5.44-3.6 9.3-.24 1.03-.85 3.47 0 4.44.95 1.1 2.87.81 5.07-2.73a42.67 42.67 0 0 0 4.6-11.01c.22-1.3-3.05 7.3-3.55 11.5-.34 2.94.67 4.38 4.18 0 1.99-2.48 3.44-6.28 4.33-10.12m-48.52-18.06c-1.97 2.72-4.25 5.3-10.8 6.32m25.83-35.93c-5.71-4.14-8.97-4.56-11.46-4.56-3.64 0-4.48 1.95-1.16 3.2 3.32 1.24 9.35 1.36 12.62 1.36Zm0 0h6.91m-6.91 0c5.1 3.71 14.72 11.4 22.8 19.9m67.21-44.54c2.26.02 6.14.7 5.8 3.1-.21 1.56-4.71-2.12-5.8-3.1ZM88.1 124c.84.88 1.66 1.77 2.46 2.67 1.94 2.18 8.47 9.6 9.12 14.15.37 2.58.06 6.79-.9 10.96m0 0c3.18 2.92 7.34 8.24 8.24 14.17.9 5.93 0 13.47-9.4 21.35"
                stroke="#515151"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m115.94 192.13-5.17-15.67-.13.44c-.83 2.93-1.86 6.53-3.45 9.48-1.6 2.95-3.75 5.2-6.78 5.47v.28h15.53Z"
                fill="#515151"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m122.42 137.35 5.09 9.48h-7.45l-5.1-9.48h7.46Z"
                fill="#C6CACD"
            />
            <path d="M104.1 141.48h33.95l14.82 27.43h-33.95l-14.82-27.43Z" fill="white" stroke="#515151" />
            <rect x={139.521} y={155.135} width={43.5958} height={38.8611} fill="#E6E8EA" stroke="#515151" />
            <path d="m139.87 154.7 9.28-16.85h43.46l-9.29 16.84h-43.45Z" fill="#E6E8EA" stroke="#515151" />
            <rect x={111.223} y={155.135} width={28.1841} height={38.8611} fill="#E6E8EA" stroke="#515151" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m166.56 154.91 3.9-6.97h-6.13l-3.6 6.42h-.3v13.38h6.13V154.9Z"
                fill="#515151"
            />
            <circle cx={45.5788} cy={38.675} r={33.1711} fill="var(--semi-color-primary-light-default)" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.85 47.66a3.24 3.24 0 0 0 2.46-3.87c-.28-1.22.27-2.41 1.14-3.3 3.03-3.13 5.08-7.79 3.66-12.78a11.24 11.24 0 0 0-5.43-6.6c-2.9-1.6-6.47-1.9-9.87-.87l-.17.08c-5.78 1.96-8.3 7.05-8.26 11.96.02 2.05 2.12 3.2 4.09 2.64 2-.57 2.97-2.8 3.63-4.78a4.21 4.21 0 0 1 2.93-2.75 5 5 0 0 1 4.16.26c.88.64 1.58 1.35 1.78 2.28.84 2.47-.83 5.2-2.74 6.42-2.68 1.68-3.03 5.48-2.46 8.8.36 2.1 2.55 3.16 4.61 2.63l.47-.12Zm.02 3.16a4.1 4.1 0 1 1 2.53 7.8 4.1 4.1 0 0 1-2.53-7.8Z"
                fill="var(--semi-color-primary)"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m98.63 82.58-.1-.01-.04.1c-.79 2.43-1.66 5.24-1.52 8.04.14 2.81 1.3 5.61 4.53 8 3.17 2.35 6.58 1.78 9.19-.15a10.98 10.98 0 0 0 4.42-8.42c0-1.25-.82-2.32-2.05-3.22a18.08 18.08 0 0 0-4.72-2.27 46.7 46.7 0 0 0-9.7-2.07Zm17.18 21.69c-1.33 3.1-4.63 7.68-6.11 9.58l.11-.14 5.24.37.04-.08c.23-.5.41-1.2.55-2 .14-.8.23-1.73.3-2.67.14-1.87.16-3.8.14-5.01l-.27-.05Zm-84.95 20-.16-.1-1.34 5.04.11.05c4.4 1.9 14.11 4.05 21.1 4.6l.05-.26c-7.77-3.04-16.19-7.07-19.76-9.33Z"
                fill="#515151"
            />
            <path d="M71.03 48.99c5.25 1.23 16.12 6.4 17.61 17.15" stroke="#515151" />
            <path
                d="M108.08 96.58a10.37 10.37 0 1 1 0-20.74 10.37 10.37 0 0 1 0 20.74Z"
                fill="white"
                stroke="#515151"
                strokeMiterlimit={10}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M110.8 85.86a.42.42 0 0 0-.56-.18c-1.42.7-2.96.88-3.53.88a.42.42 0 1 0 0 .84c.67 0 2.35-.2 3.9-.98.2-.1.29-.35.19-.56Zm-2.66 3.52a.88.88 0 1 1 1.76-.13.88.88 0 0 1-1.77.13Zm7.1-.95a.88.88 0 1 0 .13 1.76.88.88 0 0 0-.13-1.76Z"
                fill="#515151"
            />
            <path
                d="M100.58 87.31s-5.73-6.61-.66-11.03c6.62-5.95 21.18-.44 21.18-.44s-.22 7.06-4.85 7.94c-4.42.67-12.58-2.42-12.58-2.42l-3.09 5.95Z"
                fill="#515151"
            />
            <path
                d="M98.38 88.64a2.65 2.65 0 1 1 0-5.3 2.65 2.65 0 0 1 0 5.3Z"
                fill="white"
                stroke="#515151"
                strokeMiterlimit={10}
            />
        </svg>
    );
}
export default SvgComponent;
