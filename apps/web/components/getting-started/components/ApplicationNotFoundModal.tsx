import type { FC } from "react";
import React from "react";

interface ApplicationNotFoundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationNotFoundModal: FC<ApplicationNotFoundModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative h-[280px] w-[700px] rounded-[12px] bg-white p-6 px-[32px] pb-[32px] pt-[44px] text-center shadow-xl">
        <div className="absolute inset-x-0 -top-[13%] mx-auto flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[#f4f6f8] shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
          <svg
            width="44px"
            height="44px"
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ED1C23"
            stroke-width="0.00024000000000000003">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.288"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 3.53846C7.32682 3.53846 3.53846 7.32682 3.53846 12C3.53846 16.6732 7.32682 20.4615 12 20.4615C16.6732 20.4615 20.4615 16.6732 20.4615 12C20.4615 7.32682 16.6732 3.53846 12 3.53846ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
                fill="#ED1C23"
              />{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 7.64103C12.4248 7.64103 12.7692 7.98542 12.7692 8.41026V12.5128C12.7692 12.9377 12.4248 13.2821 12 13.2821C11.5752 13.2821 11.2308 12.9377 11.2308 12.5128V8.41026C11.2308 7.98542 11.5752 7.64103 12 7.64103Z"
                fill="#ED1C23"
              />{" "}
              <path
                d="M13.0256 15.5897C13.0256 16.1562 12.5664 16.6154 12 16.6154C11.4336 16.6154 10.9744 16.1562 10.9744 15.5897C10.9744 15.0233 11.4336 14.5641 12 14.5641C12.5664 14.5641 13.0256 15.0233 13.0256 15.5897Z"
                fill="#ED1C23"
              />{" "}
            </g>
          </svg>
        </div>
        <h2 className="mb-0 mt-0 font-sans text-[42px] font-medium leading-[48px] tracking-[-0.025em] text-[#012432]">
          Não foi possível localizar sua candidatura
        </h2>
        <p className="mt-[12px] font-sans text-base leading-6">
          Se você já passou pela entrevista, por favor verifique se o e-mail informado é o mesmo que foi
          utilizado na Pré-Admissão. Em caso de dúvidas entre em contato com o Time de Operações{" "}
          <a href="mailto:operacoes@yinflow.life" className="text-[#00a587]">
            clicando aqui
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ApplicationNotFoundModal;
