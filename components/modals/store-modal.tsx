"use client";

import { userStore } from "@/hooks/use-model-store";
import { Modal } from "@/components/ui/model";

export const StoreModal = () =>{
    const storeMoadl = userStore();
return(
    <Modal 
    title={"Create Store"} 
    description={"Add a new store to manage products and categories"} 
    isOpen={storeMoadl.isOpen} 
    onClose={storeMoadl.onClose} >
        Future crate store form
    </Modal>
)
}