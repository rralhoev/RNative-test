//get request returns all breeds and sub-breeds
export const getAllBreeds = async () => {
  const url = 'https://dog.ceo/api/breeds/list/all'

  let data = await fetch(url).then((response) => {
    return response.json();
  });

  try {
    let breads = [];
    if (data.status === 'success') {
      Object.keys(data.message).map(key => {
        let length = data.message[key].length;
        if (length === 0) {
          breads.push({
            value: key,
            label: key,
          });
        } else {
          for (let value of data.message[key]) {
            breads.push({
              value: key + '-' + value,
              label: key + '-' + value,
            });
          }
        }
      });
      return breads;
    }
  } catch (e) {
    console.log(e);
  }
  //send request
}

export const getImages = async (breedName) => {
  const url = `https://dog.ceo/api/breed/${breedName}/images`

  let data = await fetch(url).then((response) => {
    return response.json();
  });

  if (data.status === 'success') {
    return data.message;
  } else throw new Error();
  //send request
}
