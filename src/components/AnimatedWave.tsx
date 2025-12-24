import { type FC } from 'react'

const AnimatedWave: FC = () => {
    return (
        <svg
            width="100%" // Full width
            height="200px" // Fixed height
            viewBox="0 0 1440 200" // Scaled coordinate space
            preserveAspectRatio="none" // Stretch across width
            xmlns="http://www.w3.org/2000/svg"
            className="transition delay-150 duration-300 ease-in-out"
        >
            <style>
                {`
          .path-0 {
            animation: pathAnim0 2s linear infinite;
          }

          @keyframes pathAnim0 {
            0% {
              d: path("M 0,200 L 0,80 C 120,90 240,100 360,96 C 480,92 600,74 720,80 C 840,86 960,116 1080,112 C 1200,108 1320,88 1440,80 L 1440,200 L 0,200 Z");
            }
            50% {
              d: path("M 0,200 L 0,80 C 100,100 220,120 340,108 C 460,96 580,52 700,64 C 820,76 940,124 1060,120 C 1180,116 1310,98 1440,80 L 1440,200 L 0,200 Z");
            }
            100% {
              d: path("M 0,200 L 0,80 C 120,90 240,100 360,96 C 480,92 600,74 720,80 C 840,86 960,116 1080,112 C 1200,108 1320,88 1440,80 L 1440,200 L 0,200 Z");
            }
          }
        `}
            </style>

            <defs>
                <linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%">
                    <stop offset="5%" stopColor="#155dfc" />
                    <stop offset="95%" stopColor="#9810fa" />
                </linearGradient>
            </defs>

            <path
                d="M 0,200 L 0,80 C 120,90 240,100 360,96 C 480,92 600,74 720,80 C 840,86 960,116 1080,112 C 1200,108 1320,88 1440,80 L 1440,200 L 0,200 Z"
                stroke="none"
                fill="url(#gradient)"
                fillOpacity={1}
                className="path-0 transition-all delay-150 duration-300 ease-in-out"
                transform="rotate(-180 720 100)"
            />
        </svg>
    )
}

export default AnimatedWave
