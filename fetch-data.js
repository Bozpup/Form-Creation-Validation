const fetchUserData = async () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const dataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network not ok");
    }
    const users = await response.json();

    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      dataContainer.appendChild(userList);
      userList.appendChild(listItem);
    });
    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle errors (e.g., network issues)
    dataContainer.innerHTML = ""; // Clear the container
    dataContainer.textContent = "Failed to load user data."; // Show error message
    console.error("Failed to load user data:", error);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  fetchUserData(); // Invoke the fetchUserData function when the DOM is fully loaded
});
