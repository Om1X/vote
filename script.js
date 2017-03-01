function Voter(options) {
  elem = document.getElementById(options.elem);

  var
    vote = document.getElementsByClassName('vote')[0],
    up = document.getElementsByClassName('up')[0],
    down = document.getElementsByClassName('down')[0],
    votesCount;

  this.setVote = function (votes) {
    votesCount = votes >= 0 ? votes : 0;
    vote.innerText = votesCount;
  };

  votesCount = vote.innerText;

  up.onclick = function () {
    vote.innerText = ++votesCount;
  };

  down.onclick = function () {
    vote.innerText = votesCount > 0 ? --votesCount : 0;
  };
}

var voter = new Voter({
  elem: 'voter'
});
votes = prompt('Введите начальное количество голосов: ');
voter.setVote(votes);