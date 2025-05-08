const data = [
    {
      id: 1,
      title: "Accordion Item 1",
      content:
        "This is the content for the first accordion item. It can be text, images, or other HTML elements.",
    },
    {
      id: 2,
      title: "Accordion Item 2",
      content:
        "This is the content for the second accordion item. The content can vary depending on the section.",
    },
    {
      id: 3,
      title: "Accordion Item 3",
      content:
        "Here is the third item's content. You can include more detailed information, links, or any other type of data.",
    },
    {
      id: 4,
      title: "Accordion Item 4",
      content:
        "This is the fourth item. Content can also include dynamic data that updates based on user interaction.",
    },
    {
      id: 5,
      title: "Accordion Item 5",
      content:
        "The content for the fifth accordion item goes here. It can be styled with CSS or customized based on the application.",
    },
  ];
  
  const accordionWrapper = document.querySelector(".accordian");
  
  function createAccordianData() {
    accordionWrapper.innerHTML = data
      .map(
        (dataItem) => `
        <div class="accordian_item">
            <div class="accordian_title">${dataItem.title}</div>
            <div class="accordian_content">${dataItem.content}</div>
        </div>
      `
      )
      .join("");
  }
  createAccordianData();
  
  const getAccordianTitle = document.querySelectorAll(".accordian_title");
  getAccordianTitle.forEach
  (
    (currentItem) =>
      {
      currentItem.addEventListener
      ("click", (event) =>
      {
        console.log("come here");
        if (currentItem.classList.contains("active"))
          {
          console.log(``);
          currentItem.classList.remove("active");
        }
        else
        {
          let getAlreadyAddedActiveClass = document.querySelectorAll(".active");
          getAlreadyAddedActiveClass.forEach((currentActiveItem) =>
            {
            currentActiveItem.classList.remove("active");
          }
        );
          currentItem.classList.add("active");
        }
      }
      );
  }
);
  