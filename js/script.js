var d = Date();

console.log("Year: " +d)


function toggleAdditionalInfo() {
    var additionalInfo = document.querySelector('.additionalInfo');
    var btn = document.querySelector('.btn');
    
    if (additionalInfo.style.display === 'none') {
        additionalInfo.style.display = 'block';
        btn.value = 'Read less'; // Change button text
    } else {
        additionalInfo.style.display = 'none';
        btn.value = 'Read more...'; // Change button text back
    }
}
