function loadPics(num) {
  var newRow;
  for (i = 0; i < num; i++) {
    if (i % 3 == 0) {
      if (i > 0) {
        $('#pics-loader').append(newRow);
      }
      newRow = document.createElement('div');
      newRow.classList.add('row');
    }
    newRow.appendChild(addPic(i + 1));
  }
  $('#pics-loader').append(newRow);
}

function addPic(num) {
  var newPicCont = document.createElement('div');
  newPicCont.classList.add('col-md');
  newPicCont.classList.add('p-1');
  newPicCont.classList.add('d-flex');
  newPicCont.classList.add('justify-content-center');
  newPicCont.classList.add('align-items-center');

  var newPic = document.createElement('img');
  newPic.classList.add('pics');
  newPic.src = 'img/pics/' + num + '.jpg';
  newPicCont.appendChild(newPic);

  return newPicCont;
}
