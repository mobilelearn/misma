window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var audio = document.getElementById('bgSong');
audio.src="BgMusik.mp3";
audio.load();
audio.play();
}

window.Script2 = function()
{
  var audio = document.getElementById('bgSong');
audio.src="BgMusik.mp3";
audio.load();
audio.play();
}

window.Script3 = function()
{
  var audio = document.getElementById('bgSong');
audio.src="BgMusik.mp3";
audio.load();
audio.pause();
}

};
