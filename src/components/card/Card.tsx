import { Card as AntdCard } from "antd";
import React from "react";
const { Meta: AntdMeta, Grid: AntdGrid } = AntdCard;
interface DefaultCardProps
  extends React.ComponentPropsWithoutRef<typeof AntdCard> {}
const Card = (props: DefaultCardProps) => {
  return <AntdCard {...props} />;
};

Card.Meta = AntdMeta;
Card.Grid = AntdGrid;

export { Card };
