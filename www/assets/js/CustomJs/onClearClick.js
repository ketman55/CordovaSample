function onClearClick() {
  // 入力欄を一番下に戻す（ブラウザ依存対応）
  // $(".is-icon-bar").css({"top": ""});
  // $(".is-icon-bar").css({"bottom": "0"});

  // 入力内容を削除する
  $("#inputTextBox").val("");
  return false;
}