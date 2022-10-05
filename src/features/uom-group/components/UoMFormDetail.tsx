import { ColumnsType } from "antd/lib/table";
import { Button, Form, Table, TInput, TInputNumber, TSelect } from "components";
import { useGetUoMListQuery } from "features/api/uom-group-api";
import { Detail, FormValue } from "features/uom-group/components/UoMForm";
import React from "react";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
export default function UoMFormDetail() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValue>();
  const { fields, append, replace, remove } = useFieldArray({
    control,
    name: "uomGroupDefinitions",
  });

  const { data } = useGetUoMListQuery();

  const getUoMNameById = (id?: number) =>
    data?.data?.find((x) => x.id === id)?.name;

  const columns: ColumnsType<Detail> = [
    {
      title: (
        <Button size="small" type="primary" onClick={() => append({} as any)}>
          +
        </Button>
      ),
      width: 50,
    },
    {
      title: "Đơn Vị Qui Đổi",
      dataIndex: "baseQuantity",
      render: (_, record, index) => {
        const errorMessage =
          errors.uomGroupDefinitions?.[index]?.baseQuantity?.message;
        return index === 0 ? (
          record.baseQuantity
        ) : (
          <Form.Item
            hasFeedback
            help={errorMessage}
            validateStatus={errorMessage && "error"}
          >
            <TInput
              name={`uomGroupDefinitions.${index}.baseQuantity`}
              control={control}
            />
          </Form.Item>
        );
      },
      width: 200,
    },
    {
      title: "Tên Đơn Vị",
      dataIndex: "altUomId",
      render: (_, record, index) => {
        const errorMessage =
          errors.uomGroupDefinitions?.[index]?.altUomId?.message;
        return index === 0 ? (
          getUoMNameById(record.altUomId)
        ) : (
          <Form.Item
            hasFeedback
            help={errorMessage}
            validateStatus={errorMessage && "error"}
          >
            <TSelect
              name={`uomGroupDefinitions.${index}.altUomId`}
              control={control}
              options={data?.data.map((x) => ({ label: x.name, value: x.id }))}
            />
          </Form.Item>
        );
      },
      width: 200,
    },
    {
      title: "Qui Đổi",
      dataIndex: "alterQuantity",
      render: (_, record, index) => {
        const errorMessage =
          errors.uomGroupDefinitions?.[index]?.alterQuantity?.message;
        return index === 0 ? (
          record.alterQuantity
        ) : (
          <Form.Item
            hasFeedback
            help={errorMessage}
            validateStatus={errorMessage && "error"}
          >
            <TInputNumber
              name={`uomGroupDefinitions.${index}.alterQuantity`}
              control={control}
            />
          </Form.Item>
        );
      },
      width: 200,
    },
    {
      title: "Đơn Vị Cơ Sở",
      dataIndex: "baseUomId",
      render: (_, record, index) => {
        const errorMessage =
          errors.uomGroupDefinitions?.[index]?.baseUomId?.message;
        return (
          <Form.Item
            hasFeedback
            help={errorMessage}
            validateStatus={errorMessage && "error"}
          >
            <TSelect
              name={`uomGroupDefinitions.${index}.baseUomId`}
              control={control}
              options={data?.data.map((x) => ({ label: x.name, value: x.id }))}
            />
          </Form.Item>
        );
      },
      width: 200,
    },
    {
      title: "Action",
      align: "center",
      render: (_, record, index) =>
        index !== 0 && (
          <Button danger onClick={() => remove(index)}>
            Delete
          </Button>
        ),
      width: 200,
    },
  ];

  const dataSource = fields.map((x) => x);

  const baseUoMId = useWatch({
    control,
    name: `uomGroupDefinitions.${0}.baseUomId`,
  });

  //Add first row
  React.useEffect(() => {
    if (data && fields.length === 0) {
      append({
        baseQuantity: 1,
        baseUomId: data.data[0].id,
        altUomId: data.data[0].id,
        alterQuantity: 1,
      });
    }
  }, [data, fields.length]);

  //When baseUoMId change => replace with new
  React.useEffect(() => {
    if (baseUoMId) {
      replace([
        {
          baseQuantity: 1,
          baseUomId: baseUoMId,
          altUomId: baseUoMId,
          alterQuantity: 1,
        },
      ]);
    }
  }, [baseUoMId]);

  return (
    <Table<Detail>
      columns={columns}
      rowKey={(r) => r.id ?? 0}
      dataSource={dataSource}
      tableLayout="fixed"
      pagination={{
        showTotal: (total) => `Total ${total}`,
        showSizeChanger: true,
        showTitle: true,
        showQuickJumper: true,
        responsive: true,
        simple: true
      }}
    />
  );
}
