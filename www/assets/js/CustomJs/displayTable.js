function displayTable(json){
    // テーブルヘッダの初期化
    $("#exampleHeader").empty();
    $("#exampleHeader").append("<tr><th>形態素</th><th>品詞</th></tr>");
    
    // テーブルBodyの初期化
    $("#exampleBody").empty();
    // テーブルとして表示するため、htmlを構築
    for (i = 0; i < json.mrd.length; i++) {
         // 必要なデータ
        var rows = "";
        var meaningDetail = "'" + "meaning" + i + "'";
        
        // 行追加開始
        rows += "<tr>";
        rows += "<td>";
        
        // 折り畳みの実装
        rows += "<div onclick=\"obj=document.getElementById("
            + meaningDetail
            + ").style;"
            + "obj.display=(obj.display=='none')?'block':'none';\">";
        
        // 表層表現
        rows += "<a style=\"cursor:pointer;\">";
        rows += json.mrd[i].surface;
        rows += "</a>";
        
        // タグを閉じる
        rows += "</div>";
        rows += "</td>";
                
        // 品詞
        rows += "<td>";
        rows += "<div onclick=\"obj=document.getElementById("
            + meaningDetail
            + ").style;"
            + "obj.display=(obj.display=='none')?'block':'none';\">";
        rows += "<a style=\"cursor:pointer;\">";
        rows += json.mrd[i].partOfSpeechMain;
        rows += "</a>";
        
        // 折り畳みの実装
        rows += "<div id="
            + meaningDetail
            + " style=\"display:none;clear:both;\">";
        rows += setDetails(json,i); // 中身は別関数で定義
        rows += "</div>";
        
        // タグを閉じる
        rows += "</div>";
        rows += "</td>";
                
        // 行を締める
        rows += "</tr>";
        $("#exampleBody").append(rows);
    }
}