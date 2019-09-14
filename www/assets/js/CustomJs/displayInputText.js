function displayInputText(inputText, dicType) {
    // 入力文
    $("#inputText").empty();
    inputText = "<h4><b>検索結果</b></h4>" + inputText;
    $("#inputText").append(inputText);
    
    // 辞書種類
    $("#dicType").empty();
    if (dicType === null || dicType === ""){
        // 一応nullの考慮をしておく
    } else if (dicType === "WAKAN") {
        dicType = "(種類：中世)"
    } else if (dicType === "WABUN") {
        dicType = "(種類：中古)"
    } else if (dicType === "MANYO") {
        dicType = "(種類：上代)" 
    }
    $("#dicType").append(dicType);
}