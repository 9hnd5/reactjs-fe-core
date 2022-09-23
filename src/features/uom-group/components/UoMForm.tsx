import { yupResolver } from "@hookform/resolvers/yup";
import UoMFormDetail from "features/uom-group/components/UoMFormDetail";
import UoMFormHeader from "features/uom-group/components/UoMFormHeader";
import { notification } from "components";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { UoMGroupDetail } from "features/api/uom-group-api";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  details: yup.array().of(
    yup.object({
      uomName: yup.string().required("UoM Name is required"),
      convertion: yup
        .number()
        .typeError("Convertion must be a number")
        .required("Convertion is required"),
      baseUoM: yup.string().required("Base UoM is required"),
    })
  ),
});
export type Detail = Pick<
  UoMGroupDetail,
  "id" | "baseUomId" | "altUomId" | "alterQuantity" | "baseQuantity"
>;
export type FormValue = {
  name: string;
  isActive: boolean;
  description: string;
  uomGroupDefinitions: Detail[];
};

const UoMForm = React.forwardRef<{ onSubmit: () => void }, {}>(
  (props: any, ref: any) => {
    const methods = useForm<FormValue>({ resolver: yupResolver(schema) });

    React.useImperativeHandle(ref, () => ({
      onSubmit: methods.handleSubmit(handleSubmitForm),
    }));

    const handleSubmitForm: SubmitHandler<FormValue> = (formValue) => {
      if (formValue.uomGroupDefinitions.length === 1)
        return notification.error({
          message: "Error",
          description: "Please fill the detail",
        });
      console.log(formValue);
    };

    return (
      <FormProvider {...methods}>
        <UoMFormHeader />
        <UoMFormDetail />
      </FormProvider>
    );
  }
);

export default UoMForm;
