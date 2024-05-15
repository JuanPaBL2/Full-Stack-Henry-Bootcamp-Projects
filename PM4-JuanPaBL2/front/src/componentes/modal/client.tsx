"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Component() {
  const [openModal, setOpenModal] = useState(true);
  const router = useRouter()

  return (
    <>
      
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Compra Realizada con Exito!</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base  leading-relaxed text-gray-500 dark:text-gray-400">
              ¿desea volver a la pagina de inicio?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { 
            setOpenModal(false);
              setTimeout(() => {
                router.push("/")
              }, 1300)
            }}>Aceptar</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>Rechazar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function Component2({error}: any) {
  const [openModal, setOpenModal] = useState(true);
  const router = useRouter()

  return (
    <>
      
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Error al efectuar la compra</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base  leading-relaxed text-gray-500 dark:text-gray-400">
              {error.response.data.message}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { 
            setOpenModal(false);
              setTimeout(() => {
                router.push("/")
              }, 1300)
            }}>Volver a home</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>Intentar nuevamente</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

