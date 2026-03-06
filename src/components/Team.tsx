"use client";

import { useEffect, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

type SocialKind = "facebook" | "twitter" | "github" | "instagram" | "linkedin";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
  socialLinks: Partial<Record<SocialKind, string>>;
};

const teamMembers: TeamMember[] = [
  {
    name: "Mr. Vichet Kao",
    role: "Founder of IntelliSched",
    image: "/profile/Kao Vichet.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/vichet-kao/",
      github: "https://github.com/net-specter",
    },
  },
  {
    name: "Mr. Bunleap Thay",
    role: "Project Analyst",
    image: "/profile/Thay Bunleap.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/thay-bunleap-938a39329/",
      github: "https://github.com/CyLeap",
    },
  },
  {
    name: "Mr. Sokhom Kim",
    role: "Developer Lead",
    image: "/profile/Kim Sokhom.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kimsokhom/",
      github: "https://github.com/KimsokhomZz",
    },
  },
  {
    name: "Mr. Samnang Kong",
    role: "Backend Developer",
    image: "/profile/Kong Samnang.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/samnang-kong-671722331/",
      github: "https://github.com/SamnangKong426",
    },
  },
  {
    name: "Mr. Sreanghour Hy",
    role: "Frontend Developer",
    image: "/profile/Hy Sreanghour.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/hy-sreanghour-37b878390/",
      github: "https://github.com/Sreanghourhy",
    },
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function SocialIcon({ kind }: { kind: SocialKind }) {
  const iconClass = "h-4 w-4";

  if (kind === "github") {
    return (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.344-3.369-1.344-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0112 6.844a9.56 9.56 0 012.504.337c1.909-1.296 2.748-1.027 2.748-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.679.92.679 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z" />
      </svg>
    );
  }

  if (kind === "linkedin") {
    return (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6.94 8.5a1.56 1.56 0 110-3.12 1.56 1.56 0 010 3.12zM5.5 9.75h2.9V19h-2.9V9.75zM10.25 9.75h2.78v1.26h.04c.39-.73 1.33-1.5 2.74-1.5 2.93 0 3.47 1.93 3.47 4.43V19h-2.9v-4.49c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.37V19h-2.9V9.75z" />
      </svg>
    );
  }

  if (kind === "facebook") {
    return (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.4v8h3.1z" />
      </svg>
    );
  }

  if (kind === "instagram") {
    return (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.98 3H7.02A4.02 4.02 0 003 7.02v9.96A4.02 4.02 0 007.02 21h9.96A4.02 4.02 0 0021 16.98V7.02A4.02 4.02 0 0016.98 3zm1.32 13.98c0 .73-.6 1.32-1.32 1.32H7.02c-.73 0-1.32-.6-1.32-1.32V7.02c0-.73.6-1.32 1.32-1.32h9.96c.73 0 1.32.6 1.32 1.32v9.96z" />
        <path d="M12 7.8A4.2 4.2 0 1016.2 12 4.2 4.2 0 0012 7.8zm0 5.7a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5zm4.35-5.85a.75.75 0 11-.75.75.75.75 0 01.75-.75z" />
      </svg>
    );
  }

  return (
    <svg
      className={iconClass}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 5.8c-.8.4-1.6.6-2.5.8.9-.5 1.6-1.4 1.9-2.4-.8.5-1.8.9-2.8 1.1A4.2 4.2 0 0015.5 4c-2.4 0-4.2 2.2-3.7 4.5-3.5-.2-6.6-1.8-8.7-4.4-1.1 1.8-.5 4.1 1.4 5.3-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.8 3.9 2.8A8.5 8.5 0 012 18.2 12 12 0 008.5 20c7.8 0 12.2-6.6 11.9-12.5.8-.5 1.5-1.1 2-1.8z" />
    </svg>
  );
}

export function Team() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const flipBackTimeouts = useRef<
    Record<number, ReturnType<typeof setTimeout>>
  >({});

  useEffect(() => {
    return () => {
      Object.values(flipBackTimeouts.current).forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    const existingTimeout = flipBackTimeouts.current[index];
    if (existingTimeout) {
      clearTimeout(existingTimeout);
    }
    setFlippedCards((prev) => ({ ...prev, [index]: true }));
  };

  const handleMouseLeave = (index: number) => {
    const existingTimeout = flipBackTimeouts.current[index];
    if (existingTimeout) {
      clearTimeout(existingTimeout);
    }
    flipBackTimeouts.current[index] = setTimeout(() => {
      setFlippedCards((prev) => ({ ...prev, [index]: false }));
    }, 600);
  };

  const handleFlipToggle = (index: number) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section
      id="team"
      className="bg-white px-4 py-20 dark:bg-dark-base sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Get to Know Our Amazing Team
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
            Hover on desktop or tap on mobile to flip each card and view member
            details.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="perspective-[1000px]"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div
                className="relative h-90 w-full cursor-pointer transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards[index]
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)",
                }}
                onClick={() => handleFlipToggle(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleFlipToggle(index);
                  }
                }}
                aria-label={`Flip card for ${member.name}`}
              >
                <div
                  className="absolute inset-0 overflow-hidden rounded-b-2xl rounded-t-4xl border border-primary/20 bg-surface shadow-lg dark:border-primary/10"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="relative h-full w-full">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary/20 to-cyan-500/20 text-5xl font-extrabold text-primary">
                        {initials(member.name)}
                      </div>
                    )}

                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/95 to-transparent px-4 py-4 text-left text-white">
                      <h3 className="text-lg font-bold">{member.name}</h3>
                      <p className="text-sm text-white/90">{member.role}</p>

                      <div className="mt-3 flex items-center gap-2">
                        {(Object.keys(member.socialLinks) as SocialKind[]).map(
                          (kind) => {
                            const href = member.socialLinks[kind];
                            if (!href || href === "#") {
                              return null;
                            }

                            return (
                              <a
                                key={kind}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full bg-white/20 p-2 text-white transition hover:bg-white/30"
                                onClick={(event) => event.stopPropagation()}
                                aria-label={`${member.name} ${kind}`}
                              >
                                <SocialIcon kind={kind} />
                              </a>
                            );
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute inset-0 overflow-hidden rounded-b-2xl rounded-t-4xl border border-primary/25 bg-linear-to-br from-white to-primary/5 shadow-lg dark:from-dark-secondary dark:to-dark-base"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      {member.role}
                    </p>

                    {member.socialLinks.linkedin &&
                    member.socialLinks.linkedin !== "#" ? (
                      <div
                        className="mt-4 rounded-xl border border-primary/30 bg-white p-2.5 shadow-sm"
                        onClick={(event) => {
                          event.stopPropagation();
                          window.open(member.socialLinks.linkedin, "_blank");
                        }}
                      >
                        <QRCodeSVG
                          value={member.socialLinks.linkedin}
                          size={96}
                          bgColor="#ffffff"
                          fgColor="#0f172a"
                          level="M"
                          includeMargin={false}
                        />
                      </div>
                    ) : null}

                    {member.socialLinks.github &&
                    member.socialLinks.github !== "#" ? (
                      <a
                        href={member.socialLinks.github}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20"
                        onClick={(event) => event.stopPropagation()}
                      >
                        View GitHub
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="mt-5 cursor-not-allowed rounded-xl border border-gray-300/80 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-500 dark:border-dark-tertiary dark:bg-dark-base dark:text-gray-400"
                        onClick={(event) => event.stopPropagation()}
                      >
                        GitHub Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
