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
// Wrap the request call in an immediate function so the httpRequest
// object will be unique for each call, otherwise it could have
// wrong data values due to how closures work.
function makeMetadataRequest (options) {
    (function(options) {
        var httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            console.log('makeMetadataRequest - cannot create an XMLHTTP instance');
            return false;
        }

        if(!validOptions(options)) {
            return false;
        }

        httpRequest.onreadystatechange = handleResponse;
        httpRequest.open('GET', 'examples/' + options.url + '.txt?pseudoParam=' + new Date().getTime());
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        httpRequest.send();

        function handleResponse() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    options.callback(JSON.parse(httpRequest.responseText));
                } else {
                    console.log('makeMetadataRequest - there was a problem with the request');
                }
            }
        }
    })(options);
}

function makeSolutionRequest (options) {
    (function(options) {
        var httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            console.log('makeSolutionRequest - cannot create an XMLHTTP instance');
            return false;
        }

        if(!validOptions(options)) {
            return false;
        }

        httpRequest.onreadystatechange = handleResponse;
        httpRequest.open('GET', 'examples/' + options.url + 'Solution.txt?pseudoParam=' + new Date().getTime());
        httpRequest.setRequestHeader('Content-Type', 'text/plain');
        httpRequest.send();

        function handleResponse() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    options.callback(httpRequest.responseText);
                } else {
                    console.log('makeSolutionRequest - there was a problem with the request');
                }
            }
        }
    })(options);
}

function validOptions (options) {
    var isValid = true;
    if (options) {
        if (!options.hasOwnProperty('url') || !options.hasOwnProperty('callback')) {
            isValid = false;
            console.log('validOptions - options must have at least these options:\n' +
            "\turl - name of file to retrieve\n\tcallback - function to call after request");
        }
    } else {
        isValid = false;
        console.log('validOptions - options missing');
    }
    return isValid;
}

