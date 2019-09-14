function setDetails(json,i){
    var rows = "";
    var googleQuery = "古典　単語　意味　" + json.mrd[i].surface;

    // 品詞情報を追加
    rows += "<b>[品詞]</b><br />";
    if(json.mrd[i].partOfSpeechSub1 !== "") 
        rows += json.mrd[i].partOfSpeechSub1 + "<br />";
    if(json.mrd[i].partOfSpeechSub2 !== "") 
        rows += json.mrd[i].partOfSpeechSub2 + "<br />";
    if(json.mrd[i].partOfSpeechSub3 !== "") 
        rows += json.mrd[i].partOfSpeechSub3 + "<br />";
    if(json.mrd[i].utilizationType !== "") 
        rows += json.mrd[i].utilizationType + "<br />";
    if(json.mrd[i].utilizationForm !== "") 
        rows += json.mrd[i].utilizationForm + "<br />";

    // 意味を追加
    rows += "<b>[現代語訳]</b><br />";
    // Web検索
    rows += "<a href=\"#\" onclick=\"displayGoogle("
    + "'" + googleQuery　+ "'"
    + ","
    + "'" + json.mrd[i].surface　+ "'"
    + ");\"><i><b>Google検索</b></i></a><br />";
    // APIで取得した意味
    if(json.mcd[i].meaning !== "") 
        rows += json.mcd[i].meaning + "<br />";
    
    return rows;
}