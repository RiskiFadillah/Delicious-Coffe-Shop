const formulirEl = document.querySelector(".formulir");

formulirEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formulirEl);
  const data = Object.fromEntries(formData);

  fetch("https://63a00dca24d74f9fe82ce566.mockapi.io/Users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) return Promise.reject(new Error(`HTTP Error ${res.status}`));

      return res.json();
    })
    .then((data) => console.log(data), alert("Data Berhasil di input"))
    .catch((error) => console.error(error));
});
