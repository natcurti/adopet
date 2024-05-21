const formatName = (value: string) => {
  let allName = [...value.split(" ")];
  allName = allName.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1, word.length)
  );

  const fullName = allName.toString().replace(/,/g, " ");

  return fullName;
};

export default formatName;
