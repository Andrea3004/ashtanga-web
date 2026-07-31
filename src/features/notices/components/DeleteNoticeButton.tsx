"use client";

import { deleteNoticeAction } from "../actions";

export function DeleteNoticeButton({ id, title }: { id: string; title: string }) {
  return (
    <form
      action={deleteNoticeAction}
      onSubmit={(event) => {
        if (!window.confirm(`이 공지를 삭제하시겠습니까?\n삭제한 공지는 복구할 수 없습니다.\n\n${title}`)) {
          event.preventDefault();
        }
      }}
    >
      <input name="id" type="hidden" value={id} />
      <button className="admin-link-danger" type="submit">
        삭제
      </button>
    </form>
  );
}
