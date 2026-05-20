const dictionary = ["ABENDMUSIKEN", "ABENDMUSIK", "ANSCHAUUNGEN", "ANSCHAUUNG", "APFELSTRUDELS", "APFELSTRUDEL", "AUFGABEN" "AUFGABEN", "AUFGABES", "AUFGABE", "AUFGEHOBEN", "AUFHEBUNGEN", "AUFHEBUNG", "AUFS", "AUFWUCHS", "AUF", "AUSDRUCKSTANZE", "AUSDRUCKSTANZ", "BAUMKUCHEN", "BEREITSCHAFTSPOTENTIALS", "BEREITSCHAFTSPOTENTIAL", "BEWUSSTSEINSLAGEN", "BEWUSSTSEINSLAGE", "BIERWURSTS", "BIERWURST", "BISMARCKS", "BISMARCK", "BLITZKRIEGS", "BLITZKRIEG", "BLUTWURSTS", "BLUTWURST", "BONSPIELS", "BONSPIEL", "BRATWURSTS", "BRATWURST", "BRAUNSCHWEIGERS", "BRAUNSCHWEIGER", "BREMSSTRAHLUNGS", "BREMSSTRAHLUNG", "CURRYWURSTS", "CURRYWURST", "DUMMKOPFS", "DUMMKOPF", "FLAMMKUCHEN", "FLUGELHORNS", "FLUGELHORN", "FLUGELMAN", "FLUGELMEN", "FLUGELS", "FLUGEL", "GEBRAUCHSMUSIK", "GELANDESPRUNGS", "GELANDESPRUNG", "GEMEINSCHAFTEN", "GEMEINSCHAFTSGEFUHLE", "GEMEINSCHAFTSGEFUHL", "GEMEINSCHAFT", "GEMUTLICHKEITEN", "GEMUTLICHKEIT", "GESELLSCHAFTEN", "GESELLSCHAFT", "GESUNDHEIT", "GLOCKENSPIELS", "GLOCKENSPIEL", "GUGELHUPFS", "GUGELHUPF", "GUGLHUPFS", "GUGLHUPF", "HEILIGENSCHEINS", "HEILIGENSCHEIN", "HERRENVOLKS", "HERRENVOLK", "HONIGKUCHEN", "JAGDTERRIERS", "JAGDTERRIER", "JAGDWURSTS", "JAGDWURST", "KAFFEEKLATSCHEN", "KAFFEEKLATSCHES", "KAFFEEKLATSCH", "KATZBALGERS", "KATZBALGER", "KATZENJAMMERS", "KATZENJAMMER". "KINDERSPIELS", "KINDERSPIEL", "KIRSCHWASSERS", "KIRSCHWASSER", "KITSCHES", "KITSCH", "KLATSCHES", "KLATSCH", "KLETTERSCHUHE", "KLETTERSCHUH", "KNACKWURSTS", "KNACKWURST", "KNOCKWURSTS", "KNOCKWURST", "KOCHWURSTS", "KOCHWURST", "KRIEGSPIELS", "KRIEGSPIEL", "KRIEGSSPIELS", "KRIEGSSPIEL", "KUCHENS", "KUCHEN", "KUGELHOPF", "KUGELHOPS", "KULTURKAMPFES", "KULTURKAMPFS", "KULTURKAMPF", "LANDSKNECHTS", "LANDSKNECHT", "LEBKUCHENHERZEN", "LEBKUCHENHERZES", "LEBKUCHENHERZ", "LEBKUCHENS", "LEBKUCHEN", "LEHRJAHRE", "LEHRMAN", "LEHRMEN", "LEHRS", "LEHR", "LUFTMENSCHEN", "LUFTMENSCH", "MACHTPOLITIKS", "MACHTPOLITIK", "METTWURST", "MOZARTKUGELN", "MOZARTKUGEL", "NACHSCHLAGS", "NACHSCHLAG", "PFEFFERKUCHEN", "RAUSCHPFEIFEN", "RAUSCHPFEIFE", "REALPOLITIKERS", "REALPOLITIKER", "REALPOLITIKS", "REALPOLITIK", "REICHSLANDS", "REICHSLAND", "REICHSMARKS", "REICHSMARK", "ROTTWEILER", "SCHAFKOPF", "SCHAFSKOPF", "SCHUPFNUDELN", "SCHUPFNUDEL", "SCHUSSES", "SCHUSS", "SCHUTZENFESTE", "SCHUTZENFESTS", "SCHUTZENFEST", "SCHUTZHUND", "SCHWARMEREI", "SCHWARMERISCH", "SCHWARTZE", "SCHWARTZ", "SCHWARZBIERS", "SCHWARZBIER", "SINGSPIELE", "SINGSPIELS", "SINGSPIEL", "SITZKRIEGS", "SITZKRIEG", "SPINNBARKEITS", "SPINNBARKEIT", "STAHLHELME", "STAHLHELMS", "STAHLHELM", "STRUDELS", "STRUDEL", "TANZTHEATER", "UMWELTEN", "UMWELT", "UNTERMENSCHEN", "UNTERMENSCH", "VERFREMDUNGSEFFEKTE", "VERFREMDUNGSEFFEKT", "VOLKSGEISTER", "VOLKSGEIST", "VOLKSGEMEINSCHAFTEN", "VOLKSGEMEINSCHAFT", "VOLKSLIEDERS", "VOLKSLIEDER", "VOLKS", "VOLK", "WALPURGISNACHTE", "WALPURGISNACHT", "WEHRLITES", "WEHRLITE", "WEIHNACHTSMARKTE", "WEIHNACHTSMARKT", "WEISED", "WEISEMHEIMERS", "WEISENHEIMER", "WEISES", "WEISE", "WEISSWURST", "WELTANSCHAUUNGEN", "WELTANSCHAUUNG", "WELTSCHMERZEN", "WELTSCHMERZES", "WELTSCHMERZ", "WIENERWURST", "WISSENSCHAFT", "WUNDERKAMMERN", "WUNDERKAMMER", "WUNDERKINDER", "WUNDERKINDS", "WUNDERKIND", "WUNDERWAFFEN", "WUNDERWAFFE", "WUNDER", "WURSTS", "WURST", "ZEITGEBERS", "ZEITGEBER", "ZEITGEIST", "ZITTERBEWEGUNGEN", "ZITTERBEWEGUNG", "ZUGZWANGED", "ZUGZWANGING", "ZUGZWANGS", "ZUGZWANG", "ZWEIGELTS", "ZWEIGELT", "ZWEIHANDERS", "ZWEIHANDER", "ZWERGSPITZES", "ZWERGSPITZ", "ZWETSCHGENKUCHEN", "ZWIEBACKS", "ZWIEBACK", "ZWISCHENZUGS", "ZWISCHENZUG"];
function get_syl() {
  var syllable = document.getElementsByClassName("syllable")[0].innerHTML;
  return syllable;
}

function answer() {
  currentSyllable = get_syl();
  var words = [];
  if(currentSyllable != lastSyllable) {
    var word = "Can't find matching word!";
    for (var j = 0; j < dictionary.length; j++) {
      if (dictionary[j].toLowerCase().includes(currentSyllable)){
        words.push(dictionary[j]);
      }
    }
    var text = "    Words:\n  ";
    var len = Math.min(6, words.length);
    for (var j = 0; j < len; j++) {
    	// randomly choose a word in words
    	var index = Math.floor(Math.random() * (words.length - 1));
    	if (j < 3) {
    		text = text + words[index] + ",  ";
    		if (j == 2) text = text + "\n";
    	}
    	else {
    		if (j == len - 1) {
    			text = text + words[index];
    		}
    		else {
    			text = text + words[index] + ",  ";
    		}
    	}

    }
    document.getElementById("ans").innerText = text;
    lastSyllable = currentSyllable;
  }
}

function main() {
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      var syllable = document.getElementsByClassName("syllable")[0], syllableExists;
      if(typeof(syllable) == 'undefined' && syllable == null){
        syllableExists = false;
      } else {
        syllableExists = true;
      }
      if(syllableExists){
        const syllable = get_syl(), top = document.querySelector('.quickRules');
        if(document.getElementById("ans") == null){
          var ans = document.createElement("p");
          ans.id = "ans";
          top.append(ans);
        }
        hintInterval = setInterval(answer, 500);
      }
    }
  );
}

var hintInterval, toggle = true, currentSyllable, lastSyllable;

window.addEventListener("load", function () {
  main();
});
