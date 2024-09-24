function loadHTML(file, elementId) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', file, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          document.getElementById(elementId).innerHTML = xhr.responseText;
      }
  };
  xhr.send();
}

// Load header and footer
loadHTML('/header.html', 'header');
loadHTML('/footer.html', 'footer');

