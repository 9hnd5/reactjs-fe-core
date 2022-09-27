import { Select as Select } from "antd";
import React from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

const { Option } = Select;

type DefaultSelectProps = React.ComponentPropsWithoutRef<typeof Select>;
type TSelectProps<T extends FieldValues> = Omit<
  DefaultSelectProps,
  "name" | "defaultValue" | "onChange" | "onBlur"
> &
  UseControllerProps<T>;

const TSelect = <T extends FieldValues>(props: TSelectProps<T>) => {
  const {
    name,
    control,
    defaultValue,
    shouldUnregister,
    children,
    ...restProps
  } = props;
  const { field } = useController({
    name,
    control,
    defaultValue,
    shouldUnregister,
  });
  return (
    <Select {...restProps} {...field}>
      {children}
    </Select>
  );
};

TSelect.TOption = Option;

export { TSelect };
