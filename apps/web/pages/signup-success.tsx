import Image from "next/image";

import useMediaQuery from "@lib/hooks/useMediaQuery";
import { getServerSideProps } from "@lib/signup/getServerSideProps";

import PageWrapper from "@components/PageWrapper";

import painelImage from "../public/images/Frame-4874.png";

const PAINEL_URL = "https://painel.yinflow.life/admin/login";

export default function SignupSuccess() {
  const isMobile = useMediaQuery("(max-width: 1000px)");

  if (isMobile)
    return (
      <div className="w-dvh flex min-h-screen flex-col items-center bg-[#F4F6F8] p-[32px]">
        <div className="flex h-full w-full flex-col gap-[24px] rounded-[32px] p-[24px]">
          <svg width="179" height="40" viewBox="0 0 179 40" fill="none" className="mb-[24px]">
            <path
              d="M96.6047 9.76199H92.7637L100.69 30.4693H100.831L106.832 14.8297L112.845 30.4728H113.045L120.971 9.76199H119.537L113.821 24.692L107.854 9.34766H107.733L102.062 23.9707L96.6047 9.76199Z"
              fill="black"
            />
            <path d="M69.4492 0.424805V29.8704H65.7202V0.424805H69.4492Z" fill="black" />
            <path
              d="M72.5957 20.2253C72.5957 13.9975 76.7472 9.73047 83.0521 9.73047C88.9332 9.73047 92.9692 13.575 92.9692 19.7631C92.9692 25.9513 88.8177 30.4109 82.5899 30.4109C76.362 30.4109 72.5957 26.5279 72.5957 20.2242V20.2253ZM83.4746 29.874C86.781 29.874 88.9332 27.1826 88.9332 20.9945C88.9332 14.3441 86.2803 10.2697 82.2829 10.2697C78.9764 10.2697 76.6317 12.8455 76.6317 19.0722C76.6317 25.7225 79.3989 29.874 83.4746 29.874Z"
              fill="black"
            />
            <path
              d="M28.0333 29.756H24.3218V28.7978V12.4684L24.3172 12.0471V11.8416L28.0018 9.69528H28.0403V28.7978L28.0333 29.756ZM26.1624 3.31689C27.542 3.31689 28.5387 4.27511 28.5387 5.5788C28.5387 6.88249 27.542 7.87922 26.1624 7.87922C24.7829 7.87922 23.7861 6.88249 23.7861 5.5788C23.7861 4.27511 24.7443 3.31689 26.1624 3.31689Z"
              fill="black"
            />
            <path
              d="M31.9866 11.8696L35.6747 9.76172H35.7132V13.4709C38.7793 11.209 41.2711 9.77572 43.3031 9.77572C46.3692 9.77572 48.3241 11.8451 48.3241 15.2566V28.8642L48.3276 29.631V29.8224H44.5648V29.631L44.5671 28.8642V15.8693C44.5671 13.1861 43.1105 11.9209 40.9642 11.9209C39.1621 11.9209 37.7055 12.5885 35.7132 13.9681V29.6298V29.8212H31.9959V28.863V12.5337L31.9877 11.8684L31.9866 11.8696Z"
              fill="black"
            />
            <path
              d="M23.436 2.52588H20.4167L12.591 14.105L5.37815 3.47009L4.77007 2.52588H0L0.624416 3.47009L9.78641 16.7322V28.8459L9.78875 29.6115V29.8181H13.8107V29.601V28.8459V16.7287L23.436 2.52588Z"
              fill="black"
            />
            <path
              d="M57.3436 29.7537H53.5761V28.7932L53.575 11.725H50.5381V10.2253H53.5831C53.75 3.338 57.3658 0 60.6863 0C62.2234 0 63.0696 0.769141 63.0696 1.92227C63.0696 2.69141 62.6471 3.22946 62.4545 3.4979C61.4555 2.99837 60.4727 2.5782 58.8201 2.5782C56.9527 2.5782 56.0108 4.3324 55.9022 5.84617C55.7855 7.48016 56.1111 8.91807 56.7262 10.2253H62.339V11.725H57.3413V28.7932L57.3436 29.7537Z"
              fill="black"
            />
            <path
              d="M120.665 30.4727C121.38 30.4727 121.992 30.1751 122.39 29.6954C122.728 29.3464 122.927 28.8726 122.927 28.3345C122.927 27.7965 122.745 27.3751 122.437 27.039C122.046 26.5383 121.417 26.229 120.665 26.229C119.388 26.229 118.462 27.1137 118.462 28.3345C118.462 29.5553 119.388 30.4727 120.665 30.4727Z"
              fill="#06C6A3"
            />
            <path
              d="M142.124 29.8158H126.761L130.592 2.45703H133.791L130.397 27.387H142.603L142.124 29.8158Z"
              fill="#06C6A3"
            />
            <path
              d="M165.636 1.45092C165.557 1.3984 165.365 1.28285 165.049 1.09845C164.734 0.915205 164.309 0.735467 163.787 0.565065C163.261 0.394664 162.675 0.307129 162.047 0.307129C160.186 0.307129 158.755 0.915206 157.793 2.11268C156.842 3.29849 156.175 5.17408 155.812 7.68808L155.439 10.376L153.42 10.383L153.122 12.4675H155.135L152.483 31.3856C152.151 33.7327 151.661 35.4367 151.028 36.4509C150.409 37.4418 149.608 37.9449 148.648 37.9449C148.302 37.9449 147.995 37.9017 147.737 37.8153C147.479 37.7289 147.281 37.6367 147.149 37.541C146.963 37.4056 146.92 37.3683 146.909 37.3578L146.796 37.2469L145.884 39.028L145.91 39.0805C145.936 39.1318 146 39.21 146.279 39.3956C146.483 39.531 146.783 39.6629 147.199 39.7971C147.61 39.929 148.136 39.9967 148.764 39.9967C152.454 39.9967 154.734 37.1092 155.539 31.4159L158.197 12.4652H163.772L164.077 10.334H158.501L158.831 8.02655C159.035 6.51978 159.293 5.3293 159.599 4.48897C159.9 3.66264 160.264 3.08024 160.683 2.76044C161.099 2.44182 161.635 2.28075 162.277 2.28075C162.701 2.28075 163.113 2.34378 163.499 2.46866C163.889 2.59471 164.208 2.72893 164.444 2.86549C164.753 3.04406 164.841 3.11292 164.866 3.13743L164.99 3.25998L165.712 1.49994L165.633 1.44742L165.636 1.45092Z"
              fill="#06C6A3"
            />
            <path
              d="M167.144 21.1815C170.165 21.1815 172.764 20.7952 174.871 20.0319C177.016 19.2558 178.104 17.6229 178.104 15.179C178.104 13.7072 177.563 12.4537 176.499 11.4535C175.435 10.4567 173.97 9.9502 172.139 9.9502C170.214 9.9502 168.491 10.4719 167.019 11.5013C165.55 12.5296 164.39 14.0048 163.572 15.8874C162.756 17.7653 162.343 19.9502 162.343 22.3813C162.343 24.9327 163.058 26.9156 164.469 28.2742C165.879 29.6316 167.756 30.3202 170.049 30.3202C171.453 30.3202 172.662 30.0891 173.642 29.6316C174.617 29.1764 175.371 28.6617 175.921 28.1365C176.585 27.5027 176.722 27.2565 176.772 27.1666C176.776 27.1572 176.788 27.1281 176.788 27.1281L175.597 26.0683C175.597 26.0683 175.332 26.4091 174.907 26.8071C174.492 27.1958 173.911 27.5611 173.177 27.889C172.448 28.2158 171.564 28.3816 170.553 28.3816C169.017 28.3816 167.776 27.9112 166.861 26.9833C165.945 26.0566 165.481 24.6246 165.481 22.728C165.481 22.0545 165.491 21.5352 165.512 21.1792H167.145L167.144 21.1815ZM171.79 11.8491C172.916 11.8491 173.8 12.1502 174.42 12.7455C175.039 13.3396 175.353 14.1064 175.353 15.0237C175.353 16.8456 174.611 18.0128 173.085 18.5928C171.544 19.1787 169.572 19.4763 167.221 19.4763H165.69C166.028 17.0942 166.73 15.2105 167.778 13.8764C168.834 12.5319 170.185 11.8491 171.79 11.8491Z"
              fill="#06C6A3"
            />
            <path d="M147.616 10.3379L144.872 29.9329H147.896L150.638 10.3379H147.616Z" fill="#06C6A3" />
            <path
              d="M149.722 7.97306C150.438 7.97306 151.052 7.67544 151.45 7.19341C151.788 6.84444 151.988 6.36825 151.988 5.8302C151.988 5.29215 151.806 4.86965 151.496 4.53235C151.104 4.03048 150.475 3.72119 149.722 3.72119C148.443 3.72119 147.515 4.60821 147.515 5.8302C147.515 7.05219 148.443 7.97189 149.722 7.97189V7.97306Z"
              fill="#06C6A3"
            />
          </svg>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="32" fill="#E0F6EF" />
            <path
              d="M41.4788 24.8892L28.4418 37.9262L22.5159 32.0003"
              stroke="#06C6A3"
              stroke-width="3.55556"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="text-4xl font-medium text-[#114559]">Sua conta foi configurada com sucesso!</span>
          <span className="text-sm text-[#114559]">
            Acesse o <b className="font-semibold">Painel do Profissional</b> para atender e gerenciar seus pacientes na Yinflow.Life.
          </span>
          <a
            href={PAINEL_URL}
            className="mt-[24px] flex h-[58px] w-[292px] cursor-pointer items-center justify-center gap-[20px] rounded-[4px] bg-[#00A587] text-sm font-bold hover:bg-[#008C73]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8L14 8" stroke="white" stroke-width="2" stroke-linecap="round" />
              <path
                d="M10 13L15 8L10 3"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Acessar Meu Painel
          </a>
        </div>
        <div className="flex h-full w-full flex-col gap-[16px] rounded-[32px] border border-[#E6EBF0] bg-[#E0F6EF] p-[24px] pr-[0px]">
          <Image src={painelImage} alt="Painel do profissional" className="-mr-[56px] mb-[24px]" />
          <span className="text-base text-[#114559]">
            <b className="font-semibold">1.</b> Acesse o{" "}
            <b className="font-semibold">Painel do Profissional;</b>
          </span>
          <span className="pr-[24px] text-base text-[#114559]">
            <b className="font-semibold">2.</b> Faça login utilizando a mesma{" "}
            <b className="font-semibold">Conta Google</b> que utilizou para fazer este cadastro de admissão.
          </span>
        </div>
      </div>
    );

  return (
    <div className="w-dvh flex h-dvh items-center justify-center bg-[#F4F6F8]">
      <div className="flex h-4/5 w-4/5 flex-row rounded-[32px] bg-white">
        <div className="flex h-full w-1/2 flex-col gap-[24px] rounded-[32px] p-[56px]">
          <svg width="179" height="40" viewBox="0 0 179 40" fill="none" className="mb-[24px] ">
            <path
              d="M96.6047 9.76199H92.7637L100.69 30.4693H100.831L106.832 14.8297L112.845 30.4728H113.045L120.971 9.76199H119.537L113.821 24.692L107.854 9.34766H107.733L102.062 23.9707L96.6047 9.76199Z"
              fill="black"
            />
            <path d="M69.4492 0.424805V29.8704H65.7202V0.424805H69.4492Z" fill="black" />
            <path
              d="M72.5957 20.2253C72.5957 13.9975 76.7472 9.73047 83.0521 9.73047C88.9332 9.73047 92.9692 13.575 92.9692 19.7631C92.9692 25.9513 88.8177 30.4109 82.5899 30.4109C76.362 30.4109 72.5957 26.5279 72.5957 20.2242V20.2253ZM83.4746 29.874C86.781 29.874 88.9332 27.1826 88.9332 20.9945C88.9332 14.3441 86.2803 10.2697 82.2829 10.2697C78.9764 10.2697 76.6317 12.8455 76.6317 19.0722C76.6317 25.7225 79.3989 29.874 83.4746 29.874Z"
              fill="black"
            />
            <path
              d="M28.0333 29.756H24.3218V28.7978V12.4684L24.3172 12.0471V11.8416L28.0018 9.69528H28.0403V28.7978L28.0333 29.756ZM26.1624 3.31689C27.542 3.31689 28.5387 4.27511 28.5387 5.5788C28.5387 6.88249 27.542 7.87922 26.1624 7.87922C24.7829 7.87922 23.7861 6.88249 23.7861 5.5788C23.7861 4.27511 24.7443 3.31689 26.1624 3.31689Z"
              fill="black"
            />
            <path
              d="M31.9866 11.8696L35.6747 9.76172H35.7132V13.4709C38.7793 11.209 41.2711 9.77572 43.3031 9.77572C46.3692 9.77572 48.3241 11.8451 48.3241 15.2566V28.8642L48.3276 29.631V29.8224H44.5648V29.631L44.5671 28.8642V15.8693C44.5671 13.1861 43.1105 11.9209 40.9642 11.9209C39.1621 11.9209 37.7055 12.5885 35.7132 13.9681V29.6298V29.8212H31.9959V28.863V12.5337L31.9877 11.8684L31.9866 11.8696Z"
              fill="black"
            />
            <path
              d="M23.436 2.52588H20.4167L12.591 14.105L5.37815 3.47009L4.77007 2.52588H0L0.624416 3.47009L9.78641 16.7322V28.8459L9.78875 29.6115V29.8181H13.8107V29.601V28.8459V16.7287L23.436 2.52588Z"
              fill="black"
            />
            <path
              d="M57.3436 29.7537H53.5761V28.7932L53.575 11.725H50.5381V10.2253H53.5831C53.75 3.338 57.3658 0 60.6863 0C62.2234 0 63.0696 0.769141 63.0696 1.92227C63.0696 2.69141 62.6471 3.22946 62.4545 3.4979C61.4555 2.99837 60.4727 2.5782 58.8201 2.5782C56.9527 2.5782 56.0108 4.3324 55.9022 5.84617C55.7855 7.48016 56.1111 8.91807 56.7262 10.2253H62.339V11.725H57.3413V28.7932L57.3436 29.7537Z"
              fill="black"
            />
            <path
              d="M120.665 30.4727C121.38 30.4727 121.992 30.1751 122.39 29.6954C122.728 29.3464 122.927 28.8726 122.927 28.3345C122.927 27.7965 122.745 27.3751 122.437 27.039C122.046 26.5383 121.417 26.229 120.665 26.229C119.388 26.229 118.462 27.1137 118.462 28.3345C118.462 29.5553 119.388 30.4727 120.665 30.4727Z"
              fill="#06C6A3"
            />
            <path
              d="M142.124 29.8158H126.761L130.592 2.45703H133.791L130.397 27.387H142.603L142.124 29.8158Z"
              fill="#06C6A3"
            />
            <path
              d="M165.636 1.45092C165.557 1.3984 165.365 1.28285 165.049 1.09845C164.734 0.915205 164.309 0.735467 163.787 0.565065C163.261 0.394664 162.675 0.307129 162.047 0.307129C160.186 0.307129 158.755 0.915206 157.793 2.11268C156.842 3.29849 156.175 5.17408 155.812 7.68808L155.439 10.376L153.42 10.383L153.122 12.4675H155.135L152.483 31.3856C152.151 33.7327 151.661 35.4367 151.028 36.4509C150.409 37.4418 149.608 37.9449 148.648 37.9449C148.302 37.9449 147.995 37.9017 147.737 37.8153C147.479 37.7289 147.281 37.6367 147.149 37.541C146.963 37.4056 146.92 37.3683 146.909 37.3578L146.796 37.2469L145.884 39.028L145.91 39.0805C145.936 39.1318 146 39.21 146.279 39.3956C146.483 39.531 146.783 39.6629 147.199 39.7971C147.61 39.929 148.136 39.9967 148.764 39.9967C152.454 39.9967 154.734 37.1092 155.539 31.4159L158.197 12.4652H163.772L164.077 10.334H158.501L158.831 8.02655C159.035 6.51978 159.293 5.3293 159.599 4.48897C159.9 3.66264 160.264 3.08024 160.683 2.76044C161.099 2.44182 161.635 2.28075 162.277 2.28075C162.701 2.28075 163.113 2.34378 163.499 2.46866C163.889 2.59471 164.208 2.72893 164.444 2.86549C164.753 3.04406 164.841 3.11292 164.866 3.13743L164.99 3.25998L165.712 1.49994L165.633 1.44742L165.636 1.45092Z"
              fill="#06C6A3"
            />
            <path
              d="M167.144 21.1815C170.165 21.1815 172.764 20.7952 174.871 20.0319C177.016 19.2558 178.104 17.6229 178.104 15.179C178.104 13.7072 177.563 12.4537 176.499 11.4535C175.435 10.4567 173.97 9.9502 172.139 9.9502C170.214 9.9502 168.491 10.4719 167.019 11.5013C165.55 12.5296 164.39 14.0048 163.572 15.8874C162.756 17.7653 162.343 19.9502 162.343 22.3813C162.343 24.9327 163.058 26.9156 164.469 28.2742C165.879 29.6316 167.756 30.3202 170.049 30.3202C171.453 30.3202 172.662 30.0891 173.642 29.6316C174.617 29.1764 175.371 28.6617 175.921 28.1365C176.585 27.5027 176.722 27.2565 176.772 27.1666C176.776 27.1572 176.788 27.1281 176.788 27.1281L175.597 26.0683C175.597 26.0683 175.332 26.4091 174.907 26.8071C174.492 27.1958 173.911 27.5611 173.177 27.889C172.448 28.2158 171.564 28.3816 170.553 28.3816C169.017 28.3816 167.776 27.9112 166.861 26.9833C165.945 26.0566 165.481 24.6246 165.481 22.728C165.481 22.0545 165.491 21.5352 165.512 21.1792H167.145L167.144 21.1815ZM171.79 11.8491C172.916 11.8491 173.8 12.1502 174.42 12.7455C175.039 13.3396 175.353 14.1064 175.353 15.0237C175.353 16.8456 174.611 18.0128 173.085 18.5928C171.544 19.1787 169.572 19.4763 167.221 19.4763H165.69C166.028 17.0942 166.73 15.2105 167.778 13.8764C168.834 12.5319 170.185 11.8491 171.79 11.8491Z"
              fill="#06C6A3"
            />
            <path d="M147.616 10.3379L144.872 29.9329H147.896L150.638 10.3379H147.616Z" fill="#06C6A3" />
            <path
              d="M149.722 7.97306C150.438 7.97306 151.052 7.67544 151.45 7.19341C151.788 6.84444 151.988 6.36825 151.988 5.8302C151.988 5.29215 151.806 4.86965 151.496 4.53235C151.104 4.03048 150.475 3.72119 149.722 3.72119C148.443 3.72119 147.515 4.60821 147.515 5.8302C147.515 7.05219 148.443 7.97189 149.722 7.97189V7.97306Z"
              fill="#06C6A3"
            />
          </svg>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="32" fill="#E0F6EF" />
            <path
              d="M41.4788 24.8892L28.4418 37.9262L22.5159 32.0003"
              stroke="#06C6A3"
              stroke-width="3.55556"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="text-4xl font-medium text-[#114559]">Sua conta foi criada com sucesso!</span>
          <span className="text-sm text-[#114559]">
            Agora você já pode acessar o seu Yinflow.Life.
            <b className="font-semibold">Painel do Profissional</b> e atender seus primeiros pacientes na
          </span>
          <a
            href={PAINEL_URL}
            className="mt-[24px] flex h-[58px] w-[292px] cursor-pointer items-center justify-center gap-[20px] rounded-[4px] bg-[#00A587] text-sm font-bold text-white hover:bg-[#008C73]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8L14 8" stroke="white" stroke-width="2" stroke-linecap="round" />
              <path
                d="M10 13L15 8L10 3"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Acessar Meu Painel
          </a>
        </div>
        <div className="flex h-full w-1/2 flex-col gap-[16px] rounded-[32px] border border-[#E6EBF0] bg-[#E0F6EF] p-[56px] pr-[0px]">
          <Image src={painelImage} alt="Painel do profissional" className="-mr-[56px] mb-[24px]" />
          <span className="text-base text-[#114559]">
            <b className="font-semibold">1.</b> Acesse o{" "}
            <b className="font-semibold">Painel do Profissional;</b>
          </span>
          <span className="pr-[56px] text-base text-[#114559]">
            <b className="font-semibold">2.</b> Faça login utilizando a mesma{" "}
            <b className="font-semibold">Conta Google</b> que utilizou para fazer este cadastro de admissão.
          </span>
        </div>
      </div>
    </div>
  );
}

export { getServerSideProps };

SignupSuccess.PageWrapper = PageWrapper;
