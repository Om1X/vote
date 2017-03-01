function Voter() {
  var
    vote = document.getElementsByClassName('vote')[0],
    up = document.getElementsByClassName('up')[0],
    down = document.getElementsByClassName('down')[0];
  this.setVote = function (votes) {
    vote.innerHTML = votes >= 0 ? votes : 0;
  };

  up.onclick = function () {
    vote.innerHTML = +(vote.innerHTML) + 1;
  };

  down.onclick = function () {
    vote.innerHTML = (vote.innerHTML > 0) ? +(vote.innerHTML) - 1 : 0;
  };
}

var voter = new Voter();
votes = prompt('Введите начальное количество голосов: ');
voter.setVote(votes);