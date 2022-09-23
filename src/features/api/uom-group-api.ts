import { useQuery } from "@tanstack/react-query";
import { client } from "features/api/axios";

type ApiRespose<T> = {
  result: number;
  data: T;
  error: Record<string, any> | null;
  errorMessage: string | null;
};

type UoM = {
  id: number;
  code: string;
  name: string;
  description: string;
  uomGroupId: number;
  displayOrder: number;
  isActive: boolean;
  companyId: number;
  isDeleted: boolean;
  createdDate: Date;
  createdBy: number;
  modifiedDate: Date;
  modifiedBy: number;
};

export type UoMGroupDetail = {
  id?: number;
  altUomId: number;
  baseUomId: number;
  alterQuantity: number;
  baseQuantity: number;
  isBaseUom: boolean;
  isActive: boolean;
};

export type UoMGroup = {
  id?: number;
  code?: string;
  name: string;
  description: string;
  isActive: boolean;
  canBeDeleted?: boolean;
  companyId?: number;
  isDeleted?: boolean;
  createdDate?: Date;
  createdBy?: number;
  modifiedDate?: Date;
  modifiedBy?: number;
  uomGroupDefinitions: UoMGroupDetail[];
};

export const useGetUoMListQuery = () => {
  return useQuery(["UOM_LIST"], {
    queryFn: async () => {
      return client.get<ApiRespose<UoM[]>>("/ecommerce-shop/v1/uom");
    },
    onError: (err: any) => {
      if ("errorMessage" in err || "errors" in err) {
        console.log(err.errorMessage);
        console.log(err.errors);
      }
    },
  });
};
