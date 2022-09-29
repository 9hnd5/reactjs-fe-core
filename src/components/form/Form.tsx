import { Form as AntdForm, Tooltip as AntdToolTip, TooltipProps } from "antd";
import React from "react";

type DefaultFormProps = React.ComponentPropsWithoutRef<typeof AntdForm>;
const Form = (props: DefaultFormProps) => {
  const { children } = props;
  return <AntdForm {...props}>{children}</AntdForm>;
};

type DefaultFormItemProps = React.ComponentPropsWithoutRef<
  typeof AntdForm.Item
> & {
  children: React.ReactNode;
  helpPosition?: TooltipProps["placement"];
  helpColor?: TooltipProps["color"];
};
const Item = (props: DefaultFormItemProps) => {
  const {
    children,
    help,
    helpColor = "red",
    helpPosition,
    hasFeedback,
    ...restProps
  } = props;
  return (
    <AntdForm.Item {...restProps} hasFeedback={hasFeedback}>
      {hasFeedback && help && (
        <AntdToolTip
          title={help}
          color={helpColor}
          placement={helpPosition}
          open={hasFeedback && help ? true : false}
        >
          <div />
        </AntdToolTip>
      )}
      {children}
    </AntdForm.Item>
  );
};
Form.Item = Item;

export { Form };
