import React from 'react';
import { useRecoilState } from 'recoil';
import { Modal } from '@mantine/core';
import ReaderSettings from '../settings/ReaderSettings';
import { showingSettingsModalState } from '../../state/readerStates';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const ReaderSettingsModal: React.FC<Props> = (props: Props) => {
  const [showingSettingsModal, setShowingSettingsModal] = useRecoilState(showingSettingsModalState);

  return (
    <Modal
      opened={showingSettingsModal}
      // centered
      title="Reader Settings"
      onClose={() => setShowingSettingsModal(!showingSettingsModal)}
    >
      <ReaderSettings />
    </Modal>
  );
};

export default ReaderSettingsModal;
