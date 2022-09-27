import { Switch, SwitchProps } from "antd";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

type TSwitchProps<T extends FieldValues> = Omit<
  SwitchProps,
  "name" | "defaultValue" | "onChange" | "onBlur"
> &
  UseControllerProps<T>;

const TSwitch = <T extends FieldValues>(props: TSwitchProps<T>) => {
  const { name, control, defaultValue, shouldUnregister, ...restProps } = props;
  const { field } = useController({
    name,
    control,
    defaultValue,
    shouldUnregister,
  });
  return (
    <Switch {...restProps} checked={field.value} onChange={field.onChange} />
  );
};

export { TSwitch };
