let fetchApi = async () => {
  try {
    let data = await fetch("https://api.github.com/users");
    let finalData = await data.json();
    console.log(finalData);
  } catch (error) {
    console.log(error);
  }
};
fetchApi();
