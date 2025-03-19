console.log("✅ treningstider.js is loaded!");


export function setupTrainingSchedule() {
  const groupSelect = document.getElementById("groupSelect");
  const multiSelectContainer = document.getElementById("multiSelectContainer");
  const checkboxes = document.querySelectorAll(".groupCheckbox");
  const scheduleBody = document.getElementById("scheduleBody");

  if (!groupSelect || !scheduleBody) return; // Prevents errors on other pages

  // Training schedule data
  const scheduleData = [
    { group: "A", day: "Mandag", time: "16:00 - 18:00", location: "Spicheren", basis: "no" },
    { group: "A", day: "Tirsdag", time: "06:00 - 08:00", location: "Aquarama", basis: "no" },
    { group: "A", day: "Tirsdag", time: "18:00 - 20:00", location: "Spicheren", basis: "no" },
    { group: "A", day: "Onsdag", time: "15:45 - 17:30", location: "Aquarama", basis: "no" },
    { group: "A", day: "Torsdag", time: "16:00 - 18:00", location: "Spicheren", basis: "no" },
    { group: "A", day: "Fredag", time: "06:00 - 08:00", location: "Aquarama", basis: "no" },
    { group: "A", day: "Fredag", time: "16:00 - 88:00", location: "Aquarama", basis: "no" },
    { group: "A", day: "Lørdag", time: "07:00 - 09:00", location: "Aquarama", basis: "no" },
    { group: "B", day: "Mandag", time: "16:00 - 18:00", location: "Aquarama", basis: "no" },
    { group: "B", day: "Tirsdag", time: "18:00 - 21:00", location: "Aquarama", basis: "yes" },
    { group: "B", day: "Onsdag", time: "16:00 - 18:00", location: "Aquarama", basis: "no" },
    { group: "B", day: "Torsdag", time: "18:00 - 21:00", location: "Aquarama", basis: "no" },
    { group: "B", day: "Fredag", time: "16:30 - 18:30", location: "Aquarama", basis: "yes" },
    { group: "B", day: "Lørdag", time: "07:00 - 09:00", location: "Aquarama", basis: "no" },
    { group: "C", day: "Mandag", time: "16:00 - 18:00", location: "Aquarama", basis: "no" },
    { group: "C", day: "Tirsdag", time: "18:00 - 21:00", location: "Aquarama", basis: "yes" },
    { group: "C", day: "Onsdag", time: "16:00 - 18:00", location: "Aquarama", basis: "no" },
    { group: "C", day: "Torsdag", time: "16:00 - 17:30", location: "Aquarama", basis: "no" },
    { group: "C", day: "Lørdag", time: "08:00 - 10:00", location: "Aquarama", basis: "no" },
    { group: "D", day: "Tirsdag", time: "19:00 - 20:30", location: "Aquarama", basis: "no" },
    { group: "D", day: "Onsdag", time: "17:30 - 18:45", location: "Aquarama", basis: "yes" },
    { group: "D", day: "Torsdag", time: "17:30 - 18:45", location: "Aquarama", basis: "no" },
    { group: "E", day: "Mandag", time: "19:00 - 20:00", location: "Aquarama", basis: "no" },
    { group: "E", day: "Onsdag", time: "19:00 - 20:00", location: "Aquarama", basis: "no" },
    { group: "F", day: "Onsdag", time: "18:00 - 19:00", location: "Aquarama", basis: "no" },
    
  ];
  
  console.log("Schedule Data Loaded:", scheduleData);

  function updateSchedule() {
    scheduleBody.innerHTML = ""; // Clear table
  
    let selectedGroups = new Set();
  
    console.log("Dropdown value:", groupSelect.value);
  
    if (groupSelect.value === "multiple") {
      multiSelectContainer.classList.remove("hidden");
    } else {
      multiSelectContainer.classList.add("hidden");
  
      // ✅ Reset all checkboxes when switching from "Velg flere grupper"
      checkboxes.forEach(checkbox => checkbox.checked = false);
  
      if (groupSelect.value !== "all") {
        selectedGroups.add(groupSelect.value);
      }
    }
  
    // Handle checkboxes
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedGroups.add(checkbox.value);
      }
    });
  
    console.log("Selected groups:", [...selectedGroups]);
  
    // Filter the schedule
    let filteredSchedule = scheduleData.filter(entry => selectedGroups.has(entry.group));
  
    if (selectedGroups.size === 0) {
      console.log("Showing all groups");
      scheduleData.forEach(entry => createRow(entry));
    } else if (filteredSchedule.length > 0) {
      console.log("Filtered schedule:", filteredSchedule);
      filteredSchedule.forEach(entry => createRow(entry));
    } else {
      console.log("No matching results");
    }
  }
  

  function createRow(entry) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="border border-gray-300 p-2">${entry.group}</td>  
      <td class="border border-gray-300 p-2">${entry.day}</td>
      <td class="border border-gray-300 p-2">${entry.time}</td>
      <td class="border border-gray-300 p-2">${entry.location}</td>
      <td class="border border-gray-300 p-2 text-center">
        ${entry.basis === "yes" ? "🏋️‍♂️" : ""}
      </td>
    `;
    scheduleBody.appendChild(row);
  }

  // ✅ Reset checkboxes when changing dropdown selection
groupSelect.addEventListener("change", () => {
  checkboxes.forEach(checkbox => checkbox.checked = false); // Clear all checkboxes
  updateSchedule(); // Update the schedule
});

// ✅ Keep event listeners for checkboxes
checkboxes.forEach(checkbox => checkbox.addEventListener("change", updateSchedule));

// ✅ Run on page load
updateSchedule();

}

