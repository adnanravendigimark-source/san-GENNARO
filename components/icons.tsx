// Hand-drawn, dependency-free line icons (24x24, stroke-based)
// All accept a className so they can be sized/colored with Tailwind.

type IconProps = { className?: string };

export function ShieldCheckIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.6}>
      <path
        d="M12 3.5 18.5 6v5.2c0 4.2-2.8 7.5-6.5 9.3-3.7-1.8-6.5-5.1-6.5-9.3V6L12 3.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12.3 11.2 14.5 15.3 10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ClockPayIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.6}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CalendarIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.6}>
      <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17" strokeLinecap="round" />
      <path d="M8 3.5v4M16 3.5v4" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.8}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" strokeLinecap="round" />
    </svg>
  );
}

export function UserIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function PlayCircleIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.12" />
      <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="currentColor" />
    </svg>
  );
}

export function AncientChurchIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M6 28V16C6 10.477 10.477 6 16 6C21.523 6 26 10.477 26 16V28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 28V18C11 15.239 13.239 13 16 13C18.761 13 21 15.239 21 18V28" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 2V6M13.5 4H18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 28H28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function StunningMosaicIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="5" y="5" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 5V27M5 16H27" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="10.5" cy="10.5" r="1.5" fill="currentColor" />
      <circle cx="21.5" cy="10.5" r="1.5" fill="currentColor" />
      <circle cx="10.5" cy="21.5" r="1.5" fill="currentColor" />
      <circle cx="21.5" cy="21.5" r="1.5" fill="currentColor" />
      <circle cx="16" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function ExpertGuidesIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 4L7 7.5V15C7 20.5 10.8 25.5 16 27.5C21.2 25.5 25 20.5 25 15V7.5L16 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 15.5L14.8 18.2L20 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RefundIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.6}>
      <path
        d="M4 10h9.5a5.5 5.5 0 0 1 5.5 5.5v.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 6 4 10l4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LockIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.6}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7.5a4 4 0 0 1 8 0V11" strokeLinecap="round" />
      <circle cx="12" cy="15.3" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TicketIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.6}>
      <path
        d="M4 8.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.1a2 2 0 1 0 0 4.8V15.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1.1a2 2 0 1 0 0-4.8V8.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 7v10" strokeDasharray="1.6 2" strokeLinecap="round" />
    </svg>
  );
}

export function HeadsetIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.6}>
      <path d="M4.5 14.5v-2a7.5 7.5 0 0 1 15 0v2" strokeLinecap="round" />
      <rect x="3" y="14" width="3.2" height="5.2" rx="1.4" />
      <rect x="17.8" y="14" width="3.2" height="5.2" rx="1.4" />
      <path d="M17.8 19.2v.3a2.5 2.5 0 0 1-2.5 2.5h-2" strokeLinecap="round" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2.5 15 9.1l7.2.7-5.4 4.8 1.6 7.1L12 18l-6.4 3.7 1.6-7.1L1.8 9.8l7.2-.7L12 2.5Z" />
    </svg>
  );
}

export function MailIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.6}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4.5 7 12 13l7.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BriefcaseIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.6}>
      <rect x="3.5" y="8" width="17" height="11" rx="2" />
      <path d="M8.5 8V6.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V8" strokeLinecap="round" />
      <path d="M3.5 13h17" />
    </svg>
  );
}

export function CatacombChurchIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Outer arched facade silhouette */}
      <path
        d="M6 38V18C6 9.163 13.163 2 22 2C30.837 2 38 9.163 38 18V38H6Z"
        fill="#C9A87C"
      />
      {/* Cross on roof apex */}
      <path d="M22 0V4M19.5 2H24.5" stroke="#9E7B54" strokeWidth="1.6" strokeLinecap="round" />
      {/* 3 Inner white arch portal cutouts */}
      <path d="M18.5 38V18C18.5 16.067 20.067 14.5 22 14.5C23.933 14.5 25.5 16.067 25.5 18V38H18.5Z" fill="#FFFFFF" />
      <path d="M10.5 38V24C10.5 22.343 11.843 21 13.5 21C15.157 21 16.5 22.343 16.5 24V38H10.5Z" fill="#FFFFFF" />
      <path d="M27.5 38V24C27.5 22.343 28.843 21 30.5 21C32.157 21 33.5 22.343 33.5 24V38H27.5Z" fill="#FFFFFF" />
    </svg>
  );
}
