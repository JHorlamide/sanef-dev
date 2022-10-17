import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "components/widgets/Image/Image";
import { CLOSE_ICON } from "assets/icons";

interface BoardModalProps {
  image: string;
  name: string;
  position: string;
  profileDetails: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const BoardModal = ({
  image,
  name,
  position,
  profileDetails,
  isOpen,
  setIsOpen
}: BoardModalProps) => {
  return (
    <Fragment>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 mx-auto"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-modalColor bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={"div"}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                className={"flex"}
              >
                <Dialog.Panel className="w-full max-w-4xl h-fit transform overflow-hidden rounded-2xl bg-white ml-40 px-10 py-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between">
                    <Dialog.Title as="h3" className="w-1/6">
                      <Image image={image} />
                    </Dialog.Title>

                    <div className="mt-2 w-5/6 space-y-8">
                      <div className="flex flex-col">
                        <h1 className="text-xl font-bold">{name}</h1>
                        <h1 className="text-md">{position}</h1>
                      </div>

                      <p className="text-sm text-gray-500 leading-text-line-height">
                        {profileDetails}
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>

                <button className="w-40 h-5" onClick={() => setIsOpen(false)}>
                  <Image parentClassName="ml-5 mt-5" image={CLOSE_ICON} />
                </button>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
};

export default BoardModal;
