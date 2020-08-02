const taskSection = document.querySelector(".task-1");
const categoriesList = document.querySelector("#categories");
const categoriesListItem = document.querySelectorAll("#categories>li");

//==============================================
// const amountList = categoriesList.childElementCount;
const amountList = categoriesListItem.length;

const answerPlace = document.createElement("p");
answerPlace.classList.add("answer");
taskSection.appendChild(answerPlace);
answerPlace.textContent = `В списке ${amountList} категории.`;

const listChildrenArr = Array.from(categoriesList.children);
const countElements = listChildrenArr.map((elem) => {
  const listTitle = elem.children[0].textContent;
  const elementAmount = elem.children[1].childElementCount;

  return `В категории "${listTitle}" ${elementAmount} элемента.`;
});

const answerList = document.createElement("ul");
answerList.classList.add("answer");

countElements.forEach((element) => {
  const answerListItem = document.createElement("li");
  answerListItem.textContent = element;
  answerList.appendChild(answerListItem);
});

taskSection.appendChild(answerList);
