const GenderRadioButtons = ({
  onCheckboxChange,
  selectedGender,
  disabled,
}: {
  onCheckboxChange: (gender: string) => void;
  selectedGender: string;
  disabled?: boolean;
}) => {
  return (
    <div className="flex gap-4">
      <div className="form-control">
        <label htmlFor="label" className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="radio"
            name="gender"
            className="radio"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
            disabled={disabled}
          />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="label" className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="radio"
            name="gender"
            className="radio"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
            disabled={disabled}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderRadioButtons;
