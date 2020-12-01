var readline=require('readline-sync');
var score=0;
var lscore=0;
var flag=true;
console.log("GK Quiz");
var user=readline.question("Enter your name ");
console.log("Welcome!! "+user);
console.log("Test your general knowledge by taking this quiz. \nRules: \n1. You have 5 levels and each level contains 5 questions \n2. you should score minimum 3 points to pass a level and move on to next \n3. You get 1 point for each wright answer.There is no negative marking.\nAre you Ready? \nlet's begin!!!");

var highscore={name:"Marivignesh",score:"25"};

function play(question,answer){
  var uans=readline.question(question+"Your option:");
  if(uans==answer){
    console.log("correct answer!! You get 1 point");
    score+=1;
    lscore+=1;
  }
  else{
    console.log("sorry!!wrong answer you get 0 point");
  }
  for(j=0;j<50;j++)
  {
    process.stdout.write("-");
  }
  console.log();
}

var level1=[{que:"1.who is the prime minister of India?\na)Narendra modi\t\t\t\t\tb)Manmohan singh\n",ans:"a"},
{que:"2.Who wrote the Indian National Anthem?\na)Swami Vivekanand\t\t\t\t\tb)Rabindranath Tagore\n",ans:"b"},
{que:"3. Who was the first Indian woman to win the Miss World Title?\na) Aishwarya Rai\t\t\t\t\tb)Reita Faria\n",ans:"b"},
{que:"4.Who among the following has been nominated for the ICC Player of the Decade Award?\na)Virat kholi\t\t\t\t\tb)M S Dhoni\n",ans:"a"},
{que:"5.Who among the following has not been nominated for the ODI Player of the Decade award?\na)Steve smith\t\t\t\t\tb)AB Devilers\n",ans:"a"}];

var level2=[{que:"1.Which among the following country first reached the ‘Dark Side’ of the Moon?\na)USA\t\t\t\t\tb)China\n",ans:"b"},
{que:"2.Which country has developed the world-first floating nuclear plant?\na)USA\t\t\t\t\tb)Russia\n",ans:"b"},
{que:"3.Which country in the world has maximum number of robots working?\na)China\t\t\t\t\tb)Japan\n",ans:"b"},
{que:"4.What is the national currency of Germany?\na)Euro\t\t\t\t\tb)Pound\n",ans:"a"},
{que:"5.What is the national currency of the United Kingdom?\na)Pound Sterling\t\t\t\t\tb)Yen\n",ans:"b"}];

var level3=[{que:"1. Which was the first Internet service in India?\na)Education and Research Network\t\t\t\t\tb) HINDNET\n",ans:"a"},
{que:"2.The inventor of printing press was\na) Frederic Barbier\t\t\t\t\tb)Johann Guttenberg\n",ans:"b"},
{que:"3.The Steam engine was invented by\na)Thomas Savery\t\t\t\t\tb)Henry Ford\n",ans:"a"},
{que:"4. Who was the inventor of Video games?\na)Henry Moseley\t\t\t\t\tb)Ralph Baer\n",ans:"b"},
{que:"5.who invented the mobile phone.\na)Martin Cooper\t\t\t\t\tb)Charles Thermos\n",ans:"a"}];

var level4=[{que:"1.About how many computer languages are in use?\na)2000\t\t\t\t\tb)20\n",ans:"a"},
{que:"2.A network designed to allow communication within an organization is called:\na)Browser\t\t\t\t\tb)Intranet\n",ans:"b"},
{que:"3.What operating system did Google develop?\na)BlackberryOS\t\t\t\t\tb)Android\n",ans:"b"},
{que:"4.What was the name of the chess-playing computer that made history when it defeated world champion Garry Kasparov in 1996?\na)Deep blue\t\t\t\t\tb)Rybka\n",ans:"a"},
{que:"5.Who coined the term artificial intelligence?\na)John McCarthy\t\t\t\t\tb)Herbert A simon\n",ans:"a"}];

var level5=[{que:"1.Which of these was the first supercomputer?\na)CDC 6600\t\t\t\t\tb)ENIAC\n",ans:"a"},
{que:"2.Which of these was the first cell phone to use the Android operating system?\na)T-MObile G1\t\t\t\t\tb)Samsung Rant\n",ans:"a"},
{que:"3.Who created the computer-programming language FORTRAN?\na)Dennis Ritchie\t\t\t\t\tb)John Backus\n",ans:"b"},
{que:"4.In what year was Google founded?\na)1975\t\t\t\t\tb)1998\n",ans:"b"},
{que:"5.Who is known as the first computer programmer?\na)Ada Lovelace\t\t\t\t\tb)Charles Babbage\n",ans:"a"}];

var levels=[0,level1,level2,level3,level4,level5];

function main1(level){
  lscore=0;
  for(i=0;i<level.length;i++){
    play(level[i].que,level[i].ans);
  }
  for(m=0;m<50;m++){process.stdout.write("-")};
  console.log();
}

function main(){
  for(k=1;k<=5;k++){
    switch(k){
    case 1:{
      console.log("Level 1.......................")
       main1(levels[k]);break;
    }
    case 2:{
        console.log("Level 2.......................")
       main1(levels[k]);break;
    }
    case 3:{
        console.log("Level 3.......................")
       main1(levels[k]);break;
    }
    case 4:{
        console.log("Level 4.......................")
       main1(levels[k]);break;
    }
    case 5:{
        console.log("Level 5.......................")
       main1(levels[k]);break;
    }
  }
    if(lscore>2){
    console.log("Level "+k+" passed..Good to see you in next level..");
    }
    else
    {
      console.log("sorry!! Your level score is"+lscore+" < 3! cannot proceed to next Level..\nTry better next time!!");
      break;
    }
  }
  console.log("Hurray!! You have successfully completed this quiz.");
  console.log("Your final score is"+score);
  console.log("Highscore:"+highscore.score);
}

main();