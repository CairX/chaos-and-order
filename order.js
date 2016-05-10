(function () {
    "use strict";
    var states = ["", "O", "X"];

    var clicky = function (e) {
        // console.log(e.target);
        var index = states.indexOf(e.target.innerHTML) + 1;
        // console.log(e.target.innerHTML);
        // console.log(index);
        // console.log(states.length);
        if (index >= states.length) {
            index = 0;
        }
        e.target.innerHTML = states[index];
    };

    var grid = [];
    var e = document.getElementsByClassName("grid")[0];
    for (var y = 0; y < 5; y++) {
        var row = document.createElement("div");
        row.setAttribute("class", "row");

        grid[y] = [];

        for (var x = 0; x < 5; x++) {
            var cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            cell.addEventListener("click", clicky, false);

            // Add to grid
            grid[y][x] = cell;
            // Add to DOM
            row.appendChild(cell);
        }

        e.appendChild(row);
    }

    document.getElementById("reset").addEventListener("click", function() {
        for (var y = 0; y < grid.length; y++) {
            for (var x = 0; x < grid[y].length; x++) {
                grid[y][x].innerHTML = "";
            }
        }        
    }, false);
})();
