class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements

    question.input1.hide();
    question.input2.hide();
    question.button.hide();
    question.question.hide();
    question.option1.hide();
    question.option2.hide();
    question.option3.hide();
    question.option4.hide();


    //write code to show a heading for showing the result of Quiz
question.title.html('YEA, LETS SEE THE SCORES');
question.title.position(220, 0)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()
    let displayP = 90;
    //write condition to check if contestantInfor is not undefined
if (allContestants !== undefined){
    //write code to add a note here
    for (var allPlayers  in allContestants){
      displayP = displayP + 30
question.title.html('QUIZ GAME LEADERBOARD')
    //write code to highlight contest who answered correctly
    if (allPlayers === 'contestant' + contestant.index){
      fill('red')
      
    }
    else{
      fill('green');
    }
    textAlign(LEFT);
    textSize(19)
    text(`${allContestants[allPlayers].name}: ${allContestants[allPlayers].answer}`,340,displayP)
  } 
}
  }

}
