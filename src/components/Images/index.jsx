import React from "react";
import "./images.scss";
import { useState } from "react";
import infoIcon from "./baseline_info_white_24dp.png";

export default () => {
  let images = [];

  images.push([
    "Michelangelo: The Creation of Adam",
    'The Creation of Adam (Italian: Creazione di Adamo) is a fresco painting by Italian artist Michelangelo, which forms part of the Sistine Chapel"s ceiling, painted c. 1508–1512. It illustrates the Biblical creation narrative from the Book of Genesis in which God gives life to Adam, the first man. The fresco is part of a complex iconographic scheme and is chronologically the fourth in the series of panels depicting episodes from Genesis. \n The painting has been reproduced in countless imitations and parodies.[2] Michelangelo"s Creation of Adam is one of the most replicated religious paintings of all time.',
    "https://wallpaperaccess.com/full/1221809.jpg",
  ]);
  images.push([
    "The Birth of Venus",
    "The Birth of Venus (Italian: Nascita di Venere [ˈnaʃʃita di ˈvɛːnere]) is a painting by the Italian artist Sandro Botticelli, probably made in the mid 1480s. It depicts the goddess Venus arriving at the shore after her birth, when she had emerged from the sea fully-grown (called Venus Anadyomene and often depicted in art). The painting is in the Uffizi Gallery in Florence, Italy.",
    "https://wallpaperaccess.com/full/1197513.jpg",
  ]);
  images.push([
    "The Course of Empire",
    "The Course of Empire is a series of five paintings created by Thomas Cole in the years 1833–1836. It is notable in part for reflecting popular American sentiments of the times, when many saw pastoralism as the ideal phase of human civilization, fearing that empire would lead to gluttony and inevitable decay. The theme of cycles is one that Cole returned to frequently, such as in his The Voyage of Life series. The Course of Empire comprises the following works: The Course of Empire – The Savage State; The Arcadian or Pastoral State; The Consummation of Empire; Destruction; and Desolation. All the paintings are oil on canvas, and all are 39.5 inches by 63.5 inches (100 cm by 161 cm) except The Consummation of Empire which is 51″ by 76″ (130 cm by 193 cm).",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg/1280px-Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg",
  ]);
  images.push([
    "The Fallen Angel",
    "The L’Ange Dechu, or Fallen Angel, may be one of the hottest artworks ever made. A winged nude shields his face behind flexed arms. His mane of hair snaps in the wind, and brows curl over red-rimmed eyes and a tear of anger. His body, of course, is perfect. His posture appears reposed, but each muscle is flexed with potential energy. Cast from heaven—this is the moment before he rises again.",
    "https://arthistoryproject.com/site/assets/files/11712/alexandre_cabanel-fallen_angel-1847-obelisk-art-history.webp",
  ]);
  images.push([
    "The Consummation of Empire",
    "Cole's 1833 sketch for the arrangement of the paintings around Reed's fireplace: the sketch also shows above the paintings three aspects of the sun: left (rising); center (zenith); right (setting) The Savage State The Consummation Destruction The Arcadian or Pastoral State Desolation",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Cole_Thomas_The_Consummation_The_Course_of_the_Empire_1836.jpg/1920px-Cole_Thomas_The_Consummation_The_Course_of_the_Empire_1836.jpg",
  ]);
  images.push([
    "Competition Panel",
    "Sacrifice of Isaac",
    "http://www.bc.edu/bc_org/avp/cas/ashp/ghiberti-sacrifice-isaac.jpg",
  ]);
  images.push([
    "Competition Panel",
    "Sacrifice of Isaac",
    "https://maitaly.files.wordpress.com/2011/03/brunelleschi.jpg",
  ]);
  images.push([
    "Crucifix",
    "Crucifix",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Cappella_gondi_di_smn,_crocifisso_di_brunelleschi,_1410-145_ca.JPG",
  ]);
  images.push([
    "St Mark",
    "St Mark",
    "https://www.oneonta.edu/faculty/farberas/arth/Images/110images/sl4images/Donatello_Mark.jpg",
  ]);
  images.push([
    "St John the Baptist",
    "St John the Baptist",
    "https://upload.wikimedia.org/wikipedia/en/6/68/StJohntheBaptistGhiberti.JPG",
  ]);
  images.push([
    "Crucifix",
    "Crucifix",
    "https://santacroceinflorence.files.wordpress.com/2013/04/crucifixion1.jpg",
  ]);
  images.push([
    "St Peter",
    "St Peter",
    "http://uploads8.wikiart.org/images/filippo-brunelleschi/saint-peter-1413.jpg!Large.jpg",
  ]);
  images.push([
    "Lamentation Over the Dead Christ",
    "Lamentation Over the Dead Christ",
    "https://www.nationalgallery.org.uk/server.iip?FIF=/fronts/N-1078-00-000037-WZ-PYR.tif&CNT=1&HEI=371&QLT=85&CVT=jpeg",
  ]);
  images.push([
    "The Pazzi Madonna",
    "Madonna and Child",
    "http://www.wga.hu/art/d/donatell/1_early/various/pazzi.jpg",
  ]);
  images.push([
    "Tribute Money",
    "Tribute Money",
    "https://upload.wikimedia.org/wikipedia/commons/b/b0/Masaccio7.jpg",
  ]);
  images.push([
    "Descent from the Cross",
    "Descent from the Cross",
    "https://upload.wikimedia.org/wikipedia/commons/1/1a/Weyden_Deposition.jpg",
  ]);
  images.push([
    "Holy Trinity",
    "Holy Trinity",
    "https://upload.wikimedia.org/wikipedia/commons/d/d2/Masaccio,_trinità.jpg",
  ]);
  images.push([
    "Annunciation of the Virgin",
    "Annunciation of the Virgin",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/La_Anunciación,_by_Fra_Angelico,_from_Prado_in_Google_Earth_-_main_panel.jpg/1280px-La_Anunciación,_by_Fra_Angelico,_from_Prado_in_Google_Earth_-_main_panel.jpg",
  ]);
  images.push([
    "Madonna of the Clouds",
    "Madonna and Child with Angels and Cherubs",
    "http://mfas3.s3.amazonaws.com/objects/SC566.jpg",
  ]);
  images.push([
    "Expulsion from the Garden of Eden",
    "Expulsion from the Garden of Eden",
    "https://upload.wikimedia.org/wikipedia/commons/0/02/Expulsion_from_the_Garden_of_Eden_Masaccio_Cappella_Brancacci.jpg",
  ]);
  images.push([
    "David",
    "David",
    "http://www.oscarwildetours.com/wp-content/uploads/2015/10/Bargello-Davide-2.jpg",
  ]);
  images.push([
    "The Ghent Altarpiece",
    "Adoration of the Mystic Lamb",
    "http://www.thehistoryblog.com/wp-content/uploads/2012/02/open-altarpiece.jpg",
  ]);
  images.push([
    "Portrait of a Man with a Red Turban",
    "Portrait of a Man with a Red Turban",
    "https://upload.wikimedia.org/wikipedia/commons/8/8b/Portrait_of_a_Man_by_Jan_van_Eyck-small.jpg",
  ]);
  images.push([
    "Virgin and Child with Canon Joris van der Paele and the saints Donatian and George",
    "Virgin and Child with Canon Joris van der Paele and the saints Donatian and George",
    "http://www.wga.hu/art/e/eyck_van/jan/21paele/21paele.jpg",
  ]);
  images.push([
    "Madonna of Chancelor Rolin",
    "Virgin and Child with Chancellor Nicolas Rolin",
    "https://upload.wikimedia.org/wikipedia/commons/1/14/Jan_van_Eyck_070.jpg",
  ]);
  images.push([
    "The San Marco Altarpiece",
    "Virgin and Child with the saints Cosmas, Damian, Lawrence, John the Evangelist, Mark, Dominic, Peter the Martyr, Francis",
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Fra_Angelico_060.jpg",
  ]);
  images.push([
    "Pietà of Villeneuve-lès-Avignon",
    "Pietà",
    "https://upload.wikimedia.org/wikipedia/commons/f/fb/Enguerrand_Quarton,_La_Pietà_de_Villeneuve-lès-Avignon_(c._1455).jpg",
  ]);
  images.push([
    "Coronation of the Virgin ",
    "Coronation of the Virgin ",
    "https://upload.wikimedia.org/wikipedia/commons/8/80/Filippo_Lippi_-_Incoronazione_della_Vergine_-_Google_Art_Project.jpg",
  ]);
  images.push([
    "Nativity",
    "Nativity",
    "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tr%C3%ADptico_de_la_vida_de_la_Virgen_(Bouts).jpg",
  ]);
  images.push([
    "The Camaldolese Alterpiece",
    "Baptism of Christ",
    "https://upload.wikimedia.org/wikipedia/commons/5/5a/Piero_della_Francesca_-_Baptism_of_Christ_-_WGA17595.jpg",
  ]);
  images.push([
    "Herod's Banquet",
    "Herod's Banquet",
    "https://upload.wikimedia.org/wikipedia/commons/4/46/Fra_Filippo_Lippi_-_Herod's_Banquet_-_WGA13286.jpg",
  ]);
  images.push([
    "Last Judgement",
    "Last Judgement",
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Petrus_Christus_-_The_Last_Judgement_-_WGA04844.jpg",
  ]);
  images.push([
    "Flagellation of Christ",
    "Flagellation of Christ",
    "https://upload.wikimedia.org/wikipedia/commons/2/2e/Piero_della_Francesca_042_Flagellation.jpg",
  ]);
  images.push([
    "A Muse or Calliope",
    "A Muse or Calliope",
    "http://artintheblood.typepad.com/.a/6a0120a570a392970b0168e781c59b970c-pi",
  ]);
  images.push([
    "Transfiguration of Christ",
    "Transfiguration of Christ",
    "http://www.wga.hu/art/b/bellini/giovanni/1459/015trans.jpg",
  ]);
  images.push([
    "Nativity",
    "Nativity",
    "https://upload.wikimedia.org/wikipedia/commons/5/5d/Petrus_Christus_-_The_Nativity_-_WGA04849.jpg",
  ]);
  images.push([
    "The San Zeno Altarpiece",
    "Virgin and Child with the saints Peter, Paul, John the Evangelist, Zeno, Benedict, Lawrence, Gregory and John the Baptist ",
    "http://img.youtube.com/vi/rTey6h4BQhc/0.jpg",
  ]);
  images.push([
    "St Mary Magdalene",
    "St Mary Magdalene",
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Donatello,_maria_maddalena_02.JPG",
  ]);
  images.push([
    "Agony in the Garden ",
    "Agony in the Garden ",
    "http://www.arte.it/foto/600x450/a4/171-800px-Giovanni_Bellini_002.jpg",
  ]);
  images.push([
    "Crucifixion",
    "Crucifixion",
    "https://upload.wikimedia.org/wikipedia/commons/5/56/Weyden_Christ_on_the_Cross_with_Mary_and_St_John.jpg",
  ]);
  images.push([
    "Death of the Virgin",
    "Death of the Virgin",
    "http://mini-site.louvre.fr/mantegna/images/section4/zoom/04_06.jpg",
  ]);
  images.push([
    "Last Supper",
    "Last Supper",
    "https://upload.wikimedia.org/wikipedia/commons/d/dc/Dieric_Bouts_-_The_Last_Supper_-_WGA03003.jpg",
  ]);
  images.push([
    "Portrait of a Young Girl ",
    "Portrait of a Young Girl ",
    "https://upload.wikimedia.org/wikipedia/commons/c/ce/Petrus_Christus_-_Portrait_of_a_Young_Woman_-_Google_Art_Project.jpg",
  ]);
  images.push([
    "Agony in the Garden",
    "Agony in the Garden",
    "https://www.nationalgallery.co.uk/static/images/products/large/NG1417.jpg",
  ]);
  images.push([
    "Annunciation of the Virgin",
    "Annunciation of the Virgin",
    "https://upload.wikimedia.org/wikipedia/commons/5/52/Cosmè_Tura_039.jpg",
  ]);
  images.push([
    "The Brera Altarpeice",
    "Virgin and Child with the saints John the Baptist, Bernardino of Siena, Jerome, Francis, Peter the Martyr, Andrew, Four Angels and the Donor Federico da Montefeltro",
    "https://upload.wikimedia.org/wikipedia/commons/9/9e/Piero_della_Francesca_046.jpg",
  ]);
  images.push([
    "Annunciation of the Virgin",
    "Annunciation of the Virgin",
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Leonardo_Da_Vinci_-_Annunciazione.jpeg",
  ]);
  images.push([
    "Gonfalon with a Pietà",
    "Pietà with the saints Jerome and Mary Magdalene",
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Pietro_Perugino_cat07.jpg",
  ]);
  images.push([
    "Portrait of Ginevra de' Benci",
    "Portrait of Ginevra de' Benci",
    "https://upload.wikimedia.org/wikipedia/commons/3/39/Leonardo_da_Vinci_-_Ginevra_de'_Benci_-_Google_Art_Project.jpg",
  ]);
  images.push([
    "Adoration of the Magi",
    "Adoration of the Magi",
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/Botticelli_-_Adoration_of_the_Magi_(Zanobi_Altar)_-_Uffizi.jpg",
  ]);
  images.push([
    "St Francis in Ecstasy",
    "St Francis in Ecstasy",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Giovanni_Bellini_St_Francis_in_Ecstasy.jpg",
  ]);
  images.push([
    "The San Giobbe Altarpiece",
    "Virgin and Child with the saints Francis, John the Baptist, Job, Dominic, Sebastian, Louis of Toulouse, and three musician angels",
    "https://upload.wikimedia.org/wikipedia/commons/4/40/Pala_di_san_giobbe_01.jpg",
  ]);
  images.push([
    "Primavera (The Spring)",
    "The Spring",
    "https://upload.wikimedia.org/wikipedia/commons/3/3c/Botticelli-primavera.jpg",
  ]);
  images.push([
    "Virgin of the Rocks",
    "The Virgin with the Infant St John the Baptist adoring the Christ Child accompanied by an Angel",
    "https://upload.wikimedia.org/wikipedia/commons/e/e4/Leonardo_Da_Vinci_-_Vergine_delle_Rocce_(Louvre).jpg",
  ]);
  images.push([
    "Lady with an Ermine",
    "Portrait of Cecilia Gallerani",
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/The_Lady_with_an_Ermine.jpg",
  ]);
  images.push([
    "Virgin of Jacob Floreins",
    "Madonna and Child with the saints James and St. Dominic presenting the Donors and their family",
    "https://upload.wikimedia.org/wikipedia/commons/2/26/Hans_Memling_La_Vierge_et_l_Enfant_entre_Saint_Jacques_et_Saint_Dominique_1488_1490.jpg",
  ]);
  images.push([
    "Birth of Venus",
    "Birth of Venus",
    "https://upload.wikimedia.org/wikipedia/commons/4/47/La_nascita_di_Venere_(Botticelli).jpg",
  ]);
  images.push([
    "The Frari Triptych",
    "Madonna and Child with two angels and the saints Mark, Peter, Nicholas and Benedict",
    "http://www.wga.hu/art/b/bellini/giovanni/1480-89/2frari/134frar0.jpg",
  ]);
  images.push([
    "Barbarigo Altarpiece",
    "Madonna and Child with the saint Augustine and Mark presenting Doge Agostino Barbarigo",
    "http://www.wga.hu/art/b/bellini/giovanni/1480-89/3barbari/135barb.jpg",
  ]);
  images.push([
    "Lamentation Over the Dead Christ",
    "Lamentation Over the Dead Christ",
    "http://www.wga.hu/art/b/botticel/91late/01lament.jpg",
  ]);
  images.push([
    "The San Marco Altarpiece",
    "Coronation of the Virgin with the saints John the Evangelist, Augustine, Jerome and Eligius",
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Fra_Angelico_060.jpg",
  ]);
  images.push([
    "Hunting on the Lagoon",
    "Hunting on the Lagoon (see Cat. )",
    "https://upload.wikimedia.org/wikipedia/commons/5/50/Carpaccio,_Vittore_-_Hunting_on_the_Lagoon_(recto)%3B_Letter_Rack_(verso)_-_Google_Art_Project.jpg",
  ]);
  images.push([
    "Two Venetian Ladies on a Terrace",
    "Two Venetian Ladies on a Terrace",
    "https://upload.wikimedia.org/wikipedia/commons/1/1d/Vittore_Carpaccio_079.jpg",
  ]);
  images.push([
    "Madonna of the Stairs",
    "Madonna and Child with Two Putti",
    "http://www.wga.hu/art/m/michelan/1sculptu/1/1stairs.jpg",
  ]);
  images.push([
    "The Convertite Altarpiece",
    "Holy Trinity",
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/Botticelli_Trinity.jpg",
  ]);
  images.push([
    "Crucifix",
    "Crucifix",
    "http://static.panoramio.com/photos/large/6661912.jpg",
  ]);
  images.push([
    "Self-Portrait Holding Thistle",
    "Self-Portrait Holding Thistle",
    "https://upload.wikimedia.org/wikipedia/commons/d/da/Albrecht-self.jpg",
  ]);
  images.push([
    "Triptych of St Uncumber (or St Liberata)",
    "Triptych of St Liberata",
    "http://www.artribune.com/wp-content/uploads/2016/01/Jheronimus-Bosch-Trittico-di-Santa-Liberata-dopo-il-restauro.jpg",
  ]);
  images.push([
    "Last Supper ",
    "Last Supper ",
    "http://www.stilearte.it/wp-content/uploads/2014/10/leonardo-da-vinci-ultima-cena-e1413262829355.jpg",
  ]);
  images.push([
    "Virgin of the Rocks",
    "The Virgin with the Infant Saint John the Baptist adoring the Christ Child accompanied by an Angel",
    "https://upload.wikimedia.org/wikipedia/commons/4/49/Leonardo_da_Vinci_Virgin_of_the_Rocks_(National_Gallery_London).jpg",
  ]);
  images.push([
    "Pietà",
    "Pietà",
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/Michelangelo's_Pieta_5450.jpg",
  ]);
  images.push([
    "Portrait of Oswolt Krel",
    "Portrait of Oswolt Krel",
    "https://upload.wikimedia.org/wikipedia/commons/9/9c/Dürer_Oswolt_Krel.jpg",
  ]);
  images.push([
    "Santa Corona Altarpiece",
    "Baptism of Christ",
    "https://upload.wikimedia.org/wikipedia/commons/6/6e/Vicenza,_santa_corona,_altare_garzadori_con_battesimo_di_cristo_di_giovanni_bellini_03.JPG",
  ]);
  images.push([
    "Self-Portrait in a Fur-Collared Robe",
    "Self-Portrait in a Fur-Collared Robe",
    "https://upload.wikimedia.org/wikipedia/commons/6/68/Dürer_-_Selbstbildnis_im_Pelzrock_-_Alte_Pinakothek.jpg",
  ]);
  images.push([
    "Garden of Earthly Delights",
    "Garden of Earthly Delights",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution.jpg/1280px-The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution.jpg",
  ]);
  images.push([
    "Nativity of the Rabbits (Presepe dei Conigli)",
    "Nativity",
    "http://www.diocesiverona.it/s2ewdiocesiverona/allegati/14916/9-B-01_a_Il%20Presepe%20dei%20conigli%20di%20Gerolamo%20dai%20Libri%20-%20B.jpg",
  ]);
  images.push([
    "The Castelfranco Madonna",
    "Madonna and Child with the saints Francis and Nicasius (?)",
    "https://upload.wikimedia.org/wikipedia/commons/3/36/Giorgione_-_Pala_di_Castelfranco.jpg",
  ]);
  images.push([
    "David",
    "David",
    "http://cdn.uffizi.org/wp-content/uploads/2013/02/michelangelo-david.jpg",
  ]);
  images.push([
    "Adam and Eve",
    "Adam and Eve",
    "http://www.metmuseum.org/toah/images/h5/h5_19.73.1.jpg",
  ]);
  images.push([
    "The Ansidei Madonna ",
    "Virgin and Child with the saints John the Baptist and Nicholas",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/PalaAnsidei.jpg/300px-PalaAnsidei.jpg",
  ]);
  images.push([
    "Terranuova Madonna",
    "Madonna and Child with St John the Baptist and an Infant Saint",
    "https://upload.wikimedia.org/wikipedia/commons/b/bb/Madona_Terranova.jpg",
  ]);
  images.push([
    "Assumption of the Virgin",
    "Assumption of the Virgin",
    "https://upload.wikimedia.org/wikipedia/commons/3/37/Lorenzo_Lotto_039.jpg",
  ]);
  images.push([
    "The Tempest (La Tempesta)",
    "The Tempest",
    "https://upload.wikimedia.org/wikipedia/commons/8/8f/Giorgione_019.jpg",
  ]);
  images.push([
    "Christ among the Doctors",
    "Christ among the Doctors",
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Albrecht_Dürer_-_Jesus_among_the_Doctors_-_Google_Art_Project.jpg",
  ]);
  images.push([
    "Feast of the Rose Garlands ",
    "Feast of the Rose Garlands ",
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/Albrecht_Dürer_-_Feast_of_Rose_Garlands_-_Google_Art_Project.jpg",
  ]);
  images.push([
    "The Borghese Deposition (The Baglioni Altarpiece)",
    "Entombment",
    "https://upload.wikimedia.org/wikipedia/commons/f/f2/Raffaello,_pala_baglioni,_deposizione.jpg",
  ]);
  images.push([
    "Adam and Eve",
    "Adam and Eve",
    "https://c2.staticflickr.com/6/5154/13988974449_4c2df8bf07_b.jpg",
  ]);
  images.push([
    "The Old Woman (La Vecchia)",
    "The Old Woman",
    "https://upload.wikimedia.org/wikipedia/commons/b/b0/Giorgione_051.jpg",
  ]);
  images.push([
    "Delphic Sibyl",
    "The Delphic Sibyl",
    "https://upload.wikimedia.org/wikipedia/commons/b/b0/Michelangelo_-_Delphic_Sibyl.jpg",
  ]);
  images.push([
    "Fall and Expulsion from the Garden of Eden",
    "Fall and Expulsion from the Garden of Eden",
    "https://upload.wikimedia.org/wikipedia/commons/9/9e/Michelangelo,_Fall_and_Expulsion_from_Garden_of_Eden_00.jpg",
  ]);
  images.push([
    "School of Athens",
    "School of Athens",
    "http://www.museum-shop.it/WebRoot/ce_it/Shops/990289924/5092/F103/6538/F3F4/42AC/C0A8/8007/B76D/La_scuola_di_Atene.jpg",
  ]);
  images.push([
    "Creation of Adam",
    "Creation of Adam",
    "https://upload.wikimedia.org/wikipedia/commons/b/b4/Michelangelo_-_Creation_of_Adam.jpg",
  ]);
  images.push([
    "The Alba Madonna",
    "Madonna and Child with the Infant St John the Baptist",
    "https://upload.wikimedia.org/wikipedia/commons/f/f2/Raphael_-_The_Alba_Madonna_-_Google_Art_Project.jpg",
  ]);
  images.push([
    "Portrait of Pope Julius II",
    "Portrait of Pope Julius II",
    "https://upload.wikimedia.org/wikipedia/commons/a/af/Pope_Julius_II.jpg",
  ]);
  images.push([
    "Triumph of Galatea",
    "Triumph of Galatea",
    "https://dohertymgv.files.wordpress.com/2013/02/galatea-detail-of-mermen-and-dolphins-1506.jpg",
  ]);
  images.push([
    "The Sistine Madonna",
    "Madonna and Child with the saints Sixtus and Barbara",
    "https://upload.wikimedia.org/wikipedia/commons/d/d7/RAFAEL_-_Madonna_Sixtina_(Gemäldegalerie_Alter_Meister,_Dresde,_1513-14._Óleo_sobre_lienzo,_265_x_196_cm).jpg",
  ]);
  images.push([
    "The Feast of the Gods",
    "The Feast of the Gods",
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Feastofthegods.jpg",
  ]);
  images.push([
    "Christ Carrying the Cross",
    "Christ Carrying the Cross",
    "http://66.media.tumblr.com/b77f0e064ef49c451069586ea8ea3be2/tumblr_o9wtqsHGKE1syzcjgo1_1280.jpg",
  ]);
  images.push([
    "Pietà",
    "Pietà",
    "https://upload.wikimedia.org/wikipedia/commons/8/86/Sebastiano_del_piombo,_pietà.jpg",
  ]);
  images.push([
    "Assumption of the Virgin",
    "Assumption of the Virgin",
    "https://upload.wikimedia.org/wikipedia/commons/f/f2/Tiziani,_assunta_01.jpg",
  ]);
  images.push([
    "Transfiguration",
    "Transfiguration of Christ",
    "http://3.bp.blogspot.com/-cuXM0EnbVNA/UCAV3g7OuLI/AAAAAAAABNQ/drask-S7UAI/s1600/7+-+The+Transfiguration.jpg",
  ]);
  images.push([
    "Rest on the Flight into Egypt",
    "Rest on the Flight into Egypt",
    "https://upload.wikimedia.org/wikipedia/commons/4/45/Joachim_Patinir_-_Rest_during_the_Flight_to_Egypt,_Museo_del_Prado.jpg",
  ]);
  images.push([
    "Portrait of Emperor Maximilian I",
    "Portrait of Emperor Maximilian I",
    "https://upload.wikimedia.org/wikipedia/commons/3/35/Albrecht_Dürer_-_Portrait_of_Maximilian_I_-_Google_Art_Project.jpg",
  ]);
  images.push([
    "Transfiguration of Christ",
    "Transfiguration of Christ",
    "https://upload.wikimedia.org/wikipedia/commons/4/42/Gerard_David_-_The_Transfiguration_of_Christ_-_WGA06014.jpg",
  ]);
  images.push([
    "Madonna and Child with Saints",
    "Enthroned Maddona and Child with the saints Catherine of Alexandria, Leonard, Augustine, and Apollonia",
    "http://images.metmuseum.org/CRDImages/ep/original/DT2956.jpg",
  ]);
  images.push([
    "Portrait of Desiderius Erasmus of Rotterdam",
    "Portrait of Desiderius Erasmus of Rotterdam",
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Holbein-erasmus.jpg",
  ]);
  images.push([
    "Tomb of Giuliano de Medici",
    "Tomb of Giuliano de Medici",
    "http://www.wga.hu/art/m/michelan/1sculptu/medici/1giulia.jpg",
  ]);
  images.push([
    "Tomb of Lorenzo de Medici",
    "Tomb of Lorenzo de Medici",
    "http://www.wga.hu/art/m/michelan/1sculptu/medici/2lorenz.jpg",
  ]);
  images.push([
    "Dawn (Aurora)",
    "Dawn (Aurora)",
    "https://upload.wikimedia.org/wikipedia/it/e/eb/Sagrestia_nuova,_aurora,_1524-27.jpg",
  ]);
  images.push([
    "Dusk (Tramonto)",
    "Dusk (Tramonto)",
    "https://upload.wikimedia.org/wikipedia/it/8/8f/Sagrestia_nuova,_crepuscolo.jpg",
  ]);
  images.push([
    "Vision of St Jerome ",
    "Vision of St Jerome ",
    "https://upload.wikimedia.org/wikipedia/commons/b/be/Parmigianino_-_The_Vision_of_St_Jerome_-_WGA17044.jpg",
  ]);
  images.push([
    "Night (Notte)",
    "Night (Notte)",
    "http://cultura.biografieonline.it/wp-content/uploads/2014/02/Sagrestia-nuova-scultura-di-Michelangelo.jpg",
  ]);
  images.push([
    "Day (Giorno)",
    "Day (Giorno)",
    "https://upload.wikimedia.org/wikipedia/commons/a/a1/Tomb_of_Giuliano_de'_Medici_(casting_in_Pushkin_museum)_by_shakko_04.jpg",
  ]);
  images.push([
    "Adam and Eve",
    "Adam and Eve",
    "http://courtauld.ac.uk/wp-content/uploads/port/ol/P-1947-LF-77-tif-10575-681x1024.jpg",
  ]);
  images.push([
    "Portrait of Lady Mary Guildford",
    "Portrait of Lady Mary Guildford",
    "http://www.wga.hu/art/h/holbein/hans_y/1528/2guildf2.jpg",
  ]);
  images.push([
    "Deposition from the Cross",
    "Deposition from the Cross",
    "https://upload.wikimedia.org/wikipedia/commons/5/58/Jacopo_Pontormo_-_Kreuzabnahme_Christi.jpg",
  ]);
  images.push([
    "Adam and Eve",
    "Adam and Eve",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Cranach,_adamo_ed_eva,_uffizi.jpg/600px-Cranach,_adamo_ed_eva,_uffizi.jpg",
  ]);
  images.push([
    "Portrait of Martin Luther",
    "Portrait of Martin Luther ",
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Lucas_Cranach_%28I%29_workshop_-_Martin_Luther_%28Uffizi%29.jpg",
  ]);
  images.push([
    "The Penitent Magdalene",
    "Mary Magdalen in the Wilderness ",
    "https://upload.wikimedia.org/wikipedia/commons/4/46/Tizian_010.jpg",
  ]);
  images.push([
    "Paradise",
    "Paradise",
    "http://www.artbible.info/images/cranach_sr_paradijs_grt.jpg",
  ]);
  images.push([
    "Portrait of Pope Clement VII",
    "Portrait of Pope Clement VII",
    "http://www.rsi.ch/rete-due/programmi/cultura/riguardiamoli/Clement_VII._Sebastiano_del_Piombo._c.1531..jpg-3185527.html/ALTERNATES/FREE_1080/Clement_VII._Sebastiano_del_Piombo._c.1531..jpg",
  ]);
  images.push([
    "Genius of Victory",
    "Genius of Victory",
    "https://s-media-cache-ak0.pinimg.com/736x/a4/b7/79/a4b77972a664aba476718997448c9014.jpg",
  ]);
  images.push([
    "Fall of the Giants",
    "Fall of the Giants",
    "http://www.arteworld.it/wp-content/uploads/2013/02/Sala-dei-giganti-cupola-concilio-degli-dei.jpg",
  ]);
  images.push([
    "Portrait of Charles V with a Dog",
    "Portrait of Charles V with a Dog",
    "https://upload.wikimedia.org/wikipedia/commons/a/aa/Tizian_081.jpg",
  ]);
  images.push([
    "Madonna with the Long Neck",
    "Madonna with the Long Neck",
    "https://upload.wikimedia.org/wikipedia/commons/6/6b/Parmigianino_-_Madonna_dal_collo_lungo_-_Google_Art_Project.jpg",
  ]);
  images.push([
    "Pietà",
    "Pietà",
    "https://upload.wikimedia.org/wikipedia/commons/6/6e/Rosso_Fiorentino_-_Pietà_-_WGA20135.jpg",
  ]);
  images.push([
    "Portrait of King Henry VIII",
    "Portrait of King Henry VIII",
    "https://upload.wikimedia.org/wikipedia/commons/0/07/Workshop_of_Hans_Holbein_the_Younger_-_Portrait_of_Henry_VIII_-_Google_Art_Project.jpg",
  ]);
  images.push([
    "Portrait of Pope Paul III",
    "Portrait of Pope Paul III",
    "https://upload.wikimedia.org/wikipedia/commons/e/eb/Titian_-_Pope_Paul_III_-_WGA22962.jpg",
  ]);
  images.push([
    "Portrait of Eleonora of Toledo with her son Giovanni de' Medici",
    "Portrait of Eleonora of Toledo with her son Giovanni de' Medici",
    "https://upload.wikimedia.org/wikipedia/commons/f/f0/Bronzino_-_Eleonora_di_Toledo_col_figlio_Giovanni_-_Google_Art_Project.jpg",
  ]);
  images.push([
    "Flight into Egypt",
    "Flight into Egypt",
    "https://upload.wikimedia.org/wikipedia/commons/0/0a/Jacopo_Bassano_-_La_Fuga_in_Egitto_(Norton_Simon_Museum).jpg",
  ]);
  images.push([
    "Perseus with the Head of Medusa",
    "Perseus with the Head of Medusa",
    "http://s4.thingpic.com/images/wE/W8Txc9jyycdD9CCDntWohF6L.jpeg",
  ]);
  images.push([
    "Conversion of Mary Magdalene",
    "Conversion of Mary Magdalene",
    "https://upload.wikimedia.org/wikipedia/commons/c/cc/Paolo_Veronese,_The_Conversion_of_Mary_Magdalene.jpg",
  ]);
  images.push([
    "Miracle of the Slave",
    "Miracle of the Slave",
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Jacopo_tintoretto,_san_marco_libera_uno_schiavo,_1547-48,_da_capitolo_della_scuola_grande_di_s.marco_01.JPG",
  ]);
  images.push([
    "Equestrian Portrait of Charles V",
    "Emperor Charles V on Horseback ",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Carlos_V_en_Mühlberg,_by_Titian,_from_Prado_in_Google_Earth.jpg/863px-Carlos_V_en_Mühlberg,_by_Titian,_from_Prado_in_Google_Earth.jpg",
  ]);
  images.push([
    "Portrait of Philip II in Armour",
    "Portrait of Philip II in Armour",
    "https://upload.wikimedia.org/wikipedia/commons/d/df/Philip_II.jpg",
  ]);
  images.push([
    "Pietà",
    "Pietà",
    "https://upload.wikimedia.org/wikipedia/commons/8/88/Pietà_di_baccio_bandinelli_01.JPG",
  ]);
  images.push([
    "Perseus and Andromeda",
    "Perseus and Andromeda",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Titian_-_Perseus_and_Andromeda_-_WGA22891.jpg/853px-Titian_-_Perseus_and_Andromeda_-_WGA22891.jpg",
  ]);
  images.push([
    "Venus and Adonis",
    "Venus and Adonis",
    "https://content2.cdnprado.net/imagenes/Documentos/imgsem/bc/bc9c/bc9c1e08-2dd7-44d5-b926-71cd3e5c3adb/125ede71-0407-4400-85de-7072576f1ab9.jpg",
  ]);
  images.push([
    "Rape of Europa",
    "Rape of Europa",
    "https://upload.wikimedia.org/wikipedia/commons/4/41/Tizian_085.jpg",
  ]);
  images.push([
    "Harvesters",
    "Harvesters",
    "http://www.metmuseum.org/toah/images/hb/hb_19.164.jpg",
  ]);
  images.push([
    "Martyrdom of St George",
    "Martyrdom of St George",
    "https://upload.wikimedia.org/wikipedia/commons/6/6c/Paolo_Veronese_023.jpg",
  ]);
  images.push([
    "Crucifixion",
    "Crucifixion",
    "http://www.wga.hu/art/t/tintoret/3_1560s/6cassia2.jpg",
  ]);
  images.push([
    "Mars and Venus United by Love",
    "Mars and Venus United by Love",
    "http://images.metmuseum.org/CRDImages/ep/original/DP167124.jpg",
  ]);

  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + window.innerWidth;
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth);
    let listW = images.length * window.innerWidth;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW;
    }
    setScrollX(x);
    console.log(images);
  };

  return (
    <div className="Row--listarea">
      <img className="Icon--info" src={infoIcon} alt="" />

      <div
        className="Row--list"
        style={{
          marginLeft: scrollX,
          transition: "all ease 2s",
        }}
      >
        {images.map((val) => {
          return (
            <div className="Main">
              <img src={val[2]} alt="" />
              <div className="Text">
                <h1 className="Text--Title">{val[0]}</h1>
                <h3 className="Text--Content">{val[1]}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div class="buttons">
        <button class="next" onClick={handleRightArrow}></button>
        <button class="prev" onClick={handleLeftArrow}></button>
      </div>
    </div>
  );
};
