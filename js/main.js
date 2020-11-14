let bloom = document.querySelector('#bloom');

bloom.onclick = () => {
  if (bloom.getAttribute('src') === 'js_project/images/carnation_buds.jpg')
    {
      bloom.setAttribute('src', 'js_project/images/carnation.jpg');
} else {
  bloom.setAttribute('src', 'js_project/images/carnation_buds.jpg');
}
};


let colors = document.querySelector('#colors');

colors.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', 'js_project/images/pink_carnation.jpg');
};

colors.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', 'js_project/images/moondust-carnation.jpg');
};
