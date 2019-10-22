function onTextBoxClick() {
  console.log("execute onTextBoxClick");
  // 入力欄を一番上に引き上げる（ブラウザ依存対応）
  $(".is-icon-bar").css({"bottom": ""});
  $(".is-icon-bar").css({"top": "40px"});
  return false;
}
