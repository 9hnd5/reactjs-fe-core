import { Checkbox as AntdCheckbox } from "antd";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

const { Group: AntdCheckboxGroup } = AntdCheckbox;

type DefaultCheckboxProps = React.ComponentPropsWithoutRef<typeof AntdCheckbox>;
type TCheckboxProps<T extends FieldValues> = Omit<
  DefaultCheckboxProps,
  "name" | "defaultValue" | "onChange" | "onBlur" | "ref"
> &
  UseControllerProps<T>;

const TCheckbox = <T extends FieldValues>(props: TCheckboxProps<T>) => {
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
    <AntdCheckbox
      name={field.name}
      checked={field.value}
      onChange={field.onChange}
      {...{ defaultChecked: defaultValue ? true : false }}
      {...restProps}
    >
      {children}
    </AntdCheckbox>
  );
};

type DefaultCheckboxGroupProps = React.ComponentPropsWithoutRef<
  typeof AntdCheckboxGroup
>;
type TCheckboxGroupProps<T extends FieldValues> = Omit<
  DefaultCheckboxGroupProps,
  "name" | "defaultValue" | "onChange" | "onBlur" | "ref"
> &
  UseControllerProps<T>;
const TGroup = <T extends FieldValues>(props: TCheckboxGroupProps<T>) => {
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
    <AntdCheckboxGroup {...restProps} {...field}>
      {children}
    </AntdCheckboxGroup>
  );
};
TCheckbox.TGroup = TGroup;

export { TCheckbox };
