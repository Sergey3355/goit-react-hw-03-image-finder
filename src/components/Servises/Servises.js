const URL = 'https://pixabay.com/api/';
const KEY = '31518075-551669ea4aa46fd1ffbbec3c4';
const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

function Servises (inputData, page = 1) {
  return fetch(`${URL}?q=${inputData}&page=${page}&key=${KEY}${FILTER}`).then(
    response => response.json()
  );
}

export default Servises; 
