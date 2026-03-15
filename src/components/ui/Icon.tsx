type IconName =
  | "snowflake"
  | "flame"
  | "wind"
  | "clipboard-check"
  | "ship"
  | "tractor"
  | "zap"
  | "phone"
  | "mail"
  | "map-pin"
  | "clock"
  | "shield"
  | "users"
  | "award"
  | "calendar"
  | "wrench"
  | "truck"
  | "chevron-down"
  | "external-link"
  | "alert-circle"
  | "leaf"
  | "battery";

type Props = {
  name: IconName;
  size?: number;
  className?: string;
};

const PATHS: Record<IconName, string> = {
  snowflake:
    "M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07",
  flame:
    "M12 2c.5 2.5 2 4.5 2 6a4 4 0 11-8 0c0-1.5 1.5-3.5 2-6 1 2 2 3 4 3s3-1 4-3z M12 22c-4 0-7-2.5-7-7 0-2 1-4 3-6 1 2 2.5 3 4 3s3-1 4-3c2 2 3 4 3 6 0 4.5-3 7-7 7z",
  wind: "M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1013 16H2m3.59-3.41A2 2 0 106 10h14",
  "clipboard-check":
    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  ship: "M2 20l.955-4.774A1 1 0 013.937 14.5H20.063a1 1 0 01.982.726L22 20M4 14V8a2 2 0 012-2h12a2 2 0 012 2v6M12 2v4",
  tractor:
    "M5 17a2 2 0 100 4 2 2 0 000-4zm0 0V9a1 1 0 011-1h4l2 3h4a1 1 0 011 1v5m-6 0a3 3 0 100 6 3 3 0 000-6zm0 0h6",
  zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8",
  phone:
    "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z",
  mail: "M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm16 2l-8 5-8-5",
  "map-pin":
    "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 7a3 3 0 100 6 3 3 0 000-6z",
  clock: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 4v6l4 2",
  shield:
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  users:
    "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zm14 14v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  award:
    "M12 15l-3.5 5.5 1-4.5-3.5-2 4.5-.5L12 9l1.5 4.5 4.5.5-3.5 2 1 4.5z M12 2a7 7 0 100 14 7 7 0 000-14z",
  calendar:
    "M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4M8 2v4M3 10h18",
  wrench:
    "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  truck:
    "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 18.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18.5 18.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  "chevron-down": "M6 9l6 6 6-6",
  "external-link":
    "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3",
  "alert-circle":
    "M12 2a10 10 0 100 20 10 10 0 000-20zM12 8v4m0 4h.01",
  leaf: "M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75",
  battery:
    "M6 7h11a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2zm15 3v4",
};

export default function Icon({ name, size = 24, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}

export type { IconName };
