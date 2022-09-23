import { Col, Form, Row, TInput, TSwitch } from "components";
import { FormValue } from "features/uom-group/components/UoMForm";
import { useFormContext } from "react-hook-form";

export default function UoMFormHeader() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValue>();

  return (
    <Form layout="horizontal" labelCol={{ span: 5 }} labelAlign="left">
      <Row gutter={[36, 8]}>
        <Col xs={20}>
          <Form.Item
            label="Tên UoM"
            required
            hasFeedback
            help={errors?.name?.message}
            validateStatus={errors?.name && "error"}
          >
            <TInput name="name" control={control} />
          </Form.Item>
        </Col>
        <Col xs={20}>
          <Form.Item label="Mô Tả">
            <TInput.TTextArea name="description" control={control} />
          </Form.Item>
        </Col>
        <Col xs={20}>
          <Form.Item label="Status">
            <TSwitch name="isActive" control={control} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
