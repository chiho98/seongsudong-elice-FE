import { createSlice } from '@reduxjs/toolkit';
import { ModalState } from 'types/modal';

export const initialState: ModalState = {
  isConfirmModalOpen: false,
  isChatModalOpen: false,
  isMyRevervationModalOpen: false,
  isChatListModalOpen: false,
  isSendInputModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openConfirmModal: state => {
      state.isConfirmModalOpen = true;
    },
    closeConfirmModal: state => {
      state.isConfirmModalOpen = false;
    },
    openChatModal: state => {
      state.isChatModalOpen = true;
    },
    closeChatModal: state => {
      state.isChatModalOpen = false;
    },
    openMyReservationModal: state => {
      state.isMyRevervationModalOpen = true;
    },
    closeMyReservationModal: state => {
      state.isMyRevervationModalOpen = false;
    },
    openChatListModal: state => {
      state.isChatListModalOpen = true;
    },
    closeChatListModal: state => {
      state.isChatListModalOpen = false;
    },
    openSendInputModal: state => {
      state.isSendInputModalOpen = true;
    },
    closeSendInputModal: state => {
      state.isSendInputModalOpen = false;
    },
  },
});

export const {
  openConfirmModal,
  closeConfirmModal,
  openChatModal,
  closeChatModal,
  openMyReservationModal,
  closeMyReservationModal,
  openChatListModal,
  closeChatListModal,
  openSendInputModal,
  closeSendInputModal,
} = modalSlice.actions;
export default modalSlice;
