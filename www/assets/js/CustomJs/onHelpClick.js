function onHelpClick() {
    // 文章を設定
    $("#popbox-header").empty();
    $("#popbox-header").append("<h5>Help</h5>");
    
    // 文章を設定
    $("#popbox-main").empty();
    
var text = "[使い方]<br>"
+ "<ol>"
+ "<li>検索BOXに古文を入力します</li>"
+ "<li>「上代」「中古」「中世」いずれかをタップします</li>"
+ "<li>解析結果の表をタップすると詳細が表示されます</li>"
+ "</ol>"
+ "[検索ボタンの種類について]<br>"
+ "<ul>"
+ "<li>"
+ "上代<br>"
+ "<small>"
+ "およそ奈良時代までを指す<br>"
+ "古事記, 風土記, 日本書紀, 万葉集　など<br>"
+ "<a href=\"https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E3%81%AE%E4%B8%8A%E4%BB%A3%E6%96%87%E5%AD%A6%E5%8F%B2#%E4%B8%8A%E4%BB%A3%E6%96%87%E5%AD%A6%E3%81%AE%E4%B8%BB%E3%81%AA%E4%BD%9C%E5%93%81%E4%B8%80%E8%A6%A7\">その他の主な作品例はこちら</a>"
+ "</small> "
+ "</li>"
+ "<li>"
+ "中古<br>"
+ "<small>"
+ "およそ8世紀(続日本紀)~12世紀後半(唐物語)を指す<br>"
+ "古今和歌集, 土佐日記, 竹取物語, 伊勢物語, 落窪物語, 大和物語, 枕草子, 源氏物語, 紫式部日記, 和泉式部日記, 平中物語, 堤中納言物語, 更級日記, 讃岐典侍日記, 蜻蛉日記, 大鏡	など<br>"
+ "<a href=\"https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E3%81%AE%E4%B8%AD%E5%8F%A4%E6%96%87%E5%AD%A6%E5%8F%B2#%E4%B8%AD%E5%8F%A4%E6%96%87%E5%AD%A6%E3%81%AE%E4%B8%BB%E3%81%AA%E4%BD%9C%E5%93%81%E4%B8%80%E8%A6%A7\">その他の主な作品例はこちら</a>"
+ "</small>"
+ "</li>"
+ "<li>"
+ "中世<br>"
+ "<small>"
+ "およそ鎌倉時代~安土桃山時代を指す<br>"
+ "今昔物語集（本朝部）, 新古今和歌集，宇治拾遺物語, 十訓抄, 方丈記, 徒然草	など<br>"
+ "<a href=\"https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E3%81%AE%E4%B8%AD%E4%B8%96%E6%96%87%E5%AD%A6%E5%8F%B2#%E4%B8%AD%E4%B8%96%E6%96%87%E5%AD%A6%E3%81%AE%E4%B8%BB%E3%81%AA%E4%BD%9C%E5%93%81%E4%B8%80%E8%A6%A7\">その他の主な作品例はこちら</a>"
+ "</small>"
     
    $("#popbox-main").append(text);
    
    // popBoxを表示
    document.getElementById("popbox").style.display="block";
}