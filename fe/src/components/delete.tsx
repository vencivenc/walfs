import React from "react";
import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal } from "antd";

interface DeleteProps {
  onClick: () => void;
  className?: string;
  icon?: React.ReactNode;
  danger?: boolean;
  confirm?: boolean;
  confirmTitle?: string;
}

const { confirm: confirmModal } = Modal;

export const Delete = ({
  onClick,
  className,
  icon,
  danger = true,
  confirm = false,
  confirmTitle = "Are you sure you want to proceed?",
}: DeleteProps) => {
  const onClickHandler = () => {
    if (confirm) {
      confirmModal({
        title: confirmTitle,
        icon: <ExclamationCircleFilled />,
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
          return onClick();
        },
      });
    } else {
      return onClick;
    }
  };
  return (
    <Button
      type="link"
      className={className}
      onClick={onClickHandler}
      style={{ padding: 0, height: "auto", border: 0 }}
      danger={danger}
    >
      {icon && icon}
      {!icon && <DeleteOutlined />}
    </Button>
  );
};
