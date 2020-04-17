import _ from "lodash";

import "./style.css";

function component() {
    var element = document.createElement('div');

    // Lodash通过模块引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component()); 