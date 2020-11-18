let conduct = require("./code_of_conduct.js")
const MIT_LICENSE_TEXT = `Copyright (c) 2013-2018 GitHub, Inc. and contributors. Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`

const WTFPL_LICENSE_TEXT = `Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. You just DO WHAT THE FUCK YOU WANT TO.
`

const APACHE_LICENSE_TEXT = `Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`

function getLicenseDesc(answers) {
    switch (answers.license) {
        case "mit":
            return MIT_LICENSE_TEXT
        case "wtfpl":
            return WTFPL_LICENSE_TEXT
        case "apache":
            return APACHE_LICENSE_TEXT
        default:
            return "No license"
    }
}

function createReadme(answers) {
    if (answers.contribute === 'contributorv2.0') {
        answers.contribute = conduct
    }
    let markdownString = `![Issues Badge](https://img.shields.io/github/issues/${answers.github}/${answers.repo})
![Issues Badge](https://img.shields.io/github/forks/${answers.github}/${answers.repo})
![Issues Badge](https://img.shields.io/github/stars/${answers.github}/${answers.repo})
# ${answers.title}
![Image](${answers.image})
# Owner Info:
[My Account](https://github.com/${answers.github})
[My Repository](https://github.com/${answers.github}/${answers.repo})
# How to Use:
${answers.howtouse}
# License
${getLicenseDesc(answers)}
# How to Contribute:
${answers.contribute}`
    return markdownString
}


module.exports = createReadme

//https://repl.it/@jordanjubenvill/boilerplate-express-1#README.md