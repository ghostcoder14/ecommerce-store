"use client";

import { Modal } from '@/components/ui/model';

export default function setUppage() {
  return (
   <div className="p-4">
    <Modal title={'Test'} description={' Docs'} isOpen={true} onClose={ ()=>{} }>
        Children is there
      </Modal>
    </div>
  );
}
