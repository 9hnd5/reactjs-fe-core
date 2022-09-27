import { InputNumber, InputNumberProps } from "antd";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

type TInputNumberProps<T extends FieldValues> = Omit<
  InputNumberProps,
  "name" | "defaultValue" | "onChange" | "onBlur"
> &
  UseControllerProps<T>;

const TInputNumber = <T extends FieldValues>(props: TInputNumberProps<T>) => {
  const { name, control, shouldUnregister, defaultValue, ...restProps } = props;
  const { field } = useController({
    name,
    control,
    defaultValue,
    shouldUnregister,
  });

  return <InputNumber {...restProps} {...field} style={{ width: "100%" }} />;
};

export { TInputNumber };
