let bloom = document.querySelector('#bloom');

bloom.onclick = () => {
  if (bloom.getAttribute('src') === 'images/carnation_buds.jpg')
    {
      bloom.setAttribute('src', 'images/carnation.jpg');
} else {
  bloom.setAttribute('src', 'images/carnation_buds.jpg');
}
};


let colors = document.querySelector('#colors');

colors.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', 'images/pink_carnation.jpg');
};

colors.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', 'images/moondust-carnation.jpg');
};
