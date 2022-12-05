import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import {
  useGetBankDetailsQuery,
  useUpdateBankDetailsMutation
} from "redux/api/bankApiSlice";
import { useUploadImageMutation } from "redux/api/uploadApiSlice";

interface useBankFormProps {
  bank_name?: string;
  bank_logo?: string | any;
}

const useBankForm = ({ bank_name, bank_logo }: useBankFormProps) => {
  const { id } = useParams();
  const { data } = useGetBankDetailsQuery(id as string);
  const [updateBankDetails, { isLoading }] = useUpdateBankDetailsMutation();
  const [upload] = useUploadImageMutation();
  const [bankName, setBankName] = useState<string | undefined>(data?.data.name);
  const [bankLogo, setBankLogo] = useState<string | any>(
    data?.data.logo.imageUrl
  );
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [previewLogo, setPreviewLogo] = useState<string>(
    data?.data.logo.imageUrl
  );

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  console.log("Bank Name: ", bankName);

  useEffect(() => {
    if (!bankLogo) {
      setPreviewLogo("");
      return;
    }

    if (typeof bankLogo === "string") {
      setPreviewLogo("");
      return;
    }

    const objectUrl = URL.createObjectURL(bankLogo);
    setPreviewLogo(objectUrl);

    const uploadImage = async () => {
      const formData = new FormData();
      formData.append("image", bankLogo);
      const res = await upload(formData).unwrap();

      if (res.status === "Success") {
        setBankLogo(res.data._id);
        setPreviewLogo("");
        toast.success("Image Uploaded Successfully");
        return;
      }

      toast.error(res.data.message);
    };

    if (bankLogo) {
      uploadImage();
      return;
    }

    return () => URL.revokeObjectURL(objectUrl);
  }, [bankLogo]);

  const openFileInput = () => {
    hiddenFileInput.current?.click();
  };

  const handleBankNameChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setBankName(e.target.value);
  };

  const isValidFileUploaded = (file: File) => {
    const validExtensions = ["png", "jpeg", "jpg"];
    const fileExtension = file.type.split("/")[1];
    return validExtensions.includes(fileExtension);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { files } = e.currentTarget;

    if (!files || !files[0]) {
      setErrorMessage("No file selected");
      return;
    }

    if (isValidFileUploaded(files[0])) {
      setBankLogo(files[0]);
      setErrorMessage("");
      return;
    }

    setErrorMessage("File not accepted");
  };

  const validateSelectedFileSize = () => {
    const MAX_FILE_SIZE = 5120; // 5MB

    if (!bankLogo) {
      setErrorMessage("Please choose a file");
      return;
    }

    const fileSizeKiloBytes = Number(bankLogo.size / 1024);

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMessage("File size is greater than maximum limit");
      return;
    }

    setErrorMessage("");
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const response = await updateBankDetails({
      id: id as string,
      name: bankName as string,
      logo: bankLogo
    }).unwrap();

    if (response.status === "Success") {
      toast.success(response.data.message);
    }

    validateSelectedFileSize();
  };

  const handlePress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.key === "enter") {
      handleSubmit(e);
    }
  };

  return {
    bankName,
    bankLogo,
    errorMessage,
    previewLogo,
    hiddenFileInput,
    isLoading,
    handleSubmit,
    handleBankNameChange,
    handleFileChange,
    handlePress,
    openFileInput
  };
};

export default useBankForm;
