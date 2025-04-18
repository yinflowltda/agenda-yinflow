import { DocusealForm } from "@docuseal/react";
import { useEffect, useState } from "react";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { trpc } from "@calcom/trpc/react";
import { Button } from "@calcom/ui/button";
import { Icon } from "@calcom/ui/icon";

import ApplicationNotFoundModal from "@components/getting-started/components/ApplicationNotFoundModal";

const DIRECTUS_BASE_URL = "https://agenda.yinflow.life/api";
const DIRECTUS_TOKEN = process.env.NEXT_PUBLIC_DIRECTUS_TOKEN || "";

interface AssignTermsProps {
  nextStep: () => void;
}

interface ProfessionalInfo {
  id: number;
  social_reason: string;
  legal_representative: string;
}
const AssignTerms = ({ nextStep }: AssignTermsProps) => {
  const [applicationNotFoundModalIsVisible, setApplicationNotFoundModalIsVisible] = useState(false);
  const [termsIsAssigned, setTermsIsAssigned] = useState(false);
  const [professionalInfo, setProfessionalInfo] = useState<ProfessionalInfo | null>(null);
  const [user] = trpc.viewer.me.get.useSuspenseQuery();
  const { t } = useLocale();

  useEffect(() => {
    if (user) {
      fetch(`${DIRECTUS_BASE_URL}/get-pro-professionals?email=${"product@yangflow.us"}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${DIRECTUS_TOKEN}`,
        },
      }).then((response) => {
        if (!response.ok) return setApplicationNotFoundModalIsVisible(true);

        response.json().then((response) => {
          if (!response.data.length) return setApplicationNotFoundModalIsVisible(true);
          const proProfessionalId = response.data[0].id;
          const legalRepresentative = response.data[0].fullname;

          fetch(
            `${DIRECTUS_BASE_URL}/get-pro-professionals-companies?proProfessionalId=${proProfessionalId}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${DIRECTUS_TOKEN}`,
              },
            }
          ).then((response) => {
            if (!response.ok) return setApplicationNotFoundModalIsVisible(true);
            response.json().then((response) => {
              setProfessionalInfo({
                id: proProfessionalId,
                social_reason: response.data[0].legal_name,
                legal_representative: legalRepresentative,
              });
            });
          });
        });
      });
    }
  }, [user]);

  return (
    <form onSubmit={nextStep}>
      <span>Por favor, leia atentamente e preencha todas as partes solicitadas.</span>
      <div className="mt-2 h-[40vh] overflow-scroll">
        {professionalInfo ? (
          <DocusealForm
            src="https://docs.yinflow.life/d/wGickgWzeH5HUF"
            email={user.email}
            role="Profissional de Saúde"
            expand={false}
            minimize
            language="pt"
            withTitle={false}
            logo=""
            externalId={professionalInfo.id.toString()}
            values={{
              "Razão Social": professionalInfo.social_reason,
              "Representante Legal": professionalInfo.legal_representative,
            }}
            withSendCopyButton={false}
            allowToResubmit={false}
            backgroundColor="#F4F6F8"
            completedButton={{
              title: "Próximo",
              url: "/getting-started/user-settings",
            }}
            customCss="button { background-color: #06C6A3 !important; border: none; }"
            onLoad={(data) => {
              if (data.completed_submitter) setTermsIsAssigned(true);
            }}
            completedMessage={{
              title: "Contrato Assinado com Sucesso",
            }}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Icon name="loader" />
          </div>
        )}
      </div>
      {termsIsAssigned && (
        <Button EndIcon="arrow-right" type="submit" className="mt-8 w-full items-center justify-center">
          {t("next_step_text")}
        </Button>
      )}
      <ApplicationNotFoundModal isOpen={applicationNotFoundModalIsVisible} />
    </form>
  );
};

export default AssignTerms;
