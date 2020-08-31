export const Post = async (route, postData) => {
  let response = await fetch(route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  let data = await response.json();
  return data;
};
