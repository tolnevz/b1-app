export interface ServerResponse<T> {
  page: number;
  pages: number;
  records: number;
  data: T[];
  code: number;
}

export interface IProduct {
  name: string;
  code: string;
  debitCorrespondenceAccountCode: string;
  creditCorrespondenceAccountCode: string;
  vatCorrespondenceAccountCode: string;
  expenseCorrespondenceAccountCode: string;
  advanceCorrespondenceAccountCode: string;
  incomeCorrespondenceAccountCode: string;
  employeeFullName: string;
  isActive: boolean;
  priority: boolean;
  addToVatRegister: boolean;
  addToStandardAuditDataFile: boolean;
  isPurchase: boolean;
  isSale: boolean;
  isWriteOff: boolean;
  isInternalMove: boolean;
  isPurchaseReturn: boolean;
  isSaleReturn: boolean;
  isReturnWithoutSale: boolean;
  isConsignment: boolean;
  isProduction: boolean;
  isLongTermAssetInput: boolean;
  isSaleVatNotWrite: boolean;
  isLongTermAssetOutput: boolean;
  isCashFlowSale: boolean;
  isSaleWithCashCheck: boolean;
  vatInvoiceTypeId: string;
  payerName: string;
  payerId: string;
  id: number;
  debitCorrespondenceAccountId: number;
  creditCorrespondenceAccountId: number;
  vatCorrespondenceAccountId: number;
  expenseCorrespondenceAccountId: number;
  advanceCorrespondenceAccountId: number;
  employeeId: number;
  incomeCorrespondenceAccountId: number;
  isUsed: boolean;
  gpaisActivityId: number;
  gpaisActivityName: string;
  gpaisDeliveryId: number;
  gpaisDeliveryName: string;
}

export interface SelectedModel {
  data: IProduct;
  selected: boolean;
  uuid: string;
}
