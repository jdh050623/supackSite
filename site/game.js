function showTab(tabName){
    $('#tab1').hide();
    $('#tab2').hide();
    $('#tab3').hide();
    $(tabName).show();
}

function popup(){
    window.open("popup.html", "contact", "width=1030px, height=500px");
}

function more(){
    opener.location.href="game.html";
    self.close();
}