import React from "react";
import Spinner from "../Spinner";

interface SelectOptionType {
  label?: string;
  value?: string;
  name?: string;
}

export interface CustomSelectProps {
  id: string;
  selectProps: any;
  selectPlaceholder: string;
  selectLoading?: any;
  selectOptions: SelectOptionType[];
  className: string;
}

const CustomSelect = ({
  id,
  className,
  selectProps,
  selectOptions,
  selectLoading,
  selectPlaceholder
}: CustomSelectProps) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <select className={className} id={id} {...selectProps}>
      {selectPlaceholder ? (
        <option value={""} disabled>
          {selectPlaceholder}
        </option>
      ) : null}

      {selectLoading ? (
        <option disabled>
          <Spinner />
        </option>
      ) : (
        selectOptions?.map((option) => (
          <option
            value={option.value || option.name}
            key={`${option.value || option.name}${Math.random()}`}
          >
            {option.label || option.name}
          </option>
        ))
      )}
    </select>
  );
};

export default CustomSelect;
