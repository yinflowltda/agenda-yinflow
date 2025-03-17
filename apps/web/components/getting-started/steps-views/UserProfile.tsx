import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { md } from "@calcom/lib/markdownIt";
import { telemetryEventTypes, useTelemetry } from "@calcom/lib/telemetry";
import turndown from "@calcom/lib/turndownService";
import { trpc } from "@calcom/trpc/react";
import { Button, Editor, ImageUploader, Label, UserAvatar, showToast } from "@calcom/ui";

interface UserProfileProps {
  nextStep: () => void;
}

type FormData = {
  bio: string;
};

const UserProfile = ({ nextStep }: UserProfileProps) => {
  const [user] = trpc.viewer.me.useSuspenseQuery();
  const { t } = useLocale();
  const avatarRef = useRef<HTMLInputElement>(null);
  const { setValue, handleSubmit, getValues } = useForm<FormData>({
    defaultValues: { bio: user?.bio || "" },
  });

  const { data: eventTypes } = trpc.viewer.eventTypes.list.useQuery();
  const [imageSrc, setImageSrc] = useState<string>(user?.avatar || "");
  const utils = trpc.useUtils();
  const router = useRouter();
  const createEventType = trpc.viewer.eventTypes.create.useMutation();
  const telemetry = useTelemetry();
  const [firstRender, setFirstRender] = useState(true);

  // Create a separate mutation for avatar updates
  const avatarMutation = trpc.viewer.updateProfile.useMutation({
    onSuccess: async (data) => {
      showToast(t("your_user_profile_updated_successfully"), "success");
      setImageSrc(data.avatarUrl ?? "");
    },
    onError: () => {
      showToast(t("problem_saving_user_profile"), "error");
    },
  });

  // Original mutation remains for onboarding completion
  const mutation = trpc.viewer.updateProfile.useMutation({
    onSuccess: async () => {
      try {
        if (eventTypes?.length === 0) {
          await Promise.all(
            DEFAULT_EVENT_TYPES.map(async (event) => {
              return createEventType.mutate(event);
            })
          );
        }
      } catch (error) {
        console.error(error);
      }

      nextStep();
      await utils.viewer.me.refetch();
      const redirectUrl = localStorage.getItem("onBoardingRedirect");
      localStorage.removeItem("onBoardingRedirect");
      redirectUrl ? router.push(redirectUrl) : router.push("/");
    },
    onError: () => {
      showToast(t("problem_saving_user_profile"), "error");
    },
  });

  const onSubmit = handleSubmit((data: { bio: string }) => {
    const { bio } = data;

    telemetry.event(telemetryEventTypes.onboardingFinished);

    mutation.mutate({
      bio,
    });
  });

  async function updateProfileHandler(newAvatar: string) {
    avatarMutation.mutate({
      avatarUrl: newAvatar,
    });
  }

  const DEFAULT_EVENT_TYPES = [
    {
      title: t("15min_meeting"),
      slug: "15min",
      length: 15,
    },
    {
      title: t("30min_meeting"),
      slug: "30min",
      length: 30,
    },
    {
      title: t("secret_meeting"),
      slug: "secret",
      length: 15,
      hidden: true,
    },
  ];

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-row items-center justify-start rtl:justify-end">
        {user && <UserAvatar size="lg" user={user} previewSrc={imageSrc} />}
        <input
          ref={avatarRef}
          type="hidden"
          name="avatar"
          id="avatar"
          placeholder="URL"
          className="border-default focus:ring-empthasis mt-1 block w-full rounded-sm border px-3 py-2 text-sm focus:border-gray-800 focus:outline-none"
          defaultValue={imageSrc}
        />
        <div className="flex items-center px-4">
          <ImageUploader
            target="avatar"
            id="avatar-upload"
            buttonMsg={t("add_profile_photo")}
            handleAvatarChange={(newAvatar) => {
              if (avatarRef.current) {
                avatarRef.current.value = newAvatar;
              }
              const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "value"
              )?.set;
              nativeInputValueSetter?.call(avatarRef.current, newAvatar);
              const ev2 = new Event("input", { bubbles: true });
              avatarRef.current?.dispatchEvent(ev2);
              updateProfileHandler(newAvatar);
            }}
            imageSrc={imageSrc}
          />
        </div>
      </div>
      <fieldset className="mt-8">
        <Label className="text-default mb-2 block text-sm font-medium">{t("about")}</Label>
        <Editor
          getText={() => md.render(getValues("bio") || user?.bio || "")}
          setText={(value: string) => setValue("bio", turndown(value))}
          excludedToolbarItems={["blockType"]}
          firstRender={firstRender}
          setFirstRender={setFirstRender}
        />
        <p className="text-default mt-2 font-sans text-sm font-normal">{t("few_sentences_about_yourself")}</p>
      </fieldset>
      <Button
        loading={mutation.isPending}
        EndIcon="arrow-right"
        type="submit"
        className="mt-8 w-full items-center justify-center">
        {t("next_step_text")}
      </Button>
    </form>
  );
};

export default UserProfile;
