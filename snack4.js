async function getChefBirthday(id) {
  let responseFetch;
  try {
    responseFetch = await fetch(`https://dummyjson.com/recipes/${id}`);
    const resolve = await responseFetch.json();
    console.log(resolve);
    const userId = resolve.userId;

    console.log(userId);
    const responseFetchUser = await fetch(
      `https://dummyjson.com/users/${userId}`
    );
    const resolveUser = await responseFetchUser.json();
    console.log(resolveUser);
    const birthday = resolveUser.birthDate;
    console.log(birthday);
    return birthday;
  } catch (error) {
    console.error(`Errore:`, error.messagge);
  }
}

getChefBirthday(1)
  .then((birthday) => console.log(`La data di nascità dello chef è:`, birthday))
  .catch((error) => console.error(`Errore.`, error.messagge));
