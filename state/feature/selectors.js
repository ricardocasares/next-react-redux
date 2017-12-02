// selectors placeholder

export const selectPostCount = ({ posts }) => {
  let text;
  let count = posts.length;

  switch (count) {
    case 0:
      return "No posts";
    case 1:
      return `One post`;
  }

  return `${count} posts`;
};
