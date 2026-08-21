"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

const SPONSORS = [
  {
    id: "apimart",
    name: "APIMart",
    url: "https://go.apimart.ai/gh-gpt-load",
    logo: "/sponsors/apimart.png",
    logoWidth: 2172,
    logoHeight: 724,
  },
] as const;

const ProjectSponsors = () => {
  const { t } = useTranslation();
  const isSingleSponsor = SPONSORS.length === 1;

  return (
    <section
      aria-labelledby="project-sponsors-title"
      className="border-y border-gray-200 bg-gray-50 py-5 dark:border-gray-800 dark:bg-gray-900 sm:py-6"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <h2
            id="project-sponsors-title"
            className="mb-3 text-center text-base font-semibold tracking-wide text-gray-600 dark:text-gray-300 sm:text-lg"
          >
            {t("projectSponsors.title")}
          </h2>

          <div
            className={cn(
              "grid gap-4",
              isSingleSponsor
                ? "mx-auto max-w-4xl"
                : "md:grid-cols-2 xl:grid-cols-3",
            )}
          >
            {SPONSORS.map((sponsor) => (
              <article
                key={sponsor.id}
                className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-gray-950/40"
              >
                <div className="h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500" />
                <div
                  className={cn(
                    "gap-4 p-4",
                    isSingleSponsor
                      ? "grid sm:grid-cols-[150px_minmax(0,1fr)_auto] sm:items-center sm:gap-5"
                      : "flex h-full flex-col",
                  )}
                >
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    aria-label={t(
                      `projectSponsors.${sponsor.id}.logoAriaLabel`,
                    )}
                    className="mx-auto flex min-h-[66px] w-full max-w-[170px] items-center justify-center rounded-lg border border-gray-200 bg-white p-2 transition-shadow duration-200 hover:shadow-sm"
                  >
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={sponsor.logoWidth}
                      height={sponsor.logoHeight}
                      sizes="150px"
                      loading="lazy"
                      className="h-auto w-full max-w-[150px]"
                    />
                  </a>

                  <p className="min-w-0 text-sm leading-6 text-gray-700 dark:text-gray-300">
                    {t(`projectSponsors.${sponsor.id}.summary`)}
                  </p>

                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className={cn(
                      "inline-flex min-h-11 w-full items-center justify-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 sm:min-h-10",
                      isSingleSponsor ? "sm:w-auto" : "mt-auto",
                    )}
                  >
                    <span>{t(`projectSponsors.${sponsor.id}.cta`)}</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSponsors;
