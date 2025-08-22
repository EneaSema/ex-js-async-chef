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

async function getChefBirthday(id) {
  let resolve;
  try {
    const responseFetch = await fetch(`https://dummyjson.com/recipes/${id}`);

    resolve = await responseFetch.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Non recupero la ricetta con id= ${id}`);
  }
  if (!resolve) {
    throw new Error(`Ricetta con id= ${id} non trovata!`);
  }
  console.log(resolve);
  const userId = resolve.userId;

  console.log(userId);
  let resolveUser;
  try {
    const responseFetchUser = await fetch(
      `https://dummyjson.com/users/${userId}`
    );

    resolveUser = await responseFetchUser.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Non recupero lo chef con id= ${id}`);
  }
  if (!resolveUser) {
    throw new Error(`Chef con id= ${id} non trovato!`);
  }
  console.log(resolveUser);
  const birthday = resolveUser.birthDate;
  console.log(birthday);

  return birthday;
}

getChefBirthday(12345678910)
  .then((birthday) => console.log(`La data di nascità dello chef è:`, birthday))
  .catch((error) => console.error(`Errore.`, error.messagge));

// BONUS 2

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
