export interface ParamsRequest {
  page: string;
  query?: string;
}

export interface MyErrorType {
  message: string;
}

export interface CardRenderType {
  id: number;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string;
  accessories: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  mileage: number;
  buttonOnClick: (id: number) => void;
}

export interface CatalogCard {
  id: number;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
}

export interface ModalType {
  toggleModal: (value: boolean) => void;
  item: CatalogCard;
}

export interface CatalogList {
  catalogList: CatalogCard[];
  isRefreshing: boolean;
  isLoading: boolean;
  error: string;
  total: number;
}

export interface FavoriteList {
  favoriteList: CatalogCard[];
}

export interface StateInitial {
  catalog: CatalogList;
  favorite: FavoriteList;
}

interface PayloadCardResponse {
  data: CatalogCard[];
  total: number;
}
export interface ActionDataCard {
  type: string;
  payload: PayloadCardResponse;
}

export interface ActionError {
  type: string;
  payload: any;
}

export interface FormSubmitValue {
  carBrand: string;
}


export interface ResetForm {
  resetForm: () => void;
}

export interface FormSubmitType {
    handleSubmit: (value: FormSubmitValue, resetForm: ResetForm) => void
}