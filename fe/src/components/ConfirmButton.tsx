import { Button, Popconfirm } from "antd";
import React from "react";

interface ConfirmButtonProps {
  confirmTitle: string;
  confirmText: string;
  onConfirm: () => void;
  loading: boolean;
  buttonText: string;
  icon: React.ReactNode;
  danger?: boolean;
}

export const ConfirmButton = ({
  confirmTitle,
  confirmText,
  onConfirm,
  loading,
  buttonText,
  icon,
  danger,
}: ConfirmButtonProps) => (
  <Popconfirm
    title={confirmTitle}
    description={confirmText}
    onConfirm={onConfirm}
    okText="Yes"
    cancelText="No"
  >
    <Button type="primary" icon={icon} loading={loading} danger={danger}>
      {buttonText}
    </Button>
  </Popconfirm>
);
