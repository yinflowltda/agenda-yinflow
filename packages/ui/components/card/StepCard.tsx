const StepCard: React.FC<{ children: React.ReactNode; isAssigned: boolean }> = (props) => {
  return (
    <div
      className={`sm:border-subtle bg-muted mt-10 border p-4 sm:rounded-md sm:p-8 ${
        props.isAssigned && "w-[900px]"
      }`}>
      {props.children}
    </div>
  );
};

export { StepCard };
