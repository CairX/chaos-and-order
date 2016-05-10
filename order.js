(function () {
    "use strict";

    var states = ["", "O", "X"];
    var grid = [];
    var gridElement = document.getElementsByClassName("grid")[0];

    var cellEvent = function (event) {
        var index = states.indexOf(event.target.innerHTML) + 1;
        if (index >= states.length) {
            index = 0;
        }
        event.target.innerHTML = states[index];
    };

    var reset = function() {
        var cells = document.getElementsByClassName("cell");
        Array.prototype.forEach.call(cells, function(cell) {
            cell.innerHTML = states[0];
        });
    };

    for (var y = 0; y < 5; y++) {
        var row = document.createElement("div");
        row.setAttribute("class", "row");
        grid[y] = [];

        for (var x = 0; x < 5; x++) {
            var cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            cell.addEventListener("click", cellEvent, false);

            grid[y][x] = cell;
            row.appendChild(cell);
        }

        gridElement.appendChild(row);
    }

    document.getElementById("reset").addEventListener("click", reset, false);
})();
