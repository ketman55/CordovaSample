function onButtonClick(dicType) {
  // inputTextを取得する
  var inputText = document.getElementById("inputTextBox").value;
  var url = "http://133.18.170.171:8080/v1/analysis?"
  + "inputText=" + inputText 
  + "&dicType=" + dicType;
    
  // 入力がなければ何もしない
  if(inputText === "" || inputText === null) return false;
  
  // 300文字overはご遠慮いただく
  if(inputText.length > 300){
    var alertText = "300文字以内で入力してください。"
    alert(alertText);
    return false;
  } 

  console.log("start fetch");
  fetch(url)
    .then(function(response){
      if(response.ok) { // 受信成功
       console.log("success");
       return response.json();
     } else {
        switch (response.status) {
          case 400: throw Error('400 INVALID_TOKEN');
          case 401: throw Error('401 UNAUTHORIZED');
          case 500: throw Error('500 INTERNAL_SERVER_ERROR');
          case 502: throw Error('502 BAD_GATEWAY');
          case 404: throw Error('404 NOT_FOUND');
          default:  throw Error('UNHANDLED_ERROR');
        };
     }
    })
    .then(function(json){
      // JSONデータを扱った処理など
      console.log(json.mrd.length);
      // 検索内容を記載する
      displayInputText(inputText, dicType);
      // 解析結果を記載する
      displayTable(json);
    })
    .catch(function(error){
      console.log(error)
      var alertText = "サーバとの通信に失敗しました。"
        + "恐れ入りますが、しばらく時間をおいてからご利用ください。";
        + "("
        + error
        + ")";
        alert(alertText);
    });

  /*
  // 入力があれば検索を開始する
  $.ajax({
    type: 'GET',
    url: url,
    contentType:'applycation/json',
    dataType: "json",
    data:{ 
      dicType : dicType,
      inputText : inputText
    }
  }).done(
    function (data, textStatus, jqXHR) {
      console.log(jqXHR.status);
      // 検索内容を記載する
      displayInputText(inputText, dicType);
      // 解析結果を記載する
      displayTable(data);
  }).fail(
    function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.status);
        console.log(textStatus);
        console.log(errorThrown.message);
        var alertText = "サーバとの通信に失敗しました。"
        + "恐れ入りますが、しばらく時間をおいてからご利用ください。";
        alert(alertText);
  });
  */

  return false;
}