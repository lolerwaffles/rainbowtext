window.rainbowText = function(text, saturation = 100, lightness = 50, repetitionsPerString = 1) {
    const output = document.createElement('p');
    let html = '';
    for (let i = 0; i < text.length; i++) {
        let hue = Math.round((i / text.length * repetitionsPerString) * 360) % 360;
        html += `<span style="color:hsl(${hue}, ${saturation}%, ${lightness}%)">${text[i]}</span>`;
    }
    output.innerHTML = html;
    document.body.appendChild(output);
}
