// import axios from 'axios';
export default fetchData = async () => {
  try {
    const response = await fetch("/covid");
    const data = await response.toJson();
    return data;
  } catch (e) {
    console.log(e);
  }
};
