/*
MIT License

Copyright (c) 2016 Gregory Lafrance

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

function init() {
  otherSitesListener();
}


function otherSitesListener () {
  document.getElementById('paragonicaOtherSitesSelect').onchange = function (event) {
    var url = '';
    
    switch(event.target.value) {
      case 'japanese':
        url = 'http://www.paragonica.com/japanese/index.html';
        break;
      case 'dashboard':
        url = 'http://www.paragonica.com/dashboard';
        break;
      case 'flight':
        url = 'http://www.paragonica.com/flightSimulator';
        break;
    }
    if (url) {
      window.open(url, '_blank');
    }
    event.target.value = 'other Paragonica sites';
  };  
}

function showPage (id, solutionId) {
  var data, callback = this.processPage;

  document.getElementById('challenge-content').style.display = "none";
  document.getElementById('solution').style.display = "none";
  document.getElementById('tutorial-content').style.display = "none";
  document.getElementById('show-solution').textContent = "Show Solution";
  document.getElementById('show-solution').style.display = "none";

  if (id) {
    makePageRequest({
      url: id,
      callback: callback,
      solutionId: solutionId || null
    });
  } else {
    console.log('showExample - example id missing');
  }
}

function processPage (data, solutionId) {
  if (solutionId) {
    document.getElementById('challenge-content').innerHTML = data;
    document.getElementById('challenge-content').style.display = "block";
    document.getElementById('show-solution').style.display = "block";
    
    makePageRequest({
      url: solutionId,
      callback: processSolution
    });
  } else {
    document.getElementById('tutorial-content').innerHTML = data;
    document.getElementById('tutorial-content').style.display = "block";
  }
}

function processSolution (data) {
  document.getElementById('solution').innerHTML = data;
}

function showSolution () {
  var button = document.getElementById('show-solution');
  if (button.textContent === "Show Solution") {
    button.textContent = "Hide Solution";
    document.getElementById('solution').style.display = "block";
  } else {
    button.textContent = "Show Solution";
    document.getElementById('solution').style.display = "none";
  }
}