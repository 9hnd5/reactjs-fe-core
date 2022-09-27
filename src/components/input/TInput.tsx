import { Input } from "antd";
import React from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
const { Password, TextArea, Search } = Input;

type DefaultInputProps = React.ComponentPropsWithoutRef<typeof Input>;
type TInputProps<T extends FieldValues> = Omit<
  DefaultInputProps,
  "name" | "defaultValue" | "onChange" | "onBlur" | "ref"
> &
  UseControllerProps<T>;
const TInput = <T extends FieldValues>(props: TInputProps<T>) => {
  const { name, control, defaultValue, shouldUnregister, ...restProps } = props;
  const { field } = useController({
    name,
    control,
    defaultValue,
    shouldUnregister,
  });
  return <Input {...restProps} {...field} />;
};

type DefaultPasswordProps = React.ComponentPropsWithoutRef<typeof Password>;
type TPasswordProps<T extends FieldValues> = Omit<
  DefaultPasswordProps,
  "name" | "defaultValue" | "onChange" | "onBlur" | "ref"
> &
  UseControllerProps<T>;
const TPassword = <T extends FieldValues>(props: TPasswordProps<T>) => {
  const { name, control, defaultValue, shouldUnregister, ...restProps } = props;
  const { field } = useController({
    name,
    control,
    defaultValue,
    shouldUnregister,
  });
  return <Input.Password {...restProps} {...field} />;
};

type DefaultTextAreaProps = React.ComponentPropsWithoutRef<typeof TextArea>;
type TTextAreaProps<T extends FieldValues> = Omit<
  DefaultTextAreaProps,
  "name" | "defaultValue" | "onChange" | "onBlur" | "ref"
> &
  UseControllerProps<T>;
const TTextArea = <T extends FieldValues>(props: TTextAreaProps<T>) => {
  const { name, control, defaultValue, shouldUnregister, ...restProps } = props;
  const { field } = useController({
    name,
    control,
    defaultValue,
    shouldUnregister,
  });
  return <TextArea {...restProps} {...field} />;
};

type DefaultSearchProps = React.ComponentPropsWithoutRef<typeof Search>;
type TSearchProps<T extends FieldValues> = Omit<
  DefaultSearchProps,
  "name" | "defaultValue" | "onChange" | "onBlur" | "ref"
> &
  UseControllerProps<T>;
const TSearch = <T extends FieldValues>(props: TSearchProps<T>) => {
  const { name, control, defaultValue, shouldUnregister, ...restProps } = props;
  const { field } = useController({
    name,
    control,
    defaultValue,
    shouldUnregister,
  });
  return <Search {...restProps} {...field} />;
};

TInput.TPassword = TPassword;
TInput.TTextArea = TTextArea;
TInput.TSearch = TSearch;

export { TInput };
