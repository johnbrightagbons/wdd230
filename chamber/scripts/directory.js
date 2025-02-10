fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        const memberCardsContainer = document.getElementById('memberCardsContainer');
        data.Members.forEach(member => {
            const card = document.createElement('div');
            card.className = 'member-card';
            card.innerHTML = `
                <img src="${member.image}" alt="${member.name}'s image">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}">${member.website}</a></p>
                <p>${member['membership level'] || 'None'}</p>
                <p>${member.expertise}</p>
                <p>${member.membership || 'None'}</p>
            `;
            memberCardsContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error:', error));




document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("directory-container");
    const gridButton = document.getElementById("grid");
    const listButton = document.getElementById("list");

    // Fetch JSON Data
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            renderMembers(data.Members);
        })
        .catch(error => console.error("Error loading members:", error));

    function renderMembers(members) {
        container.innerHTML = ""; // Clear previous content
        members.forEach(member => {
            const div = document.createElement("div");
            div.classList.add("member-card");

            div.innerHTML = `
                    <img src="${member.image}" alt="${member.name}">
                    <div>
                        <h3>${member.name}</h3>
                        <p><strong>Address:</strong> ${member.address}</p>
                        <p><strong>Phone:</strong> ${member.phone}</p>
                        <p><strong>Membership Level:</strong> ${member["membership level"]}</p>
                        <p><strong>Expertise:</strong> ${member.expertise}</p>
                        <a href="${member.website}" target="_blank">Visit Website</a>
                    </div>
                `;
            container.appendChild(div);
        });
    }

    // Toggle Views
    gridButton.addEventListener("click", function () {
        container.classList.add("grid");
        container.classList.remove("list");
    });

    listButton.addEventListener("click", function () {
        container.classList.add("list");
        container.classList.remove("grid");
    });
});

