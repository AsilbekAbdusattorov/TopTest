export const users = JSON.parse(localStorage.getItem("users")) || [];

export const addUser = (user) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};
