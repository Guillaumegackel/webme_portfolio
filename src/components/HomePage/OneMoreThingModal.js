import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { MdGamepad } from "react-icons/md";
import Konami from "../../assets/Konami_Code.png"


export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 flex">
        <button
          type="button"
          onClick={openModal}
          className="text-white group border-2 px-6 py-3 mt-4 my-2 flex items-center hover:bg-[#e05915] hover:border-[#e05915]">
          Need a Tips ?
          <span className="group-hover:rotate-(-180) duration-500">
            <MdGamepad className="ml-3" />
          </span>
        </button>
      </div>

      <Transition appear show={isOpen} 
      as={Fragment}
      >
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    What the Hell is This "Konami Code" ?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
The Konami Code (Japanese: コナミコマンド) is a cheat code that appears in many Konami video games.<br/><br/>In the original code, the player has to press the following sequence of buttons on the game controller to enable a cheat or other effects.
<br/><br/>
<img src={Konami} alt="Konami Code sequence" />
<br/><br/>
Get back on the main page and try this sequence , maybe a cheeky rookie developer has imagined a secret function
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
