// async function getChefBirthday(id) {
//   let responseFetch;
//   try {
//     responseFetch = await fetch(`https://dummyjson.com/recipes/${id}`);
//     const resolve = await responseFetch.json();
//     console.log(resolve);
//     const userId = resolve.userId;

//     console.log(userId);
//     const responseFetchUser = await fetch(
//       `https://dummyjson.com/users/${userId}`
//     );
//     const resolveUser = await responseFetchUser.json();
//     console.log(resolveUser);
//     const birthday = resolveUser.birthDate;
//     console.log(birthday);
//     return birthday;
//   } catch (error) {
//     console.error(`Errore:`, error.messagge);
//   }
// }

// getChefBirthday(1)
//   .then((birthday) => console.log(`La data di nascità dello chef è:`, birthday))
//   .catch((error) => console.error(`Errore.`, error.messagge));

// BONUS 1

// Ho dovuto guardare il video per poterlo fare

async function getChefBirthday(id) {
  let recipe;
  try {
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    recipe = await recipeResponse.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Non recupero la ricetta con id= ${id}`);
  }
  if (recipe.messagge) {
    throw new Error(recipe.messagge);
  }
  // console.log(resolve);
  // const userId = resolve.userId;

  // console.log(userId);
  let chef;
  try {
    const chefResponse = await fetch(
      `https://dummyjson.com/users/${recipe.userId}`
    );
    chef = await chefResponse.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Non recupero lo chef con id= ${id}`);
  }
  if (chef.messagge) {
    throw new Error(chef.messagge);
  }

  return chef.birthDate;
}

(async () => {
  try {
    const birthday = await getChefBirthday(1345187);
    console.log(`La data di nascità dello chef è:`, birthday);
  } catch (error) {
    console.error(`Errore:`, error); // non funziona con error.messagge e compare questo: console.log(`La data di nascità dello chef è:`, birthday);
  }
})();

// BONUS 2

// Ho cercato online come fare per integrare la libreria ed utilizzarla

// async function getChefBirthday(id) {
//   let responseFetch;
//   try {
//     responseFetch = await fetch(`https://dummyjson.com/recipes/${id}`);

//     const resolve = await responseFetch.json();
//     console.log(resolve);
//     const userId = resolve.userId;

//     console.log(userId);
//     const responseFetchUser = await fetch(
//       `https://dummyjson.com/users/${userId}`
//     );
//     const resolveUser = await responseFetchUser.json();
//     console.log(resolveUser);
//     const birthday = dayjs(resolveUser.birthDate);
//     const formatBirthday = birthday.format(`DD/MM/YYYY`);
//     return formatBirthday;
//   } catch (error) {
//     console.error(`Errore:`, error.messagge);
//   }
// }

// getChefBirthday(3)
//   .then((birthday) => console.log(`La data di nascità dello chef è:`, birthday))
//   .catch((error) => console.error(`Errore.`, error.messagge));
