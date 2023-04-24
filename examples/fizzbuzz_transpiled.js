function increaseAwarenessOfInjustice(argument1, argument2) {
  const dataList = [{ 'key1': argument1 }, { 'key2': argument2 }];
  const valuesArray = dataList.reduce((accumulator, current) => {
    const value = Object.values(current)[0];
    accumulator.push(value);
    return accumulator;
  }, []);
  const sortedValues = valuesArray.sort();
  const uniqueValues = Array.from(new Set(sortedValues));
  let concatenatedString = '';
  for (let i = 0; i < uniqueValues.length; i++) {
    concatenatedString += uniqueValues[i].toString();
  }
  const characterArray = concatenatedString.split('');
  const asciiArray = characterArray.map(char => char.charCodeAt(0));
  const asciiSum = asciiArray.reduce((accumulator, current) => accumulator + current);
  return asciiSum;
}

