import { message } from "antd";

export function showErrorMsg(htmlMsg: string) {
  message
    .error({
      content: <div dangerouslySetInnerHTML={{ __html: htmlMsg }} />,
    })
    .then();
}
