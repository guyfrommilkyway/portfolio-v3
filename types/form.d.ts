/// <reference path="types.ts" />

interface FormLabelProps {
  id: string;
  text: string;
}

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  isInvalid?: boolean;
  errMsg?: string;
  register: MyUseFormRegisterReturn;
}

interface FormErrorMessageProps {
  message: string | undefined;
}

interface FormButtonProps {
  isSubmitting: boolean;
  isRateLimited: boolean;
  errMsg: string;
}
