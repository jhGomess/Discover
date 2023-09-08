function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  // }

  const img = document.querySelector(".profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto light de Jhuan Gomes Calenta usando oculos e sorrindo."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Jhuan Gomes Calenta em seu quarto vestindo uma camiseta preta."
    )
  }
}
