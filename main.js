import AudioMotionAnalyzer from "audiomotion-analyzer.js";
// audio source
const audioElA = document.getElementById("audioA");
const audioElB = document.getElementById("audioB");
const master = new AudioContext();

function connect() {
  if (audioElA.src == null) {
    audio = audioElB;
  }
  if (audioElB.src == null) {
    audio = audioElA;
  }
}

// instantiate analyzer
const MainAnalyser = new AudioMotionAnalyzer(
  document.getElementById("containerMain"),
  {
    height: window.innerHeight - 50,
    mode: 1,
    barSpace: 0.6,
    showLeds: true
  }
);
const AnalyserA = new AudioMotionAnalyzer(
  document.getElementById("containerA"),
  {
    height: window.innerHeight - 50,
    mode: 0,
    barSpace: 0.6,
    showLeds: true
  }
);
const AnalyserB = new AudioMotionAnalyzer(
  document.getElementById("containerB"),
  {
    height: window.innerHeight - 50,
    mode: 0,
    barSpace: 0.6,
    showLeds: true
  }
);

// file upload 1
document.getElementById("TrackA").addEventListener("change", (e) => {
  let fileBlob = e.target.files[0];
  if (fileBlob) {
    audioElA.src = "";
    AnalyserA.disconnectInput(audioElA);
    var filename = $("#TrackA")
      .val()
      .replace(/.*(\/|\\)/, "");
    document.getElementById("Track1Name").innerText = "";
    document.getElementById("Track1Name").innerText =
      "Current Track: " + filename;
    audioElA.src = URL.createObjectURL(fileBlob);
    AnalyserA.connectInput(audioElA);
    //AnalyserA.connectOutput(master);
    audioElA.play();
  }
});

// file upload 2
document.getElementById("TrackB").addEventListener("change", (e) => {
  let fileBlob = e.target.files[0];
  if (fileBlob) {
    audioElB.src = "";
    AnalyserB.disconnectInput(audioElB);
    var filename = $("#TrackB")
      .val()
      .replace(/.*(\/|\\)/, "");
    document.getElementById("Track2Name").innerText = "";
    document.getElementById("Track2Name").innerText =
      "Current Track: " + filename;
    audioElB.src = URL.createObjectURL(fileBlob);
    AnalyserB.connectInput(audioElB);
    //AnalyserB.connectOutput(master);
    audioElB.play();
  }
});
