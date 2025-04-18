"use client";

import type { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import dayjs from "@calcom/dayjs";
import { useFlagMap } from "@calcom/features/flags/context/provider";
import useMeQuery from "@calcom/trpc/react/hooks/useMeQuery";

export enum ShowOnboardingStatus {
  LOADING = "loading",
  YES = "yes",
  NO = "no",
}

const shouldShowOnboarding = (
  user: Pick<User, "createdDate" | "completedOnboarding"> & {
    organizationId: number | null;
  }
) => {
  return !user.completedOnboarding &&
    !user.organizationId &&
    dayjs(user.createdDate).isAfter(ONBOARDING_INTRODUCED_AT)
    ? ShowOnboardingStatus.YES
    : ShowOnboardingStatus.NO;
};

export const ONBOARDING_INTRODUCED_AT = dayjs("September 1 2021").toISOString();

export const ONBOARDING_NEXT_REDIRECT = {
  redirect: {
    permanent: false,
    destination: "/getting-started",
  },
} as const;

export function useRedirectToOnboardingIfNeeded() {
  const router = useRouter();
  const { data: user, isLoading } = useMeQuery();
  const flags = useFlagMap();

  const needsEmailVerification =
    !user?.emailVerified && user?.identityProvider === "CAL" && flags["email-verification"];

  const isRedirectingToOnboarding = user ? shouldShowOnboarding(user) : ShowOnboardingStatus.LOADING;

  useEffect(() => {
    const canRedirect =
      !isLoading && isRedirectingToOnboarding === ShowOnboardingStatus.YES && !needsEmailVerification;

    if (canRedirect) router.replace("/getting-started");
  }, [isLoading, isRedirectingToOnboarding, needsEmailVerification, router]);

  return {
    isLoading,
    isRedirectingToOnboarding,
  };
}
