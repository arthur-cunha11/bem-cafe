export const underlineTarget = (event: any) => {
  const target = event.target;

  for (let i = 0; i < document.getElementsByTagName("a").length; i++) {
    document.getElementsByTagName("a")[i].classList.remove("active");
  }

  target.classList.add("active");
};

export const underlineText = (text: string) => {
  let element;
  const a = document.getElementsByTagName("a");

  for (let i = 0; i < a.length; i++) {
    a[i].classList.remove("active");
    if (a[i].text === text) {
      element = a[i];
    }
  }

  element?.classList.add("active");
};
