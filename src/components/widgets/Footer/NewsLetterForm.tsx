import React, { ChangeEvent, FormEvent, Fragment, useState } from "react";
import CustomBtn from "../CustomBtn/CustomBtn";
import CustomInput from "../CustomInput/CustomInput";

type NewsLetterProps = {
  status: string | boolean | any;
  message: string | Node;
  onValidated: (arg: { EMAIL: string }) => void;
};

const NewsLetterForm = ({ status, message, onValidated }: NewsLetterProps) => {
  const [error, setError] = useState<string | null>("");
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    setEmail("");
    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  return (
    <Fragment>
      {/* SUCCESS SUBSCRIPTION MESSAGE */}
      <div className="context mx-auto flex justify-center">
        {status === "success" && (
          <div
            className="text-buttonColor font-bold pt-2"
            dangerouslySetInnerHTML={{ __html: message as string }}
          />
        )}
      </div>

      {/* SUBSCRIPTION FORM */}
      <form
        className="container mx-auto flex flex-col md:flex-row justify-center items-center
        space-x-0 md:space-x-5 space-y-3 md:space-y-0 px-5 md:px-0"
        onSubmit={handleSubmit}
      >
        <CustomInput
          id="email"
          className="text-xs text-white placeholder:text-white rounded-full border-2
          bg-transparent border-white pl-[14px] md:pl-[28px] px-48 py-3 md:py-4 md:px-72 w-full"
          inputProps={{
            type: "email",
            name: "email",
            placeholder: "Your Email",
            value: email,
            onChange: handleChange
          }}
        />

        <div className="inset-y-0 right-0 flex items-center">
          <CustomBtn
            className={
              "text-white font-medium px-8 py-3 rounded-full bg-buttonColor hover:bg-lightGreen"
            }
          >
            {status === "sending" ? "Sending..." : "Get Started"}
          </CustomBtn>
        </div>
      </form>

      {/* ERROR MESSAGE */}
      <div className="container mx-auto flex justify-center pt-3">
        {error && <div dangerouslySetInnerHTML={{ __html: error }} />}

        {status === "error" ? (
          <div
            dangerouslySetInnerHTML={{
              __html: message as string
            }}
          ></div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default NewsLetterForm;
