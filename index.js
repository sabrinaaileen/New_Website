let archiveButton = document.getElementById("show-button-two");
let upcomingButton = document.getElementById("show-button-one");
let eventUpcoming = document.getElementById("show-text-upcoming");
let showFive = document.createElement("li");
let showOne = document.createElement("li");
let showTwo = document.createElement("li");
let showThree = document.createElement("li");
let showFour = document.createElement("li");
let showSix = document.createElement("li");

function showUpcomingText() {
  document.getElementById("show-list-item-one").style.display = "list-item";
  document.getElementById("show-list-item-two").style.display = "list-item";
  document.getElementById("show-list-item-three").style.display = "list-item";
  document.getElementById("show-list-item-four").style.display = "list-item";
  document.getElementById("show-list-item-five").style.display = "list-item";
  document.getElementById("show-list-item-six").style.display = "list-item";
  //document.getElementById("show-list-item-seven").style.display = "list-item";
  //document.getElementById("show-list-item-eight").style.display = "list-item";
  document.getElementById("show-list").removeChild(showOne);
  document.getElementById("show-list").removeChild(showTwo);
  document.getElementById("show-list").removeChild(showThree);
  document.getElementById("show-list").removeChild(showFour);
  document.getElementById("show-list").removeChild(showFive);
  document.getElementById("show-list").removeChild(showSix);
}

let eventArchive = document.getElementById("event-text-upcoming");

function showArchiveText() {
  document.getElementById("show-list-item-one").style.display = "none";
  document.getElementById("show-list-item-two").style.display = "none";
  document.getElementById("show-list-item-three").style.display = "none";
  document.getElementById("show-list-item-four").style.display = "none";
  document.getElementById("show-list-item-five").style.display = "none";
  document.getElementById("show-list-item-six").style.display = "none";
  //document.getElementById("show-list-item-seven").style.display = "none";
  //document.getElementById("show-list-item-eight").style.display = "none";

  showSix.className = "show-list-item";
  showSix.innerHTML =
    "<b><u>2025</u></b> <br /> <b>Die Thrillerpfeifen: </b>  <br /> <br /> Mord in der Antonius-Tenne <br /> Mord im Fast-Food-Restaurant <br /> Mord im Chor <br /> Mord in der Fahrschule <br /> Mord beim Zahnarzt <br /> Mord beim Weiberfasching<br /> Mord im Zoo <br /> Mord im Casino";
  document.getElementById("show-list").appendChild(showSix);

  showFive.className = "show-list-item";
  showFive.innerHTML =
    "<b><u>2024</u></b> <br /><b>Penthesilea</b> <br /> nach Kleist, als Ourania, Regie: Martina Sedlmeier, Bühne: Kulturzentrum Luise<br /><b>Ich bin Sturm </b><br /> Stückentwicklung, als Spielleitung und Schauspielerin, als Charlotte, Bühne: Einstein Kultur München <br /> <b>Die Thrillerpfeifen: </b> <br /> Mord auf der Weihnachtsfeier <br /> Mord im Spukhaus <br /> Mord im Wirtshaus <br /> Mord im Fitnessclub <br /> Mord auf der Hochzeit <br /> Mord in der Cocktailbar <br /> Mord auf dem Campingplatz <br /> Mord in der Westernstadt <br /> Mord beim Fußballturnier <br /> Mord im Bahnhof <br /> Mord im E-Bike-Laden <br /> Mord im Dinopark <br /> Mord im Versicherungsbüro <br /> Mord im Yoga-Kurs";
  document.getElementById("show-list").appendChild(showFive);

  showOne.className = "show-list-item";
  showOne.innerHTML =
    "<b><u>2023</u></b> <br /><b>Die Thrillerpfeifen: </b><br /> Mord auf dem Christbaumverkauf <br /> Mord auf der Faschingsparty <br /> Mord auf dem Bauernhof <br /> Mord auf der Seerundfahrt <br /> Mord auf der Esoterikmesse <br /> Mord im Freibad <br /> Mord im Wellnesshotel (Doppelvorstellung) <br /> Mord beim Friseur <br /> Mord in der Schönheitsklinik <br />  Mord auf dem Reiterhof <br /><b>Die TELL </b> nach Friedrich Schiller, Regie: Thomas Stumpp, Bühne: Einstein Kultur München<br />";
  document.getElementById("show-list").appendChild(showOne);

  showTwo.className = "show-list-item";
  showTwo.innerHTML =
    "<b><u>2022</u></b> <br /><b>Die Bakchen </b>von Euripides, Regie: Bina Schröer, Bühne: theater...und so fort München";
  document.getElementById("show-list").appendChild(showTwo);

  showThree.className = "show-list-item";
  showThree.innerHTML =
    "<b><u>2021</u></b> <br /><b>Leonce und Lena</b> von Georg Büchner, Regie: Bernd Dechamps, Bühne: theater... und so fort München <br /> <b>Die Prinzessinnendramen</b> von Elfriede Jelinek, Regie: Bina Schröer, Bühne: ISSA München ";
  document.getElementById("show-list").appendChild(showThree);

  showFour.className = "show-list-item";
  showFour.innerHTML =
    "<b><u>2020</u></b> <br /><b>Lieblingsmenschen</b>von Laura de Weck, Regie: Bernd Dechamps, Bühne: ISSA München <br /> <b>Die kahle Sängerin </b> von Eugène Ionesco, Regie: Frank Schröder, Bühne: ISSA München";
  document.getElementById("show-list").appendChild(showFour);
}
archiveButton.addEventListener("click", showArchiveText);
upcomingButton.addEventListener("click", showUpcomingText);
