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

function showExample (id) {
    var data;
    
    document.getElementById('challenge').style.display = "none";
    document.getElementById('solution').style.display = "none";
    document.getElementById('tutorial').style.display = "none";
    document.getElementById('show_solution').textContent = "Show Solution";

    if (id) {
        makeChallengeRequest({
            url: id,
            callback: processChallenge
        });
    } else {
        console.log('showExample - example id missing');
    }
}

function processChallenge (data) {
    document.getElementById('description').textContent = getData(data, "DESC");
    document.getElementById('task').textContent = getData(data, "TASK");
    document.getElementById('test_data').textContent = getData(data, "DATA");
    document.getElementById('challenge').style.display = "block";
    document.getElementById('solution').textContent = getData(data, "SOLUTION");
}

function showSolution () {
    var button = document.getElementById('show_solution');
    if (button.textContent === "Show Solution") {
        button.textContent = "Hide Solution";
        document.getElementById('solution').style.display = "block";
    } else {
        button.textContent = "Show Solution";
        document.getElementById('solution').style.display = "none";
    }
}

function showTutorial (id) {
    var data;
    
    document.getElementById('challenge').style.display = "none";
    document.getElementById('solution').style.display = "none";

    if (id) {
        makeTutorialRequest({
            url: id,
            callback: processTutorial
        });
    } else {
        console.log('showTutorial - example id missing');
    }
}

function processTutorial (data) {
    document.getElementById('tutorial').innerHTML = data;
    document.getElementById('tutorial').style.display = "block";
}

function getData(data, key) {
    var retVal;
    var keyStart = data.indexOf(key + '$$$') + key.length + 3;
    var keyEnd = data.indexOf('$$$' + key);
    
    retVal = data.substring(keyStart, keyEnd);
    
    return retVal;
}
