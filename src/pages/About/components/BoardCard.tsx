import React, { Fragment, useState } from "react";
import TextTruncate from "react-text-truncate"; // recommend
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import Image from "components/widgets/Image/Image";
import BoardModal from "./BoardModal";

export interface BoardCardProps {
  image: string;
  name: string;
  position: string;
  shortBio?: string | null;
  fullBio: string;
}

interface UserInfoType {
  image: string;
  name: string;
  position: string;
  profileDetails: string;
}

const BoardCard = ({
  image,
  name,
  position,
  shortBio,
  fullBio
}: BoardCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    image: "",
    name: "",
    position: "",
    profileDetails: ""
  });

  const handleSetUserInfo = ({
    image,
    name,
    position,
    profileDetails
  }: UserInfoType) => {
    setIsOpen(true);
    setUserInfo({ image, name, position, profileDetails });
  };

  return (
    <Fragment>
      <BoardModal
        isOpen={isOpen}
        image={userInfo.image}
        name={userInfo.name}
        position={userInfo.position}
        profileDetails={userInfo.profileDetails}
        setIsOpen={setIsOpen}
      />

      <div
        className={`container mx-auto z-50 bg-white rounded-xl shadow-lg px-5 mt-5 w-[335px] h-[370px] md:w-[391px] lg:w-[491px] md:h-[320px]`}
      >
        <Image
          parentClassName="flex justify-center items-center -mt-12"
          image={image}
        />

        <div className="container flex flex-col justify-start mt-5 space-y-4 lg:space-y-8">
          <div className="">
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="font-medium pt-1">{position}</p>
          </div>

          <div className={`hidden md:block text-ellipsis overflow-hidden`}>
            <div className="">
              <TextTruncate
                line={3}
                element="p"
                truncateText="…"
                text={shortBio ? shortBio : fullBio}
              />
            </div>

            <CustomBtn
              className="block text-buttonColor font-bold mt-5"
              onClick={() =>
                handleSetUserInfo({
                  image,
                  name,
                  position,
                  profileDetails: fullBio
                })
              }
            >
              Learn More
            </CustomBtn>
          </div>

          <div
            className={`md:hidden text-ellipsis overflow-hidden leading-text-line-height`}
          >
            <div className="">
              <TextTruncate
                line={4}
                element="span"
                truncateText="…"
                text={shortBio ? shortBio : fullBio}
              />
            </div>

            <CustomBtn className={`text-buttonColor font-bold mt-5`}>
              Learn More
            </CustomBtn>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BoardCard;
