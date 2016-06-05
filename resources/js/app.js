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

    if (id) {
        makeMetadataRequest({
            url: id,
            callback: processMetadata
        });
        makeSolutionRequest({
            url: id,
            callback: processSolution
        });
    } else {
        console.log('showExample - example id missing');
    }
}

function processMetadata (data) {
    document.getElementById('description').textContent = data.description;
    document.getElementById('description').style.display = "block";
    document.getElementById('task').textContent = data.task;
    document.getElementById('task').style.display = "block";
    document.getElementById('test_data').textContent = data.test_data;
    document.getElementById('test_data').style.display = "block";
    document.getElementById('show_solution').style.display = "block";
}

function processSolution (data) {
    document.getElementById('solution').textContent = data;
}

function showSolution () {
    document.getElementById('solution').style.display = "block";
}