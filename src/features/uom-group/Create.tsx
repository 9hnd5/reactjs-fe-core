import { Button, Card, Space, Typography } from "components";
import UoMForm from "features/uom-group/components/UoMForm";
import React from "react";

export default function UoMCreate() {
  const uomFormRef = React.useRef<{ onSubmit: () => void }>({
    onSubmit: () => false,
  });

  const handleClick = () => {
    uomFormRef.current.onSubmit();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: 1200,
          marginTop: 8,
        }}
      >
        <Typography.Title level={4}>Thêm mới UoM Group</Typography.Title>
        <Space>
          <Button type="text">Huỷ</Button>
          <Button type="primary" onClick={handleClick}>
            Thêm Mới
          </Button>
        </Space>
      </div>
      <Card style={{ width: 1200 }}>
        <UoMForm ref={uomFormRef} />
      </Card>
    </div>
  );
}
