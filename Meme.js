function generateMeme() {
    const imageUrl = document.getElementById('imageUrl').value.trim();
    const bottomTextInput = document.getElementById('bottomTextInput').value.trim();
    const topTextInput = document.getElementById('topTextInput').value.trim();

    const memeContainer = document.createElement('div');
    memeContainer.classList.add('meme');

    const image = document.createElement('img');
    image.src = imageUrl;

    const topText = document.createElement('div');
    topText.classList.add('TopText');
    topText.textContent = topTextInput;

    const bottomText = document.createElement('div');
    bottomText.classList.add('BottomText');
    bottomText.textContent = bottomTextInput;

    memeContainer.appendChild(image);
    memeContainer.appendChild(topText);
    memeContainer.appendChild(bottomText);

    const divArea = document.getElementById('divArea');
    divArea.appendChild(memeContainer);
}
