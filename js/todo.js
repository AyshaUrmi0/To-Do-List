
        let count = 0;
        document.getElementById("input-btn").addEventListener("click", function () {
            count += 1;
            const myInputValue = document.getElementById("input-value").value;
            const parent = document.getElementById("content-container");
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${count}</td>
                <td>${myInputValue}</td>
                <td>
                    <button class='btn btn-outline-info deletebtn'>Delete</button>
                    <button class='btn btn-outline-warning'>Done</button>
                </td>
            `;
            parent.appendChild(tr);
            document.getElementById("input-value").value = "";

            const elements = document.querySelectorAll(".deletebtn");
            for (const value of elements) {
                value.addEventListener("click", function (e) {
                    e.target.parentNode.parentNode.style.display = "none";
                });
            }
        });

        document.getElementById("clear-btn").addEventListener("click", function (e) {
            const parent = document.getElementById("content-container");
            parent.innerHTML = "";
            
        });
   