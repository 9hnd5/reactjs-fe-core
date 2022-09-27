import { Radio, RadioProps, RadioGroupProps } from "antd";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

const { Group: RadioGroup } = Radio;

const TRadio = (props: RadioProps) => {
  return <Radio {...props} />;
};

type TRadioGroupProps<T extends FieldValues> = Omit<
  RadioGroupProps,
  "name" | "defaultValue" | "onChange" | "onBlur" | "ref"
> &
  UseControllerProps<T>;
const TGroup = <T extends FieldValues>(props: TRadioGroupProps<T>) => {
  const {
    children,
    name,
    control,
    defaultValue,
    shouldUnregister,
    ...restProps
  } = props;
  const { field } = useController({
    name,
    control,
    defaultValue,
    shouldUnregister,
  });

  return (
    <RadioGroup {...restProps} {...field}>
      {children}
    </RadioGroup>
  );
};

TRadio.TGroup = TGroup;
export { TRadio };
